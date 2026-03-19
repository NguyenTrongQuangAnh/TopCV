import Image from 'next/image'
import Link from 'next/link'

export const VpaHeaderLogo = () => {
  return (
    <Link
      aria-label="HSNL VPA"
      className="inline-flex items-center transition-opacity hover:opacity-90"
      href="/"
    >
      <Image
        alt="HSNL VPA"
        className="h-auto w-[132px] sm:w-[148px]"
        height={245}
        priority
        src="/branding/vpa-header-logo.png"
        width={484}
      />
    </Link>
  )
}
