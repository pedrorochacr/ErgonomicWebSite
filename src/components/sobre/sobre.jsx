import "./sobre.css"
import fotoFundadora from "../../assets/perfilMoane.png"
import SobreItem from "./sobreItem/sobreItem";
import arcoIcone from "../../assets/icons/arcoIcone.png"
import visaoIcone from "../../assets/icons/visaoIcone.png"
import valoresIcone from "../../assets/icons/valoresIcone.png"
import profissionaisIcone from "../../assets/icons/profissionaisIcone.png"
import agilidadeIcone from "../../assets/icons/oi.png"
import atendimentoIcone from "../../assets/icons/atendimentoIcone.png"
import fundoNossaProposta from "../../assets/NossaPropostaFundo.png"
export default function Sobre() {
    return (
        <>
            <div className="sobreRoot">
                <section id="sobre" className="sobreTitulo">
                    <p>A Empresa</p>
                    <hr></hr>
                </section>
                <div className="espacoFundadora">
                    <section className="fotoFundadora">
                        <img src={fotoFundadora} alt="Foto da Fundadora"></img>
                    </section>
                    <section className="sobreFundadora">
                        <h4>Fundadora</h4>
                        <p>Moane Ferreira, fundadora da empresa, possui uma paixão e compromisso inabaláveis pela ergonomia.
                            Moane é reconhecida como uma líder apaixonada e dedicada em garantir a saúde e bem-estar dos trabalhadores.</p>
                    </section>
                </div>
                <div className="sobreItens">
                    <SobreItem titulo="Missao" icone={arcoIcone} descricao="Nosso objetivo é garantir soluções que assegurem a saúde do seu colaborador, 
                aumentando os resultados positivos para você e sua equipe. " ></SobreItem>
                    <SobreItem titulo="Visão" icone={visaoIcone} descricao="Ser referência em Ergonomia e Fisioterapia do Trabalho, desenvolvendo e implantando soluções no trabalho através de Laudos e Gestão, 
                Programas de Qualidade de vida com Treinamentos, Eventos, SIPAT, e campanhas de saúde." ></SobreItem>
                    <SobreItem titulo="Valores" icone={valoresIcone} descricao="Ética, Atitude, Determinação, Inovação, Disponibilidade, Proatividade, Comprometimento, Foco , Sede de conhecimento." ></SobreItem>
                </div>
                <div className="proposta">
                    <h4>Nossa Proposta</h4>
                    <p>Fundada em 2017, possuimos experiência em diversos segmentos. Elaboramos Análise Ergonômica Preliminar (AEP),
                        Análise Ergonômica do Trabalho (AET), prestamos serviços de Consultoria Ergonômica e em Home Office,
                        realizamos palestras e treinamentos sobre NR17 e saúde do trabalhador.</p>
                    <img src={fundoNossaProposta} alt="Nossa Proposta"></img>
                </div>
                <div className="complementoProposta" >
                    <section>
                        <img src={agilidadeIcone}></img>
                        <p>Agilidade na <br></br>entrega</p>

                    </section>
                    <hr></hr>
                    <section>
                        <img src={profissionaisIcone}></img>
                        <p>Profissionais <br></br> habilitados</p>
                    </section>
                    <hr></hr>
                    <section className="atendimentoPersonalizado">
                        <img src={atendimentoIcone}></img>
                        <p >Atendimento<br></br>personalizado</p>
                    </section>

                </div>
               
            </div>

        </>

    );
}


