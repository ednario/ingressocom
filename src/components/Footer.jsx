function Footer() {
  return (
    <>
      <footer className="bg-[#191919]">
          <div className="lg:mx-auto lg:w-full lg:max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-4 md:mb-0 lg:ml-0 xs:ml-[75%]">
                    <img src="https://ingresso-a.akamaihd.net/catalog/img/ingresso-logo-v1-desktop-final.svg" className="h-8 me-3" alt="Logo" />
                </div>
                <div className="lg:flex lg:flex-row lg:gap-x-32 gap-8 xs:flex xs:flex-col xs:ml-10">
                    <div>
                        <h2 className="mb-4 mt-4 text-sm font-semibold uppercase text-white">Menu</h2>
                        <ul className="text-[#0193F5] text-sm">
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Filmes</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Cinemas</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 mt-4 text-sm font-semibold uppercase text-white">Institucional</h2>
                        <ul className="text-[#0193F5] text-sm">
                            <li className="mb-1">
                                <a href="https://www.ingresso.com/institucional" className="hover:underline ">Quem Somos</a>
                            </li>
                            <li className="mb-1">
                                <a href="https://www.ingresso.com/institucional/assessoria-imprensa" className="hover:underline">Assessoria de Imprensa</a>
                            </li>
                            <li className="mb-1">
                                <a href="https://b2b.ingresso.com/?_ga=2.69743568.1190183508.1701438963-1190197898.1700694450" className="hover:underline">Vale-Presente Corporativo</a>
                            </li>
                            <li className="mb-1">
                                <a href="https://www.ingresso.com/institucional/ingresso-atende" className="hover:underline">Ingresso.com atende</a>
                            </li>
                            <li className="mb-1">
                                <a href="https://www.movieid.com" className="hover:underline">movieID.com</a>
                            </li>
                            <li className="mb-1">
                                <a href="https://uol.gupy.io/" className="hover:underline">Faça parte do time</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 mt-4 text-sm font-semibold uppercase text-white">Políticas</h2>
                        <ul className="text-[#0193F5] text-sm">
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Privacidade e Segurança</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Meia-entrada</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Trocas e Cancelamentos</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Leis Estaduais e Municipais</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Termos de Uso</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 before:sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-end xs:ml-10">
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/ingressocom/" className="text-gray-500 hover:text-white">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                    </svg>
                        <span className="text-xs">Facebook</span>
                    </a>
                    <a href="http://youtube.com/user/Ingressocom" className="text-gray-500 hover:text-white ms-5">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
                    </svg>
                        <span className="text-xs">Youtube</span>
                    </a>
                    <a href="https://www.instagram.com/ingressocom/" className="text-gray-500 hover:text-white ms-5">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                    </svg>
                        <span className="text-xs">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/company/ingresso-com/" className="text-gray-500 hover:text-white ms-5">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                        <span className="text-xs">LinkedIn</span>
                    </a>
                </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer