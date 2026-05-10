import { useState } from 'react'
import Button from '../shared/Button'
import { site, company } from '../../data/index.js'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const t = site.contact.form

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = t.nameError
    if (!form.email.trim()) {
      errs.email = t.emailError
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.emailFormatError
    }
    if (!form.subject.trim()) errs.subject = t.subjectError
    if (!form.message.trim()) errs.message = t.messageError
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus(null)
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `[包装设计咨询] ${form.subject}`,
          message: form.message,
        }),
      })
      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 text-sm border ${
      errors[field] ? 'border-red-400' : 'border-border'
    } bg-transparent text-primary placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors min-h-[44px]`

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <input type="text" placeholder={t.namePlaceholder} value={form.name}
          onChange={handleChange('name')} className={inputClass('name')} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <input type="email" placeholder={t.emailPlaceholder} value={form.email}
          onChange={handleChange('email')} className={inputClass('email')} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input type="text" placeholder={t.subjectPlaceholder} value={form.subject}
          onChange={handleChange('subject')} className={inputClass('subject')} />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <textarea rows={5} placeholder={t.messagePlaceholder} value={form.message}
          onChange={handleChange('message')} className={`${inputClass('message')} resize-none`} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" size="md" className="w-full sm:w-auto">
        {t.submitButton}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">{t.successMessage}</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm">{t.errorMessage} {company.contact.email}</p>
      )}
    </form>
  )
}
