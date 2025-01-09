import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { animated, useSpring } from '@react-spring/web'

interface AnimatedSectionProps {
  children: ReactNode
}

export const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const animation = useSpring({
    config: { friction: 20, tension: 200 },
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    },
  })

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  )
}
