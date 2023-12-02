import { NavLink } from "react-router-dom"

import Carousel from '../components/Carousel'

import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"

function Session() {
  return (
    <>
     {/* Sessões / Sobre o filme */}
      <div className="bg-[#333333] flex justify-between">
          <div className="flex justify-center ml-[15%] w-[50%] border-b-4 border-b-[#F58220] text-[#F58220]">
            <NavLink to="/movie" className="pb-6 text-base font-semibold">Sessões</NavLink>
          </div>
          <div className="flex justify-center mr-[15%] w-[50%] border-b-2 border-b-[#979797] text-[#0099FF] active:border-b-[#F58220] active:text-[#F58220]">
            <NavLink to="/movie/about" className="pb-6 text-base font-semibold">Sobre o filme</NavLink>
          </div>
      </div>
      {/* Sessões */}
      <div className="bg-[#333333] pt-4">
        {/* Dias */}
        <div className="bg-[#252525] flex justify-center ml-[15%] w-[70%] gap-16 p-2 text-[#0099FF] font-bold rounded-md">
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">02/12</h1>
            <h2>Hoje</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">03/12</h1>
            <h2>Dom</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">04/12</h1>
            <h2>Seg</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">05/12</h1>
            <h2>Ter</h2>
          </button>
          <button className="active:border-b-[#F58220] active:text-[#F58220]">
            <h1 className="text-lg ">06/12</h1>
            <h2>Qua</h2>
          </button>
        </div>
        {/* Versões de audio */}
        <div className="flex mt-4 ml-[15%] gap-10">
          <button className="border-2 rounded-2xl border-[#0099FF] text-[#0099FF] uppercase h-8 w-32">Dublado</button>
          <button className="border-2 rounded-2xl border-[#0099FF] text-[#0099FF] uppercase h-8 w-32">Legendado</button>
        </div>
        <Carousel slides={slidesEmAlta} type={typeEmAlta} />
      </div>
    </>
  )
}

export default Session