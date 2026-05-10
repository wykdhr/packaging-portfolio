import { company, site } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import CompanyIntro from '../components/about/CompanyIntro'
import Timeline from '../components/about/Timeline'

export default function AboutPage() {
  const { about } = site

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={company.philosophy}
          subtitle={`${company.nameCN}，成立于${company.founded}年`}
        />

        <CompanyIntro company={company} title={about.introTitle} />

        <SectionTitle
          title={about.timelineTitle}
          subtitle={about.timelineSubtitle}
        />
        <div className="max-w-3xl mx-auto">
          <Timeline milestones={company.milestones} />
        </div>
      </div>
    </div>
  )
}
