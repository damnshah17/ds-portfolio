"use client"

import { useEffect, useRef } from "react"

type Props = {
  onVisible: () => void
}

export function ListeningRoomScene({ onVisible }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onVisible(),
      { threshold: 0.45 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section
      ref={ref}
      id="rtsr"
      className="bg-[#f4efe7] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#b36c3f]">
          Stop 02 / The listening room
        </p>

        <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.04em] text-[#1d2d24] sm:text-5xl">
          A system that can hear the words and recognize the voice.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#1d2d24]/10 bg-[#1d2d24] p-7 text-[#f4efe7]">
            <p className="text-sm text-[#b8d4c0]">RTSR / Real-Time Transcription + Speaker Recognition</p>

            <div className="mt-10 flex h-32 items-center gap-1">
              {Array.from({ length: 30 }).map((_, index) => (
                <span
                  key={index}
                  style={{ height: `${25 + ((index * 37) % 68)}%` }}
                  className="w-full rounded-full bg-[#b8d4c0]"
                />
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-[#d7ddd0]">
              Faster-Whisper transcribes speech while a custom ResNet CNN
              predicts the active speaker from MFCC features.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-5xl font-semibold tracking-tight text-[#264b3c]">91.7%</p>
            <p className="mt-2 text-sm text-[#6f6a60]">speaker identification accuracy</p>

            <p className="mt-7 text-5xl font-semibold tracking-tight text-[#264b3c]">0.945</p>
            <p className="mt-2 text-sm text-[#6f6a60]">F1 score across seven speakers</p>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#5c5a54]">
              This project became my main-author publication and won first
              place at Aaveshkar 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}