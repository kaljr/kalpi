# SDK & API Reference

The pi SDK allows you to embed pi's capabilities into other applications or build custom interfaces.

## Summary of Important Points
- **Core Function**: `createAgentSession()` is the main factory for starting an agent.
- **Session Types**:
  - `SessionManager.inMemory()`: No persistence, good for testing.
  - `SessionManager.create(cwd)`: Persistent session in the given directory.
  - `SessionManager.open(path)`: Opens a specific `.jsonl` session file.
- **Event Streaming**: Use `session.subscribe((event) => { ... })` to listen for `message_update` (text deltas), `tool_execution`, and lifecycle events.
- **Resource Loading**: `DefaultResourceLoader` manages extensions, skills, and prompts.

## Implementation Details
- **Tool Factories**: If using a custom `cwd`, use `createReadTool(cwd)` instead of the default `readTool` to ensure paths resolve correctly.
- **Streaming Interaction**:
  - `session.steer(text)`: Interrupts the agent to provide new instructions.
  - `session.followUp(text)`: Queues a message to be sent after the current turn finishes.
- **Auth**: `AuthStorage` handles API keys from `auth.json`, environment variables, and OAuth tokens.

## Running Modes
- **InteractiveMode**: Full TUI with editor and history.
- **runPrintMode**: Single-shot execution for CLI-like behavior.
- **runRpcMode**: JSON-RPC interface for subprocess integration.
