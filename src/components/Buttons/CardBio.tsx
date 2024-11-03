'use client'

interface PrpopsCardBio {
  link: any
  titulo: string
  opacity?: number
  maxHeight?: number
  animation?: boolean
  backgroundColor: any
  backgroundImage: string
  icon?: 'instagram' | 'facebook' | 'tiktok' | 'plus' | 'whatsapp' | 'download' | 'lamp' | 'local'
}

export default function CardBio({ titulo, animation, icon, opacity, link, backgroundColor, backgroundImage, maxHeight }: PrpopsCardBio) {
  return (
    <a
      target="_blank"
      style={{
        borderColor: backgroundColor,
        maxHeight: maxHeight ?? '100%',
        backgroundColor: backgroundColor,
      }}
      download={icon === 'download' ? link : false}
      href={link}
      className={`${animation && 'animate-bounce'}   relative h-full w-full lg:max-w-[400px] rounded-3xl hover:bg-brand-primary transition-all border-solid border-2 hover:border-white scale-100 hover:scale-105 shadow-xl cursor-pointer py-2 lg:py-0`}>
      <div className="z-50 flex flex-col h-full justify-end py-0 px-3 lg:py-6">
        <div className="absolute top-2 right-2">
          {icon &&
            <img src="../img/svg/icon-plus.svg" alt="icone" className="w-8" />
          }
        </div>
        <h2 className="font-MontserratBold text-2xl xl:text-2xl text-white text-center lg:text-start px-4">
          {titulo}
        </h2>
      </div>
      <img
        alt="icone"
        src={backgroundImage}
        style={{ objectFit: 'cover', opacity: opacity ?? 0.1 }}
        className={`absolute top-0 rounded-3xl w-full h-full -z-10`}
      />
    </a>
  )
}