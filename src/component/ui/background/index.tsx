import { useEffect, useMemo, useState } from 'react'

import { type Container } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import s from './background.module.scss'

import { options } from './options'

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const getOptions = useMemo(() => options, [])

  return (
    init && (
      <Particles
        className={s.background}
        id={'tsparticles'}
        options={getOptions}
        particlesLoaded={particlesLoaded}
        style={{ position: 'absolute', zIndex: '-100' }}
      />
    )
  )
}
