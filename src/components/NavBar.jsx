import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

function NavBar() {
  return (
    <>
      <nav className="bg-blue-600 border-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="https://ingresso-a.akamaihd.net/catalog/img/ingresso-logo-v1-desktop-final.svg" className="h-8" alt="Logo" />
              </a>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-200 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                  <MagnifyingGlassIcon className="w-6 h-6 xs:w-5 xs:h-5"/>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                  </div>
                  <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O que você procura?"/>
                </div>
              </div>
            </div>
          </div>
      </nav>
      <nav className="bg-blue-800">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                      <li>
                          <a href="#" className="text-blue-200 hover:text-white xs:text-sm xl:text-lg" alt="Filmes">Filmes</a>
                      </li>
                      <li>
                          <a href="#" className="text-blue-200 hover:text-white xs:text-sm xl:text-lg" alt="Cinemas">Cinemas</a>
                      </li>
                      <li>
                          <a href="#" className="text-blue-200 hover:text-white xs:text-sm xl:text-lg" alt="Notícias">Notícias</a>
                      </li>
                      <li>
                          <a href="#" className="text-blue-200 hover:text-white xs:text-sm xl:text-lg" alt="Fanshop">Fanshop</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  )
}

export default NavBar