// import NavBar from '../components/NavBar'
import XlCarousel from '../components/XlCarousel'
import Carousel from '../components/Carousel'
import MDCarousel from '../components/MDCarousel';

import { slidesXlCarousel } from '../data/slidesXLCarousel';
import { slidesEmAlta, typeEmAlta } from "../data/slidesEmAlta"
import { slidesEmCartaz, typeEmCartaz } from '../data/slidesEmCartaz';

function Home() {
  
  return (
    <div className='overflow-hidden'>
     {/* <NavBar /> */}
     <XlCarousel slides={slidesXlCarousel} />
     <Carousel slides={slidesEmAlta} type={typeEmAlta} />
     <MDCarousel slides={slidesEmCartaz} type={typeEmCartaz} />
     {/* <Footer /> */}
    </div>
  )
}

export default Home