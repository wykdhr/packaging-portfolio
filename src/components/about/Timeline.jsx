import { motion } from 'framer-motion'

export default function Timeline({ milestones }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px" />

      <div className="space-y-0">
        {milestones.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex items-start mb-10 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <span className="text-accent font-serif text-2xl font-bold">{item.year}</span>
                <h3 className="font-serif text-lg font-semibold text-primary mt-1">
                  {item.title}
                </h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
