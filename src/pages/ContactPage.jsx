import { company, site } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  const { contact } = site

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title={contact.title} subtitle={contact.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              {contact.formTitle}
            </h3>
            <ContactForm />
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              {contact.infoTitle}
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted mb-1">{contact.labels.phone}</p>
                <p className="text-primary">{company.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">{contact.labels.email}</p>
                <a href={`mailto:${company.contact.email}`} className="text-primary hover:text-accent transition-colors">
                  {company.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">{contact.labels.address}</p>
                <p className="text-primary">{company.contact.address}</p>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">{contact.labels.wechat}</p>
                <p className="text-primary">{company.contact.wechat}</p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <h4 className="text-sm font-medium text-primary mb-3">{contact.hoursTitle}</h4>
              <p className="text-sm text-muted">{contact.hours.weekday}</p>
              <p className="text-sm text-muted">{contact.hours.saturday}</p>
              <p className="text-sm text-muted">{contact.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
