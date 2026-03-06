# Workflow Orchestration

## 1. Plan Default
- Always enter **plan mode** for non-trivial tasks or architectural decisions.
- If something goes sideways, **STOP and re-plan immediately** — do not keep pushing blindly.
- Use **plan mode for verification steps**, not only for building.
- Write **detailed specs up front** to reduce mistakes.

---

## 2. Subagent Strategy
- Use **subagents liberally** to keep the main context window clean.
- Offload **research, exploration, and parallel analysis** to subagents.
- For context problems, **approach them via subagents**.
- Assign **one task per subagent** for focused execution.

---

## 3. Self-Improvement Loop
- After corrections from the user, update `tasks/lessons.md`.
- Write **rules for yourself** that prevent the same mistake.
- Ruthlessly iterate on these lessons until the **mistake rate drops**.
- Review lessons **at the start of each session** for the relevant project.

---

## 4. Verification Before Done
- Never mark a task as done **without proving it**.
- Diff behavior between **main and your changes** when relevant.
- Ask yourself: **“Would a staff engineer approve this?”**
- Run tests, check logs, and **demonstrate correctness**.

---

## 5. Demand Elegance (Balanced)
- For non-trivial changes, pause and ask:  
  **“Is there a more elegant way?”**
- If a fix feels hacky:  
  **“Knowing everything I know, implement the elegant solution.”**
- Skip this for simple, obvious fixes — **do not over-engineer**.
- Challenge your own work **before presenting it**.

---

## 6. Autonomous Bug Fixing
- When given a bug report: **just fix it**. Do not ask for hand-holding.
- Look at **logs, errors, and failing tests**, then resolve them.
- Require **zero context switching** from the user.
- Fix failing **CI tests proactively**, without being explicitly told.

---

# Task Workflow

1. **Plan First**  
   Write a plan to `tasks/todo.md` with **checkable items**.

2. **Verify Plan**  
   Confirm the plan before starting implementation.

3. **Track Progress**  
   Mark items complete as you go.

4. **Explain Changes**  
   Provide a **high-level summary** at each step.

5. **Review Results**  
   Add a **review section** to `tasks/todo.md`.

6. **Capture Lessons**  
   Update `tasks/lessons.md` after corrections.

---

# Core Principles

### Simplicity First
Make every change **as simple as possible**.  
Impact **minimal code**.

### Root Cause Fixing
Find the **real cause of issues**.  
Avoid temporary fixes.  
Follow **senior developer standards**.

### Minimal Changes
Changes should **only touch what is necessary**.  
Avoid introducing new bugs.
