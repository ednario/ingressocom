import { ShareIcon } from "@heroicons/react/24/solid"

function HeaderMovie() {
  return (
    <>
      <div className="relative bg-[#333333] lg:h-[25rem] xs:h-[15rem]">
        <div className="bg-[#252525]">
            <div className="mx-auto my-0 max-w-screen-xl lg:px-8 lg:py-0">
              <div className="relative xs:h-[220px] lg:h-[270px] after:content-[&quot;&quot;] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-black/80">
                <img className="relative w-full lg:h-[270px] xs:h-[220px] xs-[390px] object-cover" src="https://ingresso-a.akamaihd.net/prd/img/movie/napoleao/e2bd8e54-fc21-4438-8a12-ad79b0d8bc8c.webp" alt="" />
              </div>
              <div className="absolute lg:ml-[224px] xs:ml-[156px] top-[50px]">
                <div className="line-clamp-2">
                  <h1 className="text-gray-100 mx-0 mb-0 mt-4 inline-block lg:mt-6 lg:text-[28px] font-bold">Napoleão</h1>
                </div>
                <span className="w-full flex-shrink-0 text-sm text-[#979797] lg:flex-1 lg:border-r lg:border-solid lg:pr-3 lg:leading-4">Ação, Aventura, Drama</span>
                <br />
                <span className="bg-[#EC1D25] text-xs p-1 text-gray-100 rounded-md">16</span>
                <span className="text-sm text-[#979797] ml-3 lg:border-r lg:border-solid lg:px-3 lg:leading-4">2h38</span>  
                <div className="hidden lg:mt-4 lg:flex lg:max-w-[500px] lg:items-end">
                  <span className="line-clamp-2 text-sm leading-none text-white">
                    Um olhar pessoal sobre as origens do líder militar francês e sua ascensão rápida e implacável
                    ao imperador, visto através do prisma do relacionamento viciante e volátil de Napoleão com
                    sua esposa e um amor verdadeiro, Josephine.
                  </span>
                  <button className="text-blue-500 cursor-pointer whitespace-nowrap border-none bg-transparent text-sm text-ing-primary">
                    ver mais
                  </button>
                </div>
                <div className="mt-4">
                  <button className="flex">
                    <ShareIcon className="text-blue-500 h-4 w-5 hover:border-blue-300 hover:text-blue-300 mr-2" />
                    <span className="text-blue-500 cursor-pointer whitespace-nowrap border-none bg-transparent text-sm text-ing-primary">
                      Compartilhar
                    </span>
                  </button>
                </div>
              </div>
        </div>
      </div>
          <img className="relative ml-[32px] lg:top-[-240px] xs:top-[-190px] lg:w-[13.37rem] xs:h-[158px] lg:h-[314px]" src="https://ingresso-a.akamaihd.net/prd/img/movie/napoleao/8001cda0-e5ea-475c-9434-777232fe9245.webp" alt="" />
        </div>
    </>
  )
}

export default HeaderMovie