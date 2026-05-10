import { company } from '../data/index.js'
import SectionTitle from '../components/shared/SectionTitle'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="联系我们"
          subtitle="期待与您的合作，让我们一起打造令人心动的包装"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              发送留言
            </h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-6">
              联系方式
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted mb-1">电话</p>
                <p className="text-primary">{company.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">邮箱</p>
                <a href={`mailto:${company.contact.email}`} className="text-primary hover:text-accent transition-colors">
                  {company.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">地址</p>
                <p className="text-primary">{company.contact.address}</p>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">微信</p>
                <p className="text-primary">{company.contact.wechat}</p>
              </div>
            </div>

            {/* Working hours */}
            <div className="mt-10 pt-10 border-t border-border">
              <h4 className="text-sm font-medium text-primary mb-3">工作时间</h4>
              <p className="text-sm text-muted">周一至周五：9:00 - 18:00</p>
              <p className="text-sm text-muted">周六：10:00 - 17:00</p>
              <p className="text-sm text-muted">周日：休息</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
