import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ''}`}>{children}</div>
)
