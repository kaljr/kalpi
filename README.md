# Kalpi
- My personal ai digital identity for the pi coding agent

## Package
- This repo contains the elements that define a custom package. This includes extensions, skills, prompts, and themes.
- For more info: (Pi Docs)[https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent]

## Other Customizations

### Custom System Prompt and Identity Contexts
- Stored in the identity folder in markdown format
- Need to be symlinked from `~/.pi/agent/` to be loaded (globally)

### Custom models
- In `models.json` in the `models` folder
- Holds any models that have not yet been released in the pi repo (they are all hard coded there)
- Needs to be symlinked from `~/.pi/agent/` to be loaded
