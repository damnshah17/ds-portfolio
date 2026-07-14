// "use client"

// import { motion } from "motion/react"

// import type { InterestCategory, InterestGroup } from "@/components/data/sideQuests"

// type InterestTabsProps = {
//   groups: InterestGroup[]
//   activeId: InterestCategory
//   onChange: (id: InterestCategory) => void
// }

// export function InterestTabs({ groups, activeId, onChange }: InterestTabsProps) {
//   return (
//     <div className="flex gap-2 overflow-x-auto rounded-full border border-[#0b2f23]/10 bg-[#f7f3e8]/70 p-2">
//       {groups.map((group) => {
//         const isActive = activeId === group.id

//         return (
//           <button
//             key={group.id}
//             type="button"
//             onClick={() => onChange(group.id)}
//             className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
//               isActive ? "text-[#f7f3e8]" : "text-[#315d47] hover:text-[#0b2f23]"
//             }`}
//           >
//             {isActive ? (
//               <motion.span
//                 layoutId="interest-tab-bg"
//                 className="absolute inset-0 rounded-full bg-[#0b2f23]"
//                 transition={{ type: "spring", stiffness: 300, damping: 28 }}
//               />
//             ) : null}

//             <span className="relative z-10">{group.label}</span>
//           </button>
//         )
//       })}
//     </div>
//   )
// }