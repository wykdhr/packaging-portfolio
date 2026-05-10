import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LazyImage from '../shared/LazyImage'

const categoryLabels = {
  food: '食品包装',
  cosmetic: '化妆品包装',
  gift: '礼品盒',
  beverage: '饮料包装',
  other: '其他',
}

export default function PortfolioModal({ item, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const handleClose = () => {
    navigate('/portfolio')
    onClose()
  }

  const images = [item.thumbnail, ...(item.images || [])]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-surface w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Main image */}
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <LazyImage
              src={images[currentImage]}
              alt={item.title}
              aspectRatio="16/9"
              className="md:aspect-[21/9]"
            />
          </div>

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <div className="flex gap-2 px-6 pt-4 overflow-x-auto">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-colors ${
                    currentImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Info */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <span className="text-xs text-accent font-medium tracking-wide">
                  {categoryLabels[item.category] || item.category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-1">
                  {item.title}
                </h2>
                <p className="text-muted mt-2">客户：{item.client} · {item.year}</p>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-6">{item.description}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
