"use client"

import type { ComponentPropsWithoutRef } from "react"

type SectionLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & {
  href: `#${string}`
  onNavigate?: () => void
  focusTargetId?: string
}

/** Keep native deep links while making ordinary in-page navigation scroll-only. */
export function SectionLink({ href, onNavigate, focusTargetId, ...props }: SectionLinkProps) {
  return <a {...props} href={href} onClick={(event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      (event.currentTarget.target && event.currentTarget.target !== "_self")) return

    const section = document.getElementById(href.slice(1))
    if (!section) return

    event.preventDefault()
    onNavigate?.()
    if (window.location.hash) {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search)
    }

    // Let a closing dialog restore focus and unlock scrolling first.
    window.requestAnimationFrame(() => {
      const target = (focusTargetId && document.getElementById(focusTargetId)) || section
      const previousTabIndex = target.getAttribute("tabindex")
      if (previousTabIndex === null) {
        target.setAttribute("tabindex", "-1")
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true })
      }
      target.focus({ preventScroll: true })
      section.scrollIntoView({ block: "start" })
    })
  }} />
}
