import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-brand-200 bg-brand-900 text-brand-100">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/photo/logo.jpeg" alt="Atrovia logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-serif text-xl font-semibold text-white">Atrovia</p>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-300">Architecture</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-300">
              Thoughtful architectural design, from concept to completion. We create functional, elegant spaces tailored to your vision.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-brand-300 transition hover:text-accent">Home</Link></li>
              <li><Link to="/projects" className="text-brand-300 transition hover:text-accent">Projects</Link></li>
              <li><Link to="/contact" className="text-brand-300 transition hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-300">
              <li>
                <span className="text-brand-400">Email: </span>
                <a href="mailto:atrovia2@gmail.com" className="hover:text-accent">atrovia2@gmail.com</a>
              </li>
              <li>
                <span className="text-brand-400">Phone: </span>
                <a href="tel:08144508060" className="hover:text-accent">08144508060</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Addresses</h3>
            <div className="mt-4 space-y-3 text-sm text-brand-300">
              <p>
                <span className="block font-medium text-brand-200">Office</span>
                No 6 Alhaji Mustapha Street, Temidire Estate Rd, off Ring Road, Osogbo, Osun State
              </p>
              <p>
                <span className="block font-medium text-brand-200">Home</span>
                Abidogun Street, Offa, Kwara State
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 text-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Atrovia Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
