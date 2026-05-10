export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
