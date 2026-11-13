import { useState } from 'react'

const contactDetails = [
  {
    label: 'Email',
    value: 'atrovia2@gmail.com',
    href: 'mailto:atrovia2@gmail.com',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    ),
  },
  {
    label: 'Phone',
    value: '08144508060',
    href: 'tel:08144508060',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    ),
  },
]

const addresses = [
  {
    label: 'Office Address',
    value: 'No 6 Alhaji Mustapha Street, Temidire Estate Rd, off Ring Road, Osogbo, Osun State',
  },
  {
    label: 'Home Address',
    value: 'Abidogun Street, Offa, Kwara State',
  },
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'idle', message: '' })

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'Form is not configured yet. Please add your Web3Forms access key (VITE_WEB3FORMS_ACCESS_KEY) and try again.',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Message - Atrovia Architecture',
          message: formData.message,
          from_name: formData.name,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' })
        setFormData(initialForm)
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again or email us directly.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Get in Touch</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-brand-200">
            We’d love to hear about your project. Reach out by phone, email, or visit us using the details below.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="section-title">Contact Information</h2>
            <p className="mt-4 text-brand-700">
              For inquiries, consultations, or project discussions, contact Atrovia Architecture through any of the channels below.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-brand-200 bg-white p-5 shadow-sm transition hover:border-accent/40 hover:shadow-soft"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-500">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-brand-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {addresses.map((addr) => (
                <div key={addr.label} className="rounded-xl border border-brand-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-500">{addr.label}</p>
                      <p className="mt-1 leading-relaxed text-brand-900">{addr.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-900">Send a Message</h2>
              <p className="mt-2 text-sm text-brand-600">
                Fill out the form and we’ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {status.message && (
                  <div
                    className={`rounded-md border px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'border-green-200 bg-green-50 text-green-800'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                    role="status"
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-800">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-md border border-brand-300 bg-brand-50 px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-800">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-md border border-brand-300 bg-brand-50 px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-800">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-brand-300 bg-brand-50 px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-brand-800">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full rounded-md border border-brand-300 bg-brand-50 px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-800">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-md border border-brand-300 bg-brand-50 px-4 py-2.5 text-sm text-brand-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <button type="submit" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-center text-xs text-brand-500">
                  Or email us directly at <a href="mailto:atrovia2@gmail.com" className="font-medium text-accent hover:underline">atrovia2@gmail.com</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
