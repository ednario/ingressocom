import NavBar from '../components/NavBar'
import XlCarousel from '../components/XlCarousel'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer';

function Home() {
  const slidesXlCarousel = [
    {
      id: 1,
      url: 'https://ingresso-a.akamaihd.net/prd/img/movie/napoleao/e2bd8e54-fc21-4438-8a12-ad79b0d8bc8c.webp',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
  ];

  let slidesEmAlta = [
    {
      id: 1,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/jogos-vorazes-a-cantiga-dos-pa-ssaros-e-das-serpentes/177644c1-0445-45ae-b931-cbd82bc58140.webp"
    },
    {
      id: 2,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/o-pai-o-2/b0136c88-fda8-442f-a348-563132b04691.webp"
    },
    {
      id: 3,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/renaissance-um-filme-de-beyonce/1c6bb977-82f9-4e2a-8ac8-be44a716cdcc.webp"
    },
    {
      id: 4,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/as-marvels/ce5d50ca-1876-4d76-b154-1fb6dad57b11.webp"
    },
    {
      id: 5,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/seventeen-tour-follow-to-japan-live-viewing/38476364-833f-4aff-b4d3-ddc9906a1447.webp"
    },
    {
      id: 6,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/taylor-swift-the-eras-tour/9db1224e-22a9-485e-bd8d-ba3ad05b1d15.webp"
    },
    {
      id: 7,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/five-nights-at-freddys-o-pesadelo-sem-fim/7b421849-024d-40d4-a34b-76c15270265f.webp"
    },
    {
      id: 8,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/assassinos-da-lua-das-flores/038528dd-5747-4324-9024-efe586614f03.webp"
    },
    {
      id: 9,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/trolls-3-juntos-novamente/2f3a4169-b3c2-4f64-93c7-7a621b2957c0.webp"
    },
    {
      id: 10,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/mussum-o-filmis/196231e1-ff6d-4a18-ae14-f4a539e5e630.webp"
    },
  ];
  let typeEmAlta = "Em Alta";

  let slidesNoticias = [
    {
      id: 1,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/jogos-vorazes-a-cantiga-dos-pa-ssaros-e-das-serpentes/177644c1-0445-45ae-b931-cbd82bc58140.webp"
    },
    {
      id: 2,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/o-pai-o-2/b0136c88-fda8-442f-a348-563132b04691.webp"
    },
    {
      id: 3,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/renaissance-um-filme-de-beyonce/1c6bb977-82f9-4e2a-8ac8-be44a716cdcc.webp"
    },
    {
      id: 4,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/as-marvels/ce5d50ca-1876-4d76-b154-1fb6dad57b11.webp"
    },
    {
      id: 5,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/seventeen-tour-follow-to-japan-live-viewing/38476364-833f-4aff-b4d3-ddc9906a1447.webp"
    },
    {
      id: 6,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/taylor-swift-the-eras-tour/9db1224e-22a9-485e-bd8d-ba3ad05b1d15.webp"
    },
    {
      id: 7,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/five-nights-at-freddys-o-pesadelo-sem-fim/7b421849-024d-40d4-a34b-76c15270265f.webp"
    },
    {
      id: 8,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/assassinos-da-lua-das-flores/038528dd-5747-4324-9024-efe586614f03.webp"
    },
    {
      id: 9,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/trolls-3-juntos-novamente/2f3a4169-b3c2-4f64-93c7-7a621b2957c0.webp"
    },
    {
      id: 10,
      link:"https://ingresso-a.akamaihd.net/prd/img/movie/mussum-o-filmis/196231e1-ff6d-4a18-ae14-f4a539e5e630.webp"
    },
  ];
  let typeNoticias = "Notícias";
  
  return (
    <div className='overflow-x-hidden'>
     <NavBar />
     <XlCarousel slides={slidesXlCarousel} />
     <Carousel slides={slidesEmAlta} type={typeEmAlta} />
     <Carousel slides={slidesNoticias} type={typeNoticias} />
     <Footer />
    </div>
  )
}

export default Home