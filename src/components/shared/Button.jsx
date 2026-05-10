import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-primary text-surface hover:bg-primary/90',
  secondary:
    'border border-primary text-primary hover:bg-primary hover:text-surface',
  ghost:
    'text-primary hover:text-accent',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({ variant = 'primary', size = 'md', href, to, className = '', children, ...props }) {
  const base = `inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}
