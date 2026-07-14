export function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.55fr_1fr]">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b7ff5d]">
          About
        </p>

        <div>
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl">
            I care about the part after the idea: making it useful, clear, and
            strong enough to survive reality.
          </h2>

          <div className="mt-10 grid max-w-3xl gap-8 text-lg leading-8 text-[#b8b4ab] md:grid-cols-2">
            <p>
              My work has moved between machine learning, product engineering,
              technical support, and accessibility-focused experiments.
            </p>

            <p>
              I like understanding how things work, but I care even more about
              what changes when someone actually uses them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}