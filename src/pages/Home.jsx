// import NavBar from '../components/NavBar'
import XlCarousel from '../components/XlCarousel'
import Carousel from '../components/Carousel'

import { slidesXlCarousel } from '../data/slidesXLCarousel';
import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"
import { slidesNoticias, typeNoticias } from '../data/slidesNoticias';

function Home() {
  
  return (
    <div className='overflow-hidden'>
     {/* <NavBar /> */}
     <XlCarousel slides={slidesXlCarousel} />
     <Carousel slides={slidesEmAlta} type={typeEmAlta} />
     <Carousel slides={slidesNoticias} type={typeNoticias} />
     {/* <Footer /> */}
    </div>
  )
}

export default Home