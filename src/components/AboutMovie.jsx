import { NavLink } from "react-router-dom"

import HeaderMovie from "./HeaderMovie"
import Carousel from "./Carousel"

import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"

function AboutMovie() {
  return (
    <>
    <HeaderMovie />
      <div className="bg-[#333333] flex justify-between">
          <div className="flex justify-center ml-[15%] w-[50%] border-b-2 border-b-[#979797] text-[#0099FF] active:border-b-[#F58220] active:text-[#F58220]">
            <NavLink to="/movie" className="pb-6 text-base font-semibold">Sessões</NavLink>
          </div>
          <div className="flex justify-center mr-[15%] w-[50%] border-b-4 border-b-[#F58220] text-[#F58220]">
            <NavLink to="/movie/about" className="pb-6 text-base font-semibold">Sobre o filme</NavLink>
          </div>
      </div>
      <div>
          <Carousel slides={slidesEmAlta} type={typeEmAlta} />
      </div>
    </>
  )
}

export default AboutMovie