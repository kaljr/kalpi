import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import * as fs from "node:fs";
import * as path from "node:path";

// We create a variable outside the command to cache the prompt as it flies by
let latestSystemPrompt = "⚠️ No prompt intercepted yet. Please send at least one message in this session to generate the prompt!";

export default function (pi: ExtensionAPI) {
    // 1. The Interceptor: This fires every time you hit Enter, right before the LLM is called.
    pi.on("before_agent_start", async (event) => {
        // We copy the freshly built string into our local cache
        if (event.systemPrompt) {
            latestSystemPrompt = event.systemPrompt;
        }
    });

    // 2. The Command: This just dumps whatever we caught last
    pi.registerCommand("dump-prompt", {
        description: "Saves the exact system prompt from your last interaction to a text file.",
        
        handler: async (args, ctx) => {
            const fileName = args.trim() || "system_prompt.txt";
            const outputPath = path.resolve(process.cwd(), fileName);

            try {
                fs.writeFileSync(outputPath, latestSystemPrompt, "utf-8");
                ctx.ui.notify(`✅ Raw system prompt dumped to: ${outputPath}`, "info");
            } catch (err: any) {
                ctx.ui.notify(`❌ Failed to write file: ${err.message}`, "error");
            }
        }
    });
}
