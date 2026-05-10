import { motion } from 'framer-motion'

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

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border p-8 hover:border-accent/30 transition-colors"
    >
      <div className="text-accent mb-5">
        {iconMap[service.icon] || iconMap.brand}
      </div>
      <h3 className="font-serif text-xl font-semibold text-primary mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-5">
        {service.description}
      </p>
      {service.items && service.items.length > 0 && (
        <ul className="space-y-1.5">
          {service.items.map((item) => (
            <li key={item} className="text-sm text-muted flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
