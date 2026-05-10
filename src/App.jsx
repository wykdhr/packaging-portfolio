import { Routes, Route } from 'react-router-dom'
import { site } from './data/index.js'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function NotFound() {
  const { notFound } = site
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="font-serif text-6xl text-primary mb-4">{notFound.title}</h1>
      <p className="text-muted mb-8">{notFound.message}</p>
      <a href="/" className="text-accent hover:text-accent-light underline underline-offset-4">
        {notFound.backHome}
      </a>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:id" element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
