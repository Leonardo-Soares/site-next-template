import ButtonRedeSocial from "@/components/Buttons/ButtonRedeSocial"

export default function Home() {
  return (
    <main className="bg-white">
      <div className="mx-8 my-12 md:mx-auto max-w-[500px]">
        {/* PERFIL */}
        <div className="flex flex-col justify-center">
          <div className="w-52 h-52 mx-auto rounded-full border-solid border-4 border-[#EDEDED] mb-4"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: 'url(../img/temp/avatar.jpg)',
            }}
          >
            {/* <img
              className="w-full h-auto object-fill rounded-full"
              src="../img/temp/avatar.jpg" alt="" /> */}
          </div>
          <h2 className="text-3xl font-bold text-center text-[#0751D9]">
            Leonardo Soares ∴
          </h2>
          <h4 className="text-center text-[#6f6f6f]">
            Programador Web e Mobile
          </h4>
        </div>

        {/* REDES */}
        <div className="grid grid-cols-4 gap-y-2 gap-x-2 mt-12">
          <ButtonRedeSocial
            abriNovaAba
            icon="github"
            link="https://github.com/Leonardo-Soares"
          />
          <ButtonRedeSocial
            abriNovaAba
            icon="instagram"
            link="https://www.instagram.com/leonardosoares.pa"
          />
          <ButtonRedeSocial
            abriNovaAba
            icon="whatsapp"
            link="https://api.whatsapp.com/send?phone=5591998260317"
          />
          <ButtonRedeSocial
            abriNovaAba
            icon="linkedin"
            link="https://www.linkedin.com/in/leonardo-afonso-soares"
          />
        </div>


        <div className="mt-12">
          <h2 className="text-3xl text-[#0751D9]">
            Olá, amados leitores!
          </h2>
          <p className="text-md">
            Meu nome é Leonardo Soares, sou programador Web e Mobile, apaixonado por tecnologia e inovação. Atualmente estou cursando Sistemas da Informação (Estácio) e sou desenvolvedor Front-End e Mobile na empresa Bredi Tecnologia.
          </p>
          <p className="text-md">
            Estou sempre buscando aprender novas tecnologias e aprimorar meus conhecimentos. Sou um entusiasta do JavaScript e principalmetne do React, React Native e Next.js, e estou sempre disposto a ajudar e compartilhar conhecimento com a comunidade.
          </p>
        </div>

      </div>
    </main>
  )
}