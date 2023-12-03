import { PlusIcon } from '@heroicons/react/24/outline'

function TimetableCards({ name, type, local, time }) {
  return (
    <>
      <div className="bg-[#252525] lg:ml-[13rem] xs:ml-8 xs:mr-8 lg:w-[58.5rem] xs:w-[26rem] lg:mt-[3.65rem] xs:mt-6 rounded-md">
          <div className="flex justify-between items-center lg:ml-4 lg:mr-4 lg:w-[57.5rem] xs:w-[26rem] pb-4 border-b-[1px] border-[#979797]">
            <img src="icons/Heart.svg" className="ml-7 h-6 w-6 text-[#0099FF]" />
            <div className="lg:ml-[-31rem] xs:ml-4">
              <h1 className="text-[#0099FF] mx-0 mb-0 mt-4">{ name } - { type }</h1>
              <p className="w-full flex-shrink-0 text-sm text-[#979797]">{ local }</p>
            </div>
            <a href="/movie" className="flex items-center gap-2">
              <PlusIcon className="h-6 w-6 text-[#0099FF]" />
              <h1 className="text-[#0099FF] mr-7">Detalhes</h1>
            </a>
          </div>
          <div className="flex mt-7 ml-4 pb-4">
            <button className="pl-7 pr-7 border-2 border-[#0099FF] text-[#0099FF] rounded-md">{ time }</button>
          </div>
        </div>
    </>
  )
}

export default TimetableCards