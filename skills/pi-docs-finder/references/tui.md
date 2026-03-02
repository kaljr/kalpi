# TUI & UI Components

The pi coding agent uses a custom Terminal User Interface (TUI) system for interactive components.

## Summary of Important Points
- **Component Interface**: Components must implement `render(width)`, `handleInput(data)`, and `invalidate()`.
- **Constraint**: Each line from `render()` **must not exceed `width`**. Use `truncateToWidth` or `wrapTextWithAnsi`.
- **Usage**:
  - Extensions: `ctx.ui.custom(component)`
  - Custom Tools: `pi.ui.custom(component)`
- **Overlays**: Use `{ overlay: true }` in `ctx.ui.custom()` to render on top of content without clearing the screen.

## Common UI Patterns (Copy-Paste)
- **Selection List**: Use `SelectList` for picking options.
- **Loading Spinner**: Use `BorderedLoader` for async operations with cancellation.
- **Settings/Toggles**: Use `SettingsList` for configuration menus.
- **Status Bars**: Use `ctx.ui.setStatus(id, text)` for persistent footer indicators.
- **Widgets**: Use `ctx.ui.setWidget(id, lines)` for content above/below the editor.

## Key Implementation Detail: Invalidation
When the theme changes, `invalidate()` is called. If you pre-calculate themed strings, you **must** rebuild them inside `invalidate()`:
```typescript
override invalidate(): void {
  super.invalidate();
  this.content.setText(theme.fg("accent", this.message));
}
```

## Input Handling
Use `matchesKey(data, Key.up)` etc., from `@mariozechner/pi-tui` for reliable keyboard detection.
