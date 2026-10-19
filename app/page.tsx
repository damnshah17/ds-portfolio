import { DynamicIslandNav } from "@/components/navigation/DynamicIslandNav"
import { Hero } from "@/components/home/Hero"
import { JourneyTimeline } from "@/components/journey/JourneyTimeline"
import { WorkSection } from "@/components/work/WorkSection"
import { SideQuestsSection } from "@/components/side-quests/SideQuestsSection"
import { GuestbookSection } from "@/components/guestbook/GuestbookSection"
import { ContactSection } from "@/components/contact/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#062b20] text-[#f7f3e8]">
      <DynamicIslandNav />
      <Hero />
      <JourneyTimeline />
      <WorkSection />
      <SideQuestsSection />
      <GuestbookSection />
      <ContactSection />
    </main>
  )
}
