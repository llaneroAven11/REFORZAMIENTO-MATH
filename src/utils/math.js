import katex from 'katex'

const mathRegex = /\$\$(.+?)\$\$|\$(.+?)\$/gs

export function renderMath(text) {
  if (!text) return ''

  const parts = []
  let last = 0
  let match

  while ((match = mathRegex.exec(text)) !== null) {
    parts.push(text.slice(last, match.index))

    const tex = (match[1] || match[2]).trim()
    let display = !!match[1]
    if (!display && /\\begin\{/.test(tex)) display = true

    try {
      parts.push(katex.renderToString(tex, { displayMode: display, throwOnError: false }))
    } catch {
      parts.push(match[0])
    }

    last = match.index + match[0].length
  }

  parts.push(text.slice(last))

  return parts.join('').replace(/\n/g, '<br>')
}
