# Extension Development

Extensions are TypeScript modules that extend pi's behavior via the `ExtensionAPI`.

## Summary of Important Points
- **Entry Point**: A `.ts` file that exports a default function receiving `ExtensionAPI`.
- **Capability Areas**:
  - **Custom Tools**: Register tools callable by the LLM via `pi.registerTool()`.
  - **Custom Commands**: Register slash commands like `/my-cmd` via `pi.registerCommand()`.
  - **Event Listeners**: Intercept tool calls, user input, or session events via `pi.on()`.
  - **Custom UI**: Full TUI components with keyboard input via `ctx.ui.custom()`.
  - **Session Persistence**: Store extension state using `pi.appendEntry()`.

## Implementation Details
- **Locations**: `~/.pi/agent/extensions/*.ts` (global) or `.pi/extensions/*.ts` (project-local).
- **Hot Reloading**: Extensions in auto-discovery locations can be reloaded via `/reload`.
- **Imports**: Types are available in `@mariozechner/pi-coding-agent`.
- **Typing**: Use `@sinclair/typebox` for tool parameter schemas.

### Quick Start Example
```typescript
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { Type } from "@sinclair/typebox";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "greet",
    label: "Greet",
    description: "Greet someone by name",
    parameters: Type.Object({
      name: Type.String({ description: "Name to greet" }),
    }),
    async execute(toolCallId, params, signal, onUpdate, ctx) {
      return {
        content: [{ type: "text", text: `Hello, ${params.name}!` }],
        details: {},
      };
    },
  });
}
```
