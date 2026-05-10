import { useState } from 'react'

export default function LazyImage({ src, alt, aspectRatio = '4/3', className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        style={{ aspectRatio }}
        className={`bg-border flex items-center justify-center text-muted text-sm ${className}`}
      >
        暂无图片
      </div>
    )
  }

  return (
    <div style={{ aspectRatio }} className={`relative overflow-hidden bg-border ${className}`}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-border animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  )
}
