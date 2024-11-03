'use client'

interface PrpopsCardBio {
  link: any
  abriNovaAba?: boolean
  icon?: 'instagram' | 'facebook' | 'whatsapp' | 'github' | 'linkedin'
}

export default function ButtonRedeSocial({ icon, link, abriNovaAba }: PrpopsCardBio) {
  return (
    <a
      href={link}
      target={abriNovaAba ? '_blank' : ''}
      className="bg-[#FAFAFA] rounded-xl border-solid border-2 border-[#EDEDED] hover:border-[#0751D9] flex justify-center items-center w-28 h-28 mx-auto cursor-pointer transition-all hover:scale-110">
      {icon === 'github' &&
        <img
          alt="Icon do Github"
          className="w-16 h-16"
          src="../img/svg/icon-github.svg"
        />
      }
      {icon === 'instagram' &&
        <img
          className="w-16 h-16"
          alt="Icon do Instagram"
          src="../img/svg/icon-instagram.svg"
        />
      }
      {icon === 'facebook' &&
        <img
          className="w-16 h-16"
          alt="Icon do Facebook"
          src="../img/svg/icon-facebook.svg"
        />
      }
      {icon === 'whatsapp' &&
        <img
          className="w-16 h-16"
          alt="Icon do Whatsapp"
          src="../img/svg/icon-whatsapp.svg"
        />
      }
      {icon === 'linkedin' &&
        <img
          className="w-16 h-16"
          alt="Icon do Linkedin"
          src="../img/svg/icon-linkedin.svg"
        />
      }

    </a>
  )
}