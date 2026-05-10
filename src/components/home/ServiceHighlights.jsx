import { motion } from 'framer-motion'
import services from '../../data/services.json'
import SectionTitle from '../shared/SectionTitle'
import Button from '../shared/Button'

const iconMap = {
  food: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c-1.5 4-1.5 8 0 12M12 3c1.5 4 1.5 8 0 12M3 12h18M7 7l10 10M17 7L7 17" />
    </svg>
  ),
  cosmetic: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2 6h6l-4 4 2 6-6-4-6 4 2-6-4-4h6z" />
    </svg>
  ),
  gift: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="14" rx="1" />
      <path d="M12 8V22M7 8c0-3 2-5 5-5s5 2 5 5" />
    </svg>
  ),
  brand: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="2" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
    </svg>
  ),
  print: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="3" width="12" height="5" />
      <rect x="6" y="12" width="12" height="9" />
      <path d="M3 8h18M6 8v4h12V8" />
    </svg>
  ),
  structure: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  ),
}

export default function ServiceHighlights() {
  const highlights = services.slice(0, 4)

  return (
    <section className="py-24 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="我们的服务" subtitle="从创意到落地，一站式包装设计解决方案" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-surface transition-colors duration-300">
                {iconMap[service.icon] || iconMap.brand}
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="ghost" size="md">
            了解更多 &rarr;
          </Button>
        </div>
      </div>
    </section>
  )
}
