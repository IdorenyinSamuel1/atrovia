import { Link } from 'react-router-dom'

const projects = [
  { src: '/photo/hero.jpeg', title: 'Signature Architectural Vision', category: 'Featured' },
  { src: '/photo/front1.jpeg', title: 'Contemporary Residence - Exterior', category: 'Exterior' },
  { src: '/photo/front2.jpeg', title: 'Residential Facade Design', category: 'Exterior' },
  { src: '/photo/front3.jpeg', title: 'Modern Home Frontage', category: 'Exterior' },
  { src: '/photo/front4.jpeg', title: 'Elegant Exterior Concept', category: 'Exterior' },
  { src: '/photo/front5.jpeg', title: 'Residential Elevation Study', category: 'Exterior' },
  { src: '/photo/inside1.jpeg', title: 'Living Space Interior', category: 'Interior' },
  { src: '/photo/inside2.jpeg', title: 'Interior Layout & Finish', category: 'Interior' },
  { src: '/photo/inside3.jpeg', title: 'Refined Interior Design', category: 'Interior' },
  { src: '/photo/inside4.jpeg', title: 'Modern Interior Concept', category: 'Interior' },
  { src: '/photo/inside5.jpeg', title: 'Functional Interior Space', category: 'Interior' },
  { src: '/photo/furniture1.jpeg', title: 'Furniture & Space Planning', category: 'Interior' },
  { src: '/photo/autocarddesign1.jpeg', title: 'Architectural Visualization 1', category: 'Concept' },
  { src: '/photo/autocarddesign2.jpeg', title: 'Architectural Visualization 2', category: 'Concept' },
  { src: '/photo/autocarddesign3.jpeg', title: 'Architectural Visualization 3', category: 'Concept' },
  { src: '/photo/autocarddesign4.jpeg', title: 'Architectural Visualization 4', category: 'Concept' },
  { src: '/photo/uncompleted.jpeg', title: 'Project in Progress', category: 'In Progress' },
]

export default function Projects() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Our Projects</h1>
          <p className="mt-4 max-w-2xl text-brand-200">
            A selection of our architectural designs, interior concepts, and visualizations. Each project reflects our commitment to quality, detail, and purposeful design.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={`${project.src}-${index}`}
                className="group overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-brand-200/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-100">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {project.category}
                  </p>
                  <h2 className="mt-2 font-serif text-lg font-semibold text-brand-900">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="bg-white py-14">
        <div className="container-page text-center">
          <h2 className="section-title">Let’s build something remarkable</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-700">
            Interested in working with us? Reach out to discuss your project, request a consultation, or learn more about our services.
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
