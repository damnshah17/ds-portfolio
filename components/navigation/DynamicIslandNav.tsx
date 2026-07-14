"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Side Quests", href: "#side-quests", id: "side-quests" },
  { label: "Guestbook", href: "#guestbook", id: "guestbook" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function DynamicIslandNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const isHome = activeSection === "home"
  const shouldShowFullNav = isHome || isOpen

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)

          if (visibleEntry.target.id === "home") {
            setIsOpen(false)
          }
        }
      },
      {
        root: null,
        threshold: 0.35,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  function handleNavigate() {
    if (!isHome) {
      setIsOpen(false)
    }
  }

  const activeLabel =
    links.find((link) => link.id === activeSection)?.label ?? "Home"

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <motion.nav
        layout
        onMouseEnter={() => {
          if (!isHome) setIsOpen(true)
        }}
        onMouseLeave={() => {
          if (!isHome) setIsOpen(false)
        }}
        className="pointer-events-auto flex items-center overflow-hidden rounded-full border border-[#f7f3e8]/20 bg-[#0b3528]/90 px-2 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.22)] backdrop-blur-xl"
      >
        {!isHome ? (
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-[#d5e8b4] px-4 text-sm font-bold text-[#0b2f23] transition hover:bg-[#f7f3e8]"
          >
            {isOpen ? <X size={18} /> : "DS"}
          </button>
        ) : null}

        <AnimatePresence initial={false}>
          {shouldShowFullNav ? (
            <motion.div
              initial={{ width: isHome ? "auto" : 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-1 px-2 md:gap-2">
                {links.map((link) => {
                  const isActive = activeSection === link.id

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavigate}
                      className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition md:px-4 md:text-sm ${
                        isActive
                          ? "text-[#0b2f23]"
                          : "text-[#e7eadf] hover:bg-white/10 hover:text-[#d5e8b4]"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-[#f7f3e8]"
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 30,
                          }}
                        />
                      ) : null}

                      <span className="relative z-10">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d5e8b4]" />
                <span className="whitespace-nowrap text-xs font-medium text-[#e7eadf]">
                  {activeLabel}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}