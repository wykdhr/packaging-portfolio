import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { portfolio } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import FilterBar from '../components/portfolio/FilterBar'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import PortfolioModal from '../components/portfolio/PortfolioModal'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const { id } = useParams()

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return portfolio
    return portfolio.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  // If there's an id param, find and show the modal
  const modalItem = id
    ? portfolio.find((item) => item.id === id) || selectedItem
    : selectedItem

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="作品集"
          subtitle="每一个项目，都是我们与品牌共同讲述的故事"
        />

        <FilterBar active={activeCategory} onChange={setActiveCategory} />

        <PortfolioGrid
          items={filtered}
          onItemClick={(item) => setSelectedItem(item)}
        />
      </div>

      {modalItem && (
        <PortfolioModal
          item={modalItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  )
}
