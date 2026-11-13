import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Architectural Design',
    description: 'Creative and functional designs tailored to residential and commercial needs, from concept to detailed plans.',
  },
  {
    title: 'Interior Planning',
    description: 'Thoughtful interior layouts and finishes that balance aesthetics, comfort, and everyday usability.',
  },
  {
    title: 'Project Visualization',
    description: 'Clear design presentations and visual concepts that help you see your project before construction begins.',
  },
]

const featuredProjects = [
  { src: '/photo/front1.jpeg', title: 'Modern Exterior Concept', category: 'Residential' },
  { src: '/photo/inside1.jpeg', title: 'Interior Living Space', category: 'Interior' },
  { src: '/photo/autocarddesign1.jpeg', title: 'Design Visualization', category: 'Concept' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/photo/hero.jpeg"
            alt="Architectural project showcase"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-900/60 to-brand-900/20" />
        </div>

        <div className="container-page relative flex min-h-[78vh] items-center py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
              Atrovia Architecture
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Designing spaces that inspire, function, and endure.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              We craft thoughtful architectural and interior solutions for homes, businesses, and developments—bringing your vision to life with clarity and care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary bg-accent text-white hover:bg-[#9a7948]">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Who We Are</p>
            <h2 className="section-title mt-3">Architecture shaped by purpose and detail</h2>
            <p className="mt-5 leading-relaxed text-brand-700">
              Atrovia Architecture delivers design solutions that combine creativity, practicality, and lasting value. From exterior concepts to interior environments, we approach every project with attention to detail and a commitment to quality.
            </p>
            <p className="mt-4 leading-relaxed text-brand-700">
              Whether you are planning a new build, renovation, or design concept, we work closely with you to transform ideas into spaces that feel right and work beautifully.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="text-sm font-semibold text-accent hover:underline">
                Start a conversation &rarr;
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/photo/front2.jpeg" alt="Exterior design" className="h-56 w-full rounded-xl object-cover shadow-soft sm:h-72" />
            <img src="/photo/inside2.jpeg" alt="Interior design" className="mt-8 h-56 w-full rounded-xl object-cover shadow-soft sm:h-72" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Services</p>
            <h2 className="section-title mt-3">What we do</h2>
            <p className="mt-4 text-brand-700">
              Comprehensive architectural services designed to guide your project from idea to reality.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-brand-200 bg-brand-50 p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
              <h2 className="section-title mt-3">Featured projects</h2>
            </div>
            <Link to="/projects" className="btn-secondary">View All Projects</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.src} className="group overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-brand-200/60">
                <div className="overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{project.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-900">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 py-16">
        <div className="container-page text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-200">
            Let’s discuss your ideas and create a design solution that fits your needs and budget.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary bg-accent hover:bg-[#9a7948]">
              Contact Atrovia
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
