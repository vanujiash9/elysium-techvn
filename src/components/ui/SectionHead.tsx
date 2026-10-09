interface SectionHeadProps {
  label: string
  title: string
  text?: string
}

export function SectionHead({ label, title, text }: SectionHeadProps) {
  return (
    <div className="section-head">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
