---
name: table
description: Tables the current discussion for later resumption. Use when Kenny says "table this", "table it", "/table", or asks to save/pause the current topic for later.
---

# Table Skill

Tables the current discussion by creating a markdown summary file in the `tabled/` directory.

## When to Use
- Kenny says "table this" or "let's table this"
- Kenny uses `/table` or `/table [topic-name]`
- Kenny wants to pause a discussion for later

## Procedure

1. **Determine topic name:**
   - If Kenny provides one, use it (slugify: lowercase, hyphens instead of spaces)
   - Otherwise, generate a descriptive name from the discussion content

2. **Generate filename:** `YYYY-MM-DD_topic-name.md`

3. **Create the file** at `tabled/YYYY-MM-DD_topic-name.md` with this structure:

```markdown
# [Topic Title]

**Date:** YYYY-MM-DD  
**Status:** Tabled (Paused for Later Discussion)

---

## Objective

[What we were trying to accomplish]

---

## Key Points

- [Main points from the discussion]

---

## Proposed Plan / Architecture

[If applicable, what was proposed]

---

## Next Steps (When Resumed)

- [ ] [Action items]

---

## Notes

- [Any other relevant context]
```

4. **Confirm to Kenny** where the file was saved and what it contains.

## Notes
- The `tabled/` directory is at the project root: `tabled/`
- Create the directory if it doesn't exist
- Keep summaries concise but complete enough to resume without re-reading chat history
