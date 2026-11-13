# Atrovia Architecture Website

A standard front-end website for an architect, built with **React**, **JavaScript**, **Vite**, and **Tailwind CSS**. Includes routing to multiple pages and uses project images from the `photo` folder.

## Tech Stack

- React 18
- JavaScript (no TypeScript)
- Vite
- Tailwind CSS
- React Router DOM

## Pages / Routes

- `/` — Home (hero, services, featured projects, CTA)
- `/projects` — Projects gallery
- `/contact` — Contact information and message form

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure contact form (Web3Forms)**
   - Create a free access key at [https://web3forms.com](https://web3forms.com) (use `atrovia2@gmail.com` to receive submissions).
   - Copy `.env.example` to `.env` and add your key:
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```
   - Restart the dev server after changing `.env`.

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open the local URL shown in the terminal (usually `http://localhost:5173`).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Contact Form Submissions

The **Send a Message** form on the Contact page submits to [Web3Forms](https://web3forms.com). When someone fills the form (name, phone, email, subject, message), Web3Forms forwards the submission to the email address configured with your access key and stores it in your Web3Forms dashboard. Make sure `VITE_WEB3FORMS_ACCESS_KEY` is set in `.env` for submissions to work.

## Assets

Images are served from `public/photo/` (copied from the original `photo/` folder), including the logo and project photos used across the site.

## Contact Information (as provided)

- **Email:** atrovia2@gmail.com
- **Phone:** 08144508060
- **Office Address:** No 6 Alhaji Mustapha Street, Temidire Estate Rd, off Ring Road, Osogbo, Osun State
- **Home Address:** Abidogun Street, Offa, Kwara State
