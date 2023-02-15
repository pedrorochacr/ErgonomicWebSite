
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import fundoHomeOffice from "../../assets/fundoHomeOffice.jpeg"
import fundoIndustria from "../../assets/fundoIndustria.jpeg"
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
              <img src={fundoHomeOffice}></img>
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
            <img alt="designed by Freepik" src={fundoIndustria}></img>
              <section className="description">
                  <h4>Ergonomia na<span className="orange">indústria</span></h4>
                  <p className='description02'>
                       Identificamos possíveis riscos <span className="orange">ergonômicos</span> em sua empresa. Promovemos soluções <span className="orange">rápidas e práticas</span> para aumentar
                       a produtividade dos colaboradores.
                  </p>
              </section>
              <div className="fundo"></div>
              
          </SwiperSlide>
          <SwiperSlide>
            <img alt="designed by Freepik" src={fundo3}></img>
              <section className="description">
                  <h4>Transporte e levantamento <br></br><span className="orange">manual</span>  de cargas.</h4>
                  <p className='description02'>
                  Promova <span className="orange">segurança</span> e saúde para seus colaboradores durante o <span className="orange">transporte manual de cargas</span>. 
                 Aumente a <span className="orange">produtividade</span> e reduza os riscos de lesões e afastamentos.
                  </p>
              </section>
              <div className="fundo"></div>
              
          </SwiperSlide>
          
        
        </Swiper>
      </div>

    </>



  );
}


