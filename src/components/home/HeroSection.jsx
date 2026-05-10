import { motion } from 'framer-motion'
import Button from '../shared/Button'
import { site } from '../../data/index.js'

export default function HeroSection() {
  const { hero } = site.home

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
        >
          {hero.title1}
          <br />
          <span className="text-accent">{hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/portfolio" size="lg">
            {hero.cta1}
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            {hero.cta2}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
