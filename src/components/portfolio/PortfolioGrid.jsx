import { AnimatePresence } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import { site } from '../../data/index.js'

export default function PortfolioGrid({ items, onItemClick }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-muted">
        <p className="text-lg">{site.portfolio.emptyTitle}</p>
        <p className="text-sm mt-2">{site.portfolio.empty}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <PortfolioCard key={item.id} item={item} onClick={onItemClick} />
        ))}
      </AnimatePresence>
    </div>
  )
}
