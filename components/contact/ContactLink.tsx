import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

type ContactLinkProps = {
  href: string
  label: string
  description: string
  icon: ReactNode
  external?: boolean
}

export function ContactLink({
  href,
  label,
  description,
  icon,
  external = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group block rounded-[1.75rem] border border-[#d5e8b4]/15 bg-[#0a3a2b] p-5 transition hover:-translate-y-1 hover:border-[#d5e8b4]/60 hover:bg-[#0f4634]"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d5e8b4] text-[#0b2f23] transition group-hover:bg-[#f7f3e8]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="text-lg font-semibold text-[#f7f3e8]">{label}</p>

            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-[#d5e8b4] opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </div>

          <p className="mt-1 text-sm leading-6 text-[#b9c8ba]">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}