import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (options.once) {
                        observer.unobserve(element)
                    }
                } else if (!options.once) {
                    setIsInView(false)
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
                ...options,
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [options.once, options.threshold, options.rootMargin])

    return { ref, isInView }
}

export default useInView
