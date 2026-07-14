"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const emojis = ["🔥", "💀", "🫡", "🤝", "⚡", "✨"]
const MAX_MESSAGE_LENGTH = 180

export function GuestbookForm() {
  const [selectedEmoji, setSelectedEmoji] = useState("🔥")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const displayName = name.trim() || "Anonymous visitor"
  const remainingCharacters = MAX_MESSAGE_LENGTH - message.length

  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="flex h-full w-full flex-col justify-center rounded-[2rem] border border-[#f7f3e8]/15 bg-[#062b20]/75 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-8"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5e8b4]">
          Leave a note
        </p>

        <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-[#f7f3e8]">
          Sign the internet wall.
        </h3>

        <p className="mt-4 text-sm leading-6 text-[#b9c8ba]">
          Leave a quick note, reaction, or recommendation. Use your name or stay
          anonymous.
        </p>
      </div>

      <input type="hidden" name="emoji" value={selectedEmoji} />
      <input type="hidden" name="displayName" value={displayName} />
      <input
        type="hidden"
        name="_subject"
        value="New portfolio guestbook note"
      />

      <div className="mt-4 space-y-3">
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value.slice(0, 40))}
          placeholder="Your name or be creative"
          maxLength={40}
          className="w-full rounded-2xl border border-[#f7f3e8]/15 bg-[#0a3a2b] px-4 py-3 text-sm text-[#f7f3e8] outline-none placeholder:text-[#8aa78f] focus:border-[#d5e8b4]"
        />

        <div>
          <textarea
            name="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value.slice(0, MAX_MESSAGE_LENGTH))
            }}
            placeholder="Say something chaotic, kind, or suspiciously wise..."
            rows={5}
            required
            maxLength={MAX_MESSAGE_LENGTH}
            className="w-full resize-none rounded-2xl border border-[#f7f3e8]/15 bg-[#0a3a2b] px-4 py-3 text-sm text-[#f7f3e8] outline-none placeholder:text-[#8aa78f] focus:border-[#d5e8b4]"
          />

          <div className="mt-2 flex items-center justify-between text-xs text-[#8aa78f]">
            <span>Short notes look better on the wall.</span>
            <span>{remainingCharacters} left</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa78f]">
            Pick a reaction
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedEmoji(emoji)}
                className={`grid h-11 w-11 place-items-center rounded-full text-xl transition ${
                  selectedEmoji === emoji
                    ? "bg-[#d5e8b4] text-[#0b2f23]"
                    : "bg-[#0a3a2b] hover:bg-[#174b38]"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d5e8b4] px-5 py-3 text-sm font-semibold text-[#0b2f23] transition hover:-translate-y-0.5 hover:bg-[#f7f3e8]"
        >
          Drop note
          <Send size={16} />
        </button>
      </div>
    </form>
  )
}
