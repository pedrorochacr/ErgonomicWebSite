
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import fundo2 from "../../assets/6b7666ab_1.png"
import fundo3 from "../../assets/fundo3.png"
import fundo1 from "../../assets/fundoEmpresa.png"
import "./inicio.css"
export default function Inicio() {
  return (
    <>
      <div className="root" id='inicio'>
        
              
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          
         
          modules={[Autoplay, Navigation]}
          
        >
          <SwiperSlide>   
              <img src={fundo1}></img>
              <section className="description">
                  <h4>A importância da <br></br> <span className='orange'>Ergonomia</span> para sua empresa</h4>
                  <p className='description02'>
                  Garanta para a sua empresa <span className='orange'>conforto</span>, <span className='orange'>prevenção</span> e <span className='orange'>saúde</span>.
                  Cuide de quem cuida <br></br>dos seus <span className='orange'>clientes</span>
                  </p>
              </section>
              <div className="fundo"></div>
          </SwiperSlide>
          <SwiperSlide>
              <img src={fundo2}></img>
              <section className="description">
                  <h4>Consultoria em <br></br> Home Office</h4>
                  <p className='description02'>
                  Oferecemos avaliações <span className="orange">detalhadas</span> do espaço de trabalho,
                  recomendações de <span className="orange">equipamentos</span> e ajustes de <span className="orange">ergonomia</span>.
                  </p>
              </section>
              <div className="fundo"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="designed by Freepik" src={fundo3}></img>
              <section className="description">
                  <h4>Serviços para <br></br> Indústria</h4>
                  <p className='description02'>
                    Entendemos a importância da <span className="orange">ergonomia</span> 
                     no ambiente de trabalho <span className="orange">industrial</span> e trabalhamos 
                     para maximizar a <span className="orange">segurança, eficiência e conforto</span> dos funcionários.
                  </p>
              </section>
              <div className="fundo"></div>
              
          </SwiperSlide>
        
        </Swiper>
      </div>

    </>



  );
}


