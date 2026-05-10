import { motion } from 'framer-motion'
import LazyImage from '../shared/LazyImage'
import { site } from '../../data/index.js'

const categoryLabels = Object.fromEntries(
  site.portfolio.categories.filter(c => c.key !== 'all').map(c => [c.key, c.label])
)

export default function PortfolioCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="overflow-hidden mb-4">
        <LazyImage
          src={item.thumbnail}
          alt={item.title}
          aspectRatio="4/3"
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span className="text-xs text-accent font-medium tracking-wide">
        {categoryLabels[item.category] || item.category}
      </span>
      <h3 className="font-serif text-xl font-semibold text-primary mt-1 group-hover:text-accent transition-colors">
        {item.title}
      </h3>
      <p className="text-muted text-sm mt-1">{item.client}</p>
    </motion.div>
  )
}
