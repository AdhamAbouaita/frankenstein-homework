import { createElement, useEffect, useRef, useState } from 'react'

const Reveal = ({ as: Tag = 'div', children, className = '', delay = 0, variant = 'slide-up' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.2,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return createElement(
    Tag,
    {
      ref,
      className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim(),
      'data-variant': variant,
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  )
}

export default Reveal
