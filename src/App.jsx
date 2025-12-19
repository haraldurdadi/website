const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-12">
    <h2 className="text-xl font-semibold tracking-tight text-slate-900">
      {title}
    </h2>
    <div className="mt-4 text-slate-700">{children}</div>
  </section>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#home" className="font-semibold tracking-tight text-slate-900">
            Haraldur Daði
          </a>

          <nav className="flex gap-4 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#about">About</a>
            <a className="hover:text-slate-900" href="#projects">Projects</a>
            <a className="hover:text-slate-900" href="#cv">CV</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <section id="home" className="py-14">
          <p className="text-sm font-medium text-slate-600">Personal website</p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
            I build things on the web.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-700">
            Computer Science student at the University of Iceland. 
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>React</Chip>
            <Chip>Tailwind</Chip>
            <Chip>JavaScript</Chip>
            <Chip>GitHub Pages</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              href="#cv"
            >
              Jump to CV
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <p>
            Add a short paragraph about you. Keep it simple and specific.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Project One", desc: "What it is + what you learned." },
              { name: "Project Two", desc: "What it is + the tech you used." },
            ].map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.desc}</p>

                <div className="mt-4 flex gap-3 text-sm">
                  <a className="text-slate-900 underline underline-offset-4" href="#">
                    Live
                  </a>
                  <a className="text-slate-900 underline underline-offset-4" href="#">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="cv" title="CV (starter)">
          <ul className="list-disc pl-5">
            <li><span className="font-medium">Education:</span> …</li>
            <li><span className="font-medium">Skills:</span> …</li>
            <li><span className="font-medium">Experience:</span> …</li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Email:{" "}
            <a className="underline underline-offset-4" href="mailto:you@example.com">
              you@example.com
            </a>
          </p>
          <p className="mt-2">
            Add GitHub / LinkedIn links here.
          </p>
        </Section>

        <footer className="py-10 text-sm text-slate-500">
          Built with React + Tailwind. © {new Date().getFullYear()} Your Name
        </footer>
      </main>
    </div>
  );
}