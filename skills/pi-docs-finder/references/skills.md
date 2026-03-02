# Skills Documentation

Skills are self-contained capability packages that the agent loads on-demand.

## Summary of Important Points
- **Structure**: A skill is a directory containing a `SKILL.md` file. It can include scripts, assets, and other markdown files.
- **Frontmatter**: `SKILL.md` must start with YAML frontmatter containing `name` and `description`.
- **Loading**: Descriptions are always in context; the full file loads only when a task matches or via `/skill:name`.
- **Discovery**: Loaded from `~/.pi/agent/skills/` (global) or `.pi/skills/` (project).
- **Relativity**: All paths inside `SKILL.md` are relative to the skill directory.

## Implementation Details
- **Naming Rules**: 1-64 chars, lowercase a-z, 0-9, hyphens. Must match parent directory.
- **Description**: Determines when the agent loads the skill; be specific.
- **Command Arguments**: `/skill:name <args>` appends "User: <args>" to the skill content.

### Example SKILL.md
```markdown
---
name: my-skill
description: Performs specific task X. Use when user asks for X.
---
# My Skill
## Usage
Execute script: `./scripts/do-task.sh`
```
