---
name: pi-docs-finder
description: Provides relative paths and content summaries for pi's core documentation on skills and extensions. Use this to find instructions for implementing new pi capabilities.
---

# Pi Documentation Finder

This skill helps you locate and understand the documentation for extending the pi coding agent. It uses relative paths to ensure portability across different installations.

## Core Documentation References

- **[Skill Creation Guide](references/skills.md)**: How to package and load self-contained capabilities.
- **[Extension Development](references/extensions.md)**: How to write TypeScript modules for custom tools, events, and UI.
- **[TUI & UI Components](references/tui.md)**: Building custom terminal interfaces and user prompts.
- **[SDK & API Reference](references/sdk.md)**: Detailed `ExtensionAPI` and `ExtensionContext` documentation.

## Quick Start

1. **Skills**: Create a directory in `~/.pi/agent/skills/` with a `SKILL.md` file.
2. **Extensions**: Create a `.ts` file in `~/.pi/agent/extensions/`.
3. **Reload**: Use `/reload` in pi to pick up changes in auto-discovery locations.

## Base Path Discovery
Pi documentation is usually located relative to the installation directory. You can find the base path by running:
```bash
npm list -g @mariozechner/pi-coding-agent
```
The documentation is inside the `docs/` and `examples/` subdirectories of that package.
