import "./sobreItem.css"


export default function SobreItem({titulo, descricao, icone}) {
  return (
        <>
            <div className="complementoSobre">
                <h4>{titulo}</h4>
                <img src={icone}></img>
                <span>{descricao}</span>
            </div>
        </>
        
  );
}


