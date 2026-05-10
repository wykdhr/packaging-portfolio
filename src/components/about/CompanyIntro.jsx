import { motion } from 'framer-motion'

export default function CompanyIntro({ company }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
          关于我们
        </h2>
        <div className="text-muted leading-relaxed space-y-4">
          {company.description.split('\n').filter(Boolean).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-8"
      >
        {company.stats.map((stat) => (
          <div key={stat.label} className="text-center border border-border p-6">
            <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
