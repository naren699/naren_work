import { Reveal, Stagger } from '../components/Motion'
import { SectionHeading } from '../components/shared/SectionHeading'
import { CertificateCard } from '../components/shared/CertificateCard'
import { certificates } from '../data/certificates'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative scroll-mt-20 border-y border-[var(--border-faint)] bg-[var(--surface-sunken)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications"
            copy="Professional certifications that strengthen my expertise in Artificial Intelligence, Full Stack Development, GPU Programming, Parallel Computing, DevOps, and Deep Learning."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
