import type { ValidationIssue } from "../data/validate"

export const createDataErrorPanel = (issues: ValidationIssue[]): HTMLDivElement => {
  const root = document.createElement("div")
  root.setAttribute("role", "alert")
  root.style.border = "1px solid rgba(255,255,255,0.18)"
  root.style.background = "rgba(10,14,28,0.75)"
  root.style.backdropFilter = "blur(10px)"
  root.style.color = "rgba(255,255,255,0.92)"
  root.style.padding = "16px"
  root.style.borderRadius = "14px"
  root.style.maxWidth = "900px"
  root.style.margin = "16px auto"
  root.style.fontFamily =
    'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"'

  const title = document.createElement("div")
  title.textContent = "Content failed to load"
  title.style.fontSize = "16px"
  title.style.fontWeight = "700"
  root.appendChild(title)

  const subtitle = document.createElement("div")
  subtitle.textContent = "Some JSON data is missing or malformed. The site can still render, but content sections may be unavailable."
  subtitle.style.marginTop = "6px"
  subtitle.style.opacity = "0.9"
  root.appendChild(subtitle)

  const list = document.createElement("ul")
  list.style.marginTop = "12px"
  list.style.paddingLeft = "18px"
  list.style.lineHeight = "1.4"
  root.appendChild(list)

  const safeIssues = issues.length > 0 ? issues : [{ path: "content", message: "Unknown validation error" }]
  for (const issue of safeIssues) {
    const li = document.createElement("li")
    li.textContent = `${issue.path}: ${issue.message}`
    list.appendChild(li)
  }

  return root
}

export const mountDataErrorPanel = (container: HTMLElement, issues: ValidationIssue[]): void => {
  container.appendChild(createDataErrorPanel(issues))
}
