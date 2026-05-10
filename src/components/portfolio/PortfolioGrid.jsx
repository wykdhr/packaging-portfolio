import { AnimatePresence } from 'framer-motion'
import PortfolioCard from './PortfolioCard'

export default function PortfolioGrid({ items, onItemClick }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-muted">
        <p className="text-lg">暂无作品</p>
        <p className="text-sm mt-2">该分类下还没有作品，请查看其他分类</p>
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
