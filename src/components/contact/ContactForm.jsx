import { useState } from 'react'
import Button from '../shared/Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '请输入姓名'
    if (!form.email.trim()) {
      errs.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = '邮箱格式不正确'
    }
    if (!form.subject.trim()) errs.subject = '请输入主题'
    if (!form.message.trim()) errs.message = '请输入留言内容'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus(null)
    try {
      const response = await fetch('https://formsubmit.co/ajax/3342064820@qq.com', {
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
        <input
          type="text"
          placeholder="您的姓名 *"
          value={form.name}
          onChange={handleChange('name')}
          className={inputClass('name')}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="您的邮箱 *"
          value={form.email}
          onChange={handleChange('email')}
          className={inputClass('email')}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="咨询主题 *"
          value={form.subject}
          onChange={handleChange('subject')}
          className={inputClass('subject')}
        />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <textarea
          rows={5}
          placeholder="请描述您的需求... *"
          value={form.message}
          onChange={handleChange('message')}
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" size="md" className="w-full sm:w-auto">
        发送留言
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">感谢您的留言，我们会尽快回复！</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm">发送失败，请稍后重试或直接发送邮件至 hello@packdesign.cn</p>
      )}
    </form>
  )
}
