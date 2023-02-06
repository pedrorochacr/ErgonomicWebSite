import "./servicoItem.css"


export default function ServicoItem({logo, titulo, descricao}) {
  return (
        <>
            <div className="ServicoItem">
                <img src={logo}></img>
                <h4 className="TituloServicoItem">{titulo} </h4>
                <span>{descricao}</span>
                <a href="#contato" >Orçamento</a>
            </div>
        </>
        
  );
}


