import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function Carousel({ slides, type }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)'
  });

  return (
    <div className="bg-[#333333]">
      <h1 className="pt-12 pb-6 pl-4 text-white text-lg font-bold">{type}</h1>
      <div
        className={`flex transition ease-out duration-40 ml-6 py-1 gap-3 relative group xl:w-[14.12rem] xl:h-[20.93rem] xs:w-[8.12rem] xs:h-[15rem]`}
        style={
          isDesktopOrLaptop ? 
          {
            width: "150%",
            transform: `translateX(-${current * 5}%)`,
          } : 
          {
            width: "300%",
            transform: `translateX(-${current * 5}%)`,
          }
        }
      >
        {slides.map((s) => (
          <div>
              <a key={s.id} className="" href={s.link}>
                <img
                src={s.img}
                alt="img"
                className="rounded-2xl" />
                <h1 className="p-2 mt-1 text-[#CCCCCC] flex justify-center hover:text-white xs:text-sm xl:text-base">{s.name}</h1>
                </a>
            </div>
        ))}
        </div>
        <div className="relative h-full w-full justify-between items-center flex text-white px-10 text-3xl xl:top-[-12rem] xs:top-[-9rem]">
            <button onClick={previousSlide}>
                  <ChevronLeftIcon className="border-2 rounded-3xl border-blue-400 text-blue-400 h-8 w-8 hover:border-blue-300 hover:text-blue-300" />
                </button>
                <button onClick={nextSlide}>
                  <ChevronRightIcon className="border-2 rounded-3xl border-blue-400 text-blue-400 h-8 w-8 hover:border-blue-300 hover:text-blue-300" />
                </button>
              </div>
    </div>
  );
}

export default Carousel;