import {ReactNode} from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({children, title =""}:SectionProps) => {
  return (
    <section>
        <p>{children}</p>
    </section>
  )
}

