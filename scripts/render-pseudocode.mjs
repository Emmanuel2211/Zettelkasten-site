// Render ```pseudo blocks (pseudocode-in-obs syntax) to static HTML.
// Input  (stdin):  JSON { options: {...}, sources: [string, ...] }
//                  `options` = jsSettings from the Obsidian "Pseudocode" plugin
//                  (.obsidian/plugins/pseudocode-in-obs/data.json), passed in
//                  by sync-vault.py so the site matches Obsidian.
// Output (stdout): JSON array of { html } or { error }
import pseudocode from "pseudocode"

// Plugin defaults, overridden by the user's Obsidian settings.
const DEFAULTS = {
  indentSize: "1.2em",
  commentDelimiter: "//",
  lineNumber: false,
  lineNumberPunc: ":",
  noEnd: false,
  scopeLines: false,
}

let input = ""
for await (const chunk of process.stdin) input += chunk
const { options = {}, sources = [] } = JSON.parse(input)
const OPTIONS = { ...DEFAULTS, ...options }

const results = sources.map((src) => {
  try {
    // Collapse to one line: the HTML is inserted into Markdown (maybe inside a
    // callout) and a blank line would end the HTML block early.
    const html = pseudocode.renderToString(src, OPTIONS).replace(/\n+/g, "")
    return { html }
  } catch (err) {
    return { error: String(err?.message ?? err) }
  }
})
process.stdout.write(JSON.stringify(results))
