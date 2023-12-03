import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


function XlCarousel({ slides }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full relative group bg-[#333333] xl:w-[84.5rem] xl:h-[23.75rem] sm:w-[46.5rem] xs:w-[31rem] xs:h-[15.62rem]'>
      <a href="/movie">
        <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'/>
        <div className="absolute bottom-0 flex w-full flex-col bg-gradient-to-b from-[#212121]/0 to-[#212121]/80 lg:h-full max-w-[600px] lg:justify-center lg:bg-gradient-to-r lg:from-black lg:from-15% lg:to-black/0">
        </div>
      </a>
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeftIcon onClick={prevSlide} className='className="border-2 rounded-3xl border-gray-300 text-gray-300 h-8 w-8 hover:border-gray-200 hover:text-gray-200' />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRightIcon onClick={nextSlide} className='className="border-2 rounded-3xl border-gray-300 text-gray-300 h-8 w-8 hover:border-gray-200 hover:text-gray-200' />
      </div>
    </div>
  );
}

export default XlCarousel;