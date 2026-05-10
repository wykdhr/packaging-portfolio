import { motion } from 'framer-motion'
import { site } from '../../data/index.js'

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {site.portfolio.categories.map((cat) => {
        const isActive = active === cat.key
        return (
          <motion.button
            key={cat.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(cat.key)}
            className={`px-5 py-2 text-sm rounded-full border transition-colors duration-200 ${
              isActive
                ? 'bg-primary text-surface border-primary'
                : 'bg-transparent text-muted border-border hover:border-primary hover:text-primary'
            }`}
          >
            {cat.label}
          </motion.button>
        )
      })}
    </div>
  )
}
