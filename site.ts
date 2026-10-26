import fs from 'node:fs'
import { marked } from 'marked'

// Renders Comparison.md as a standalone HTML page in site/ for GitHub Pages
const outDir = 'site'

const body = marked.parse(fs.readFileSync('Comparison.md', 'utf8'), { async: false })

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ESLint Config Comparison</title>
<style>
  :root { color-scheme: light dark; --bg: #fff; --fg: #1f2328; --border: #d1d9e0; --head: #f6f8fa; --hover: #eef4ff; }
  @media (prefers-color-scheme: dark) {
    :root { --bg: #0d1117; --fg: #e6edf3; --border: #3d444d; --head: #151b23; --hover: #1c2a40; }
  }
  body { margin: 0 auto; padding: 1rem 2rem; max-width: 1200px; background: var(--bg); color: var(--fg);
    font: 14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif; }
  a { color: #4493f8; text-decoration: none; }
  a:hover { text-decoration: underline; }
  #filter { width: 100%; max-width: 400px; padding: .4rem .6rem; margin-bottom: .75rem; font: inherit;
    color: inherit; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; }
  .table-wrap { max-height: 80vh; overflow: auto; border: 1px solid var(--border); border-radius: 6px; }
  table { border-collapse: separate; border-spacing: 0; width: 100%; }
  th, td { padding: 4px 10px; border-bottom: 1px solid var(--border); border-right: 1px solid var(--border); background: var(--bg); white-space: nowrap; }
  th { position: sticky; top: 0; z-index: 2; background: var(--head); }
  th:first-child, td:first-child { position: sticky; left: 0; z-index: 1; text-align: left; }
  th:first-child { z-index: 3; }
  tbody tr:hover td { background: var(--hover); }
</style>
</head>
<body>
${body}
<script>
  // Wrap the table for sticky headers, and add a filter box above it
  const table = document.querySelector('table')
  const wrap = document.createElement('div')
  wrap.className = 'table-wrap'
  table.before(wrap)
  wrap.append(table)

  const filter = document.createElement('input')
  filter.id = 'filter'
  filter.type = 'search'
  filter.placeholder = 'Filter rules…'
  wrap.before(filter)

  // Count rows (bold labels) always stay visible
  const rows = [...table.tBodies[0].rows].filter(row => !row.cells[0].querySelector('strong'))
  filter.addEventListener('input', () => {
    const query = filter.value.trim().toLowerCase()
    for (const row of rows) {
      row.hidden = !row.cells[0].textContent.toLowerCase().includes(query)
    }
  })
</script>
</body>
</html>
`

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(`${outDir}/index.html`, html)
console.log(`Wrote ${outDir}/index.html`)
