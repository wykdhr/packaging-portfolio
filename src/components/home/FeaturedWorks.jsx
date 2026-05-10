import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolio, site } from '../../data/index.js'
import LazyImage from '../shared/LazyImage'
import SectionTitle from '../shared/SectionTitle'
import Button from '../shared/Button'

const categoryLabels = Object.fromEntries(
  site.portfolio.categories.filter(c => c.key !== 'all').map(c => [c.key, c.label])
)

export default function FeaturedWorks() {
  const featured = portfolio.filter((item) => item.featured).slice(0, 3)
  const { featured: section } = site.home

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={section.title} subtitle={section.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/portfolio/${item.id}`} className="group block">
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
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/portfolio" variant="ghost" size="md">
            {section.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
