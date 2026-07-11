import AmbientGlow from './AmbientGlow'
import FloatingHUD from './FloatingHUD'
import ParticleLayer from './ParticleLayer'
import MouseGlow from './MouseGlow'

export default function AnimatedBackground() {
  return (
    <>
      <div className="site-grid site-grid-animated pointer-events-none fixed inset-0 -z-0" />
      <AmbientGlow />
      <FloatingHUD />
      <ParticleLayer />
      <MouseGlow />
    </>
  )
}
