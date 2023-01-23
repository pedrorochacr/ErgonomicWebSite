import logo from "../../assets/logo.png"
import "./menu.css"
export default function Menu() {
  return (
    <nav>
        <img src={logo}></img>
        <div>
            <a href='#'>Sobre</a>
            <a href='#servico' >Serviços</a>
            <a>Fale conosco</a>
        </div>
        
    </nav>
  );
}


