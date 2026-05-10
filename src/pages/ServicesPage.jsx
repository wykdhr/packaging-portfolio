import { services, site } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import ServiceCard from '../components/services/ServiceCard'
import Button from '../components/shared/Button'

export default function ServicesPage() {
  const { services: page } = site

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={page.title} subtitle={page.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center border-t border-border pt-16">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
            {page.ctaTitle}
          </h3>
          <p className="text-muted mb-8">{page.ctaSubtitle}</p>
          <Button to="/contact" size="lg">
            {page.ctaButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
