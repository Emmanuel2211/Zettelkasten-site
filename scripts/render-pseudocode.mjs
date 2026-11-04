// Render ```pseudo blocks (pseudocode-in-obs syntax) to static HTML.
// Input  (stdin):  JSON array of pseudocode sources
// Output (stdout): JSON array of { html } or { error }
// Options mirror the Obsidian "Pseudocode" plugin defaults.
import pseudocode from "pseudocode"

const OPTIONS = {
  indentSize: "1.2em",
  commentDelimiter: "//",
  lineNumber: false,
  lineNumberPunc: ":",
  noEnd: false,
  scopeLines: false,
}

let input = ""
for await (const chunk of process.stdin) input += chunk
const sources = JSON.parse(input)

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
