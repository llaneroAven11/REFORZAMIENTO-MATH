import katex from 'katex'

const mathRegex = /\$\$(.+?)\$\$|\$(.+?)\$/gs

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderMath(text) {
  if (!text) return ''

  const parts = []
  let last = 0
  let match

  while ((match = mathRegex.exec(text)) !== null) {
    parts.push(escapeHtml(text.slice(last, match.index)))

    const tex = (match[1] || match[2]).trim()
    const display = !!match[1]

    try {
      parts.push(katex.renderToString(tex, { displayMode: display, throwOnError: false }))
    } catch {
      parts.push(escapeHtml(match[0]))
    }

    last = match.index + match[0].length
  }

  parts.push(escapeHtml(text.slice(last)))

  return parts.join('').replace(/\n/g, '<br>')
}
