type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="max-w-2xl">
    <div className="mb-4 flex items-center gap-3">
      <span className="h-1.5 w-10 rounded-full bg-brand-600" />
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">{eyebrow}</p>
    </div>
    <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.2rem]">{title}</h2>
    <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
  </div>
)
