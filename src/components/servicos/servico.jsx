import "./servico.css"
import ServicoItem from "./servicoItem/servicoItem";
import logoMala from '../../assets/icons/malaIcone.png'
import logoAnalise from '../../assets/icons/analiseIcone.png'
import logoLapis from '../../assets/icons/lapisIcone.png'
import logoPessoa from '../../assets/icons/pessoaIcone.png'
import logoTreinamento from '../../assets/icons/treinamentoIcone.png'



export default function Servico() {
    return (
        <>
            <div id="servico" className="ServicosRoot">
                <div className="TituloServicos" >
                    <p>Serviços</p>
                    <hr className="linha"></hr>
                </div>

                <div className="descricaoServicos" >
                    <ServicoItem logo={logoMala} titulo="Análise Ergonômica do Trabalho (AET)"
                        descricao="Metodologia que busca avaliar e melhorar
                 as condições de trabalho para promover a saúde, segurança e eficiência dos trabalhadores. 
                 Ela envolve a identificação e avaliação de riscos ergonômicos e propõe soluções para minimizar esses riscos."></ServicoItem>
                    <ServicoItem logo={logoAnalise} titulo="Análise Ergonômica Preliminar (AEP)"
                        descricao="Técnica usada para avaliar as condições de trabalho e identificar possíveis riscos ergonômicos. É realizada antes ou no início de uma atividade para identificar problemas potenciais e 
                tomar medidas preventivas para evitar lesões e melhorar a 
                segurança e eficiência no trabalho."
                    ></ServicoItem>

                </div>
                <div className="descricaoServicos">
                    <ServicoItem logo={logoPessoa} titulo="Blitz Postural" descricao="É uma forma de análise 
                    ergonômica do trabalho com ênfase na postura, geralmente realizada por meio de uma inspeção visual, onde é possível identificar rapidamente se os trabalhadores estão sentados, em pé ou executando tarefas."></ServicoItem>
                    <ServicoItem logo={logoLapis} titulo="Consultoria em Ergonomia"
                    descricao="Processo de fornecer orientações, recomendações e soluções para melhorar as condições de trabalho e promover a saúde, segurança e eficiência dos trabalhadores.
                     Envolve a análise ergonômica do trabalho, proporcionando soluções e adaptações ao ambiente de trabalho."
                    ></ServicoItem>
                </div>
                <div className="descricaoServicos">
                    <ServicoItem logo={logoTreinamento} titulo="Treinamentos e Palestras" 
                    descricao="Atividades educativas com objetivo de  fornecer informações e orientações para os trabalhadores sobre como prevenir e lidar com problemas relacionados à ergonomia no ambiente de trabalho. 
                    Podem incluir informações sobre postura, 
                    movimentos repetitivos, esforço físico, entre outros."></ServicoItem>
                </div>
            </div>


        </>

    );
}


