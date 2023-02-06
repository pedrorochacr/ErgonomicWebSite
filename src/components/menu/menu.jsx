import logo from "../../assets/logo.png"
import "./menu.css"
import { FiAlignJustify } from 'react-icons/fi'

import { useState } from "react"

function renderizaLinksResponsivos(menuIconVisible){
 
  if(menuIconVisible){
    
    return <>
       
       <a href='#root'>Início</a>
        <a href='#sobre'>Sobre nós</a>
        <a href='#servico' >Serviços</a>
        <a href="#contato" >Entre em Contato</a>
    </>
  }
}
export default function Menu() {
  
  const [menuIconVisible, setMenuIconVisible] = useState(false)
  const [hamburguerClickedClass, sethamburguerClickedClass] = useState("hamburguerUnclicked")
  
  const updateMenu =() =>{
      if(menuIconVisible){
          sethamburguerClickedClass("hamburguerUnclicked")
      }
      else{
        sethamburguerClickedClass("hamburguerButtonClicked")
      }
      setMenuIconVisible(!menuIconVisible)
     

  }
  
    
  
  return (
    <>
    <header>
    <nav>
        <a href="#root">
          <img src={logo}></img>
        </a>
        <div className="linksDesktop">
            <a href='#root'>Início</a>
            <a href='#sobre'>Sobre nós</a>
            <a href='#servico' >Serviços</a>
            <span className="contato">
                <a href="#contato" >Entre em Contato</a>
            </span>
            
        </div>
        
        
        <div className="hamburguerButton">
          <button  onClick={updateMenu} >
              <FiAlignJustify size={45} ></FiAlignJustify>
          </button>     
        </div>       
    </nav>
    <div className={hamburguerClickedClass}>
        {renderizaLinksResponsivos(menuIconVisible)}  
    </div>
    </header>
      
    
    </>
    
  );
}


