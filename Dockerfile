# Use multi-stage builds for efficiency and security
FROM node:24-alpine AS development-dependencies-env
WORKDIR /app
# Enable and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy only package.json and lock file first for better cache usage
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
# Copy the rest of the files needed for development (excluding files in .dockerignore)
COPY . .

FROM node:24-alpine AS production-dependencies-env
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

FROM node:24-alpine AS build-env
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
COPY --from=development-dependencies-env /app/node_modules ./node_modules
RUN pnpm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate
# Add a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY package.json pnpm-lock.yaml ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build/client ./build
# Set permissions for the non-root user
RUN chown -R appuser:appgroup /app/build
USER appuser
EXPOSE 4173
CMD ["pnpm", "exec", "serve", "build", "-l", "4173"]
