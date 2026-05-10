import { services } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import ServiceCard from '../components/services/ServiceCard'
import Button from '../components/shared/Button'

export default function ServicesPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="服务项目"
          subtitle="从品牌策略到印刷落地，我们提供全流程的包装设计服务"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center border-t border-border pt-16">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
            有项目想要合作？
          </h3>
          <p className="text-muted mb-8">
            告诉我们您的需求，我们将为您提供专业的包装设计解决方案
          </p>
          <Button to="/contact" size="lg">
            联系我们
          </Button>
        </div>
      </div>
    </div>
  )
}
