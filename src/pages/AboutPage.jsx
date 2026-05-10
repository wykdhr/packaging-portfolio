import { company } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import CompanyIntro from '../components/about/CompanyIntro'
import Timeline from '../components/about/Timeline'

export default function AboutPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={company.philosophy}
          subtitle={`${company.nameCN}，成立于${company.founded}年`}
        />

        <CompanyIntro company={company} />

        {/* Timeline */}
        <SectionTitle
          title="发展历程"
          subtitle="每一步成长，都离不开对设计的热爱与坚持"
        />
        <div className="max-w-3xl mx-auto">
          <Timeline milestones={company.milestones} />
        </div>
      </div>
    </div>
  )
}
