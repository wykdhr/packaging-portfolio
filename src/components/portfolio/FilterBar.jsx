import { motion } from 'framer-motion'

const categories = [
  { key: 'all', label: '全部' },
  { key: 'food', label: '食品包装' },
  { key: 'cosmetic', label: '化妆品包装' },
  { key: 'gift', label: '礼品盒' },
  { key: 'beverage', label: '饮料包装' },
  { key: 'other', label: '其他' },
]

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => {
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
