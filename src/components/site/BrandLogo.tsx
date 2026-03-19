import Link from 'next/link'

type BrandLogoProps = {
  compact?: boolean
  dark?: boolean
}

export const BrandLogo = ({ compact = false, dark = false }: BrandLogoProps) => {
  const primaryClass = dark ? 'text-white' : 'text-[#f41822]'
  const secondaryClass = dark ? 'text-white/78' : 'text-[#111111]'

  return (
    <Link
      aria-label="Hội Nhập Thời Đại"
      className={`inline-flex items-center ${compact ? 'gap-3.5' : 'gap-5'} transition-opacity hover:opacity-90`}
      href="/"
    >
      <div className="flex flex-col leading-none">
        <div className={`flex items-start ${compact ? 'gap-3' : 'gap-4'}`}>
          <span className={`font-black uppercase tracking-[0.08em] ${primaryClass} ${compact ? 'text-[1.6rem]' : 'text-[2.35rem]'}`}>
            HỘI NHẬP
          </span>
          <span className={`logo-globe ${compact ? 'logo-globe--compact' : ''}`} aria-hidden="true">
            <span className="logo-globe__map">
              <span className="logo-globe__continent logo-globe__continent--a1" />
              <span className="logo-globe__continent logo-globe__continent--a2" />
              <span className="logo-globe__continent logo-globe__continent--a3" />
              <span className="logo-globe__continent logo-globe__continent--b1" />
              <span className="logo-globe__continent logo-globe__continent--b2" />
              <span className="logo-globe__continent logo-globe__continent--b3" />
            </span>
          </span>
        </div>
        <span
          className={`mt-1.5 font-extrabold uppercase tracking-[0.42em] ${secondaryClass} ${compact ? 'pl-1 text-[0.72rem]' : 'pl-1 text-[1rem]'}`}
        >
          THỜI ĐẠI
        </span>
      </div>
    </Link>
  )
}
