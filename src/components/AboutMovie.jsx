import { NavLink } from "react-router-dom"

import HeaderMovie from "./HeaderMovie"
import MDCarousel from "./MDCarousel"

import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"

function AboutMovie() {
  return (
    <>
    <HeaderMovie />
      {/* Sessões / Sobre o filme */}
      <div className="bg-[#333333] flex justify-between">
          <div className="flex justify-center lg:ml-[13rem] lg:w-[45rem] xs:ml-4 xs:w-full border-b-2 border-b-[#979797] text-[#0099FF] active:border-b-[#F58220] active:text-[#F58220]">
            <NavLink to="/movie" className="pb-6 text-base font-semibold">Sessões</NavLink>
          </div>
          <div className="flex justify-center lg:mr-[13rem] lg:w-[45rem] xs:mr-4 xs:w-full border-b-4 border-b-[#F58220] text-[#F58220]">
            <NavLink to="/movie/about" className="pb-6 text-base font-semibold">Sobre o filme</NavLink>
          </div>
      </div>
      <div className="bg-[#333333] pt-4">
        <div className="lg:ml-[13rem] lg:mr-[13rem] xs:ml-4 xs:mr-4">
          <h1 className="text-gray-100 text-base font-bold mb-2">Sobre o Filme</h1>
          <div className="flex gap-4 uppercase">
            <span className="border-2 border-[#F58220] rounded-md pl-2 pr-2 text-[#F58220] text-sm">Ação</span>
            <span className="border-2 border-[#F58220] rounded-md pl-2 pr-2 text-[#F58220] text-sm">Aventura</span>
            <span className="border-2 border-[#F58220] rounded-md pl-2 pr-2 text-[#F58220] text-sm">Drama</span>
          </div>
          <div className="bg-[#252525] flex items-center gap-4 mt-3 p-2 text-xs rounded-md">
            <span className="bg-[#EC1D25] pl-1 pr-1 ml-3 text-gray-100 rounded-md">16</span>
            <p className="text-[#979797]">Atos Criminosos, Conteúdo Sexual, Linguagem Imprópria, Nudez, Temas Sensíveis, Violência.</p>
          </div>
          <div className="flex flex-col mt-4 gap-y-4 text-gray-200 text-sm">
            <div>
              <h1>Duração:</h1>
              <p>158 min</p>
            </div>
            <div>
              <h1>Nome Original:</h1>
              <p>Napoleon</p>
            </div>
            <div>
              <p>Um olhar pessoal sobre as origens do líder militar francês e sua ascensão rápida e implacável ao 
                imperador, visto através do prisma do relacionamento viciante e volátil de Napoleão com sua esposa 
                e um amor verdadeiro, Josephine.</p>
            </div>
            <div>
              <h1>Direção:</h1>
              <p>Ridley Scott</p>
            </div>
            <div>
              <h1>Distribuição:</h1>
              <p>Sem Distribuidor</p>
            </div>
            <div>
              <h1 className="text-gray-100 text-base font-bold">País de Origem</h1>
              <img src="/icons/EUA.png" alt="" className="lg:h-8 lg:w-8 xs:h6 xs:w-6" />
            </div>
          </div>
        </div>
      </div>
      <MDCarousel slides={slidesEmAlta} type={typeEmAlta} />
    </>
  )
}

export default AboutMovie