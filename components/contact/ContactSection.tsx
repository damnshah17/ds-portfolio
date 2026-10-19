"use client"

import { profile } from "@/components/data/profile"

import { Download, Mail } from "lucide-react"
import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { ContactLink } from "@/components/contact/ContactLink"

const contactLinks = {
  email: {
    href: `mailto:${profile.email}`,
    label: "Email",
    description: profile.email,
    icon: <Mail size={20} />,
  },
  resume: {
    href: profile.resumeUrl,
    label: "Resume",
    description: "View the latest PDF, or download it below.",
    icon: <Download size={20} />,
    external: true,
  },
  github: {
    href: profile.github,
    label: "GitHub",
    description: "Projects, experiments, and code I am building in public.",
    icon: <FaGithub size={20} />,
    external: true,
  },
  linkedin: {
    href: profile.linkedin,
    label: "LinkedIn",
    description: "For roles, internships, referrals, and professional updates.",
    icon: <FaLinkedin size={20} />,
    external: true,
  },
}

const quickInfo = [
  {
    label: "Email",
    value: profile.email,
  },
  {
    label: "Based at",
    value: "Binghamton, NY",
  },
  {
    label: "Degree focus",
    value: "M.S. Computer Science · Artificial Intelligence Track",
  },
  {
    label: "Looking for",
    value: "Software / AI / Full-stack roles",
  },
]

function ContactPenguin() {
  return (
    <div className="group relative min-h-[330px] overflow-hidden rounded-[1.6rem] border border-[#d5e8b4]/15 bg-[#d5e8b4] p-5 text-[#0b2f23] shadow-[0_25px_70px_rgba(0,0,0,0.16)]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f7f3e8]/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#9ad7f5]/55 blur-3xl" />

      <div className="relative grid h-full min-h-[290px] place-items-center">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [-10, 8, -10] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-9 top-24 h-16 w-8 origin-top rounded-full bg-[#0b2f23]"
          />

          <motion.div
            animate={{ rotate: [10, -8, 10] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-9 top-24 h-16 w-8 origin-top rounded-full bg-[#0b2f23]"
          />

          <div className="relative h-52 w-40 rounded-[5rem] bg-[#0b2f23] shadow-[0_22px_55px_rgba(6,43,32,0.28)]">
            <div className="absolute left-1/2 top-5 h-28 w-28 -translate-x-1/2 rounded-full bg-[#0b2f23]" />

            <div className="absolute left-1/2 top-20 h-28 w-28 -translate-x-1/2 rounded-[4rem] bg-[#f7f3e8]" />

            <div className="absolute left-[3.15rem] top-[3.7rem] h-3.5 w-3.5 rounded-full bg-[#f7f3e8]" />
            <div className="absolute right-[3.15rem] top-[3.7rem] h-3.5 w-3.5 rounded-full bg-[#f7f3e8]" />

            <motion.div
              animate={{ scaleY: [1, 0.15, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
              className="absolute left-[3.35rem] top-[3.9rem] h-2 w-2 rounded-full bg-[#0b2f23]"
            />
            <motion.div
              animate={{ scaleY: [1, 0.15, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
              className="absolute right-[3.35rem] top-[3.9rem] h-2 w-2 rounded-full bg-[#0b2f23]"
            />

            <div className="absolute left-[2.55rem] top-[5.05rem] h-3 w-5 rounded-full bg-[#f0a6c8]/75 blur-[1px]" />
            <div className="absolute right-[2.55rem] top-[5.05rem] h-3 w-5 rounded-full bg-[#f0a6c8]/75 blur-[1px]" />

            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[4.95rem] h-0 w-0 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#e1aa66]"
            />

            <div className="absolute left-1/2 top-[6.35rem] h-1.5 w-8 -translate-x-1/2 rounded-full bg-[#0b2f23]/20" />

            <div className="absolute left-1/2 top-[7.15rem] h-6 w-28 -translate-x-1/2 rounded-full bg-[#9ad7f5]" />
            <div className="absolute right-1 top-[7.25rem] h-12 w-5 rotate-[-18deg] rounded-full bg-[#9ad7f5]" />

            <div className="absolute bottom-[-7px] left-8 h-5 w-10 rotate-[-5deg] rounded-full bg-[#e1aa66]" />
            <div className="absolute bottom-[-7px] right-8 h-5 w-10 rotate-[5deg] rounded-full bg-[#e1aa66]" />
          </div>

          <motion.div
            animate={{
              opacity: [0.45, 1, 0.45],
              y: [0, -6, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-7 top-2 rounded-full bg-[#0b2f23] px-3 py-1 text-xs font-bold text-[#d5e8b4]"
          >
            mail?
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#062b20] px-6 py-24 text-[#f7f3e8] lg:px-10"
    >
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#d5e8b4]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-[#9ad7f5]/10 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d5e8b4]">
              05 / Contact
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#c6d2c7]">
              For internships, software roles, AI projects, collaborations, or
              just a good technical conversation, this is the professional exit
              door.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d5e8b4]/15 bg-[#0a3a2b]/75 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d5e8b4]">
                  Quick info
                </p>

                <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em]">
                  {profile.name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#b9c8ba]">
                  MS Computer Science student at Binghamton University with an
                  Artificial Intelligence Track, building across full-stack software, AI
                  applications, and backend systems.
                </p>
              </div>

              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#d5e8b4] font-bold text-[#0b2f23]">
                DS
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#d5e8b4]/10 bg-[#062b20]/55 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa78f]">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#f7f3e8]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_0.95fr]">
          <div className="grid gap-5">
            <ContactLink
              href={contactLinks.email.href}
              label={contactLinks.email.label}
              description={contactLinks.email.description}
              icon={contactLinks.email.icon}
            />

            <ContactLink
              href={contactLinks.github.href}
              label={contactLinks.github.label}
              description={contactLinks.github.description}
              icon={contactLinks.github.icon}
              external={contactLinks.github.external}
            />
          </div>

          <div className="grid gap-5">
            <ContactLink
              href={contactLinks.resume.href}
              label={contactLinks.resume.label}
              description={contactLinks.resume.description}
              icon={contactLinks.resume.icon}
              external={contactLinks.resume.external}
            />

            <ContactLink
              href={contactLinks.linkedin.href}
              label={contactLinks.linkedin.label}
              description={contactLinks.linkedin.description}
              icon={contactLinks.linkedin.icon}
              external={contactLinks.linkedin.external}
            />
          </div>

          <ContactPenguin />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#d5e8b4]/15 pt-6 text-sm text-[#8aa78f] sm:flex-row sm:items-center sm:justify-between">
          <a href={profile.resumeUrl} download className="font-semibold text-[#d5e8b4] underline underline-offset-4">Download resume PDF</a>
          <p>
            Built with care, curiosity, and a suspicious number of “one last changes.”
          </p>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </section>
  )
}
