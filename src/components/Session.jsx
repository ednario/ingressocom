import { NavLink } from "react-router-dom"

import MDCarousel from "./MDCarousel"
import Days from '../components/Days'
import TimetableCards from "./TimetableCards"

import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"
import DubbingButtons from "./DubbingButtons"

function Session() {
  return (
    <>
     {/* Sessões / Sobre o filme */}
      <div className="bg-[#333333] flex justify-between">
          <div className="flex justify-center lg:ml-[13rem] lg:w-[45rem] xs:ml-4 xs:w-full border-b-4 border-b-[#F58220] text-[#F58220]">
            <NavLink to="/movie" className="pb-6 text-base font-semibold">Sessões</NavLink>
          </div>
          <div className="flex justify-center lg:mr-[13rem] lg:w-[45rem] xs:mr-4 xs:w-full border-b-2 border-b-[#979797] text-[#0099FF] active:border-b-[#F58220] active:text-[#F58220]">
            <NavLink to="/movie/about" className="pb-6 text-base font-semibold">Sobre o filme</NavLink>
          </div>
      </div>
      {/* Sessões */}
      <div className="bg-[#333333] pt-4">
        {/* Dias */}
        <Days />
        {/* Versões de audio */}
        <DubbingButtons />
        {/* Cards */}
        <TimetableCards name={"Napoleão"} type={"Dublado"} local={"Av. Padre Cicero, 2555 | Triângulo"} time={"20:10"} />
        <TimetableCards name={"Napoleão"} type={"Legendado"} local={"Av. Padre Cicero, 2555 | Triângulo"} time={"18:30"} />
        {/* Carousel */}
        <MDCarousel slides={slidesEmAlta} type={typeEmAlta} />
      </div>
    </>
  )
}

export default Session