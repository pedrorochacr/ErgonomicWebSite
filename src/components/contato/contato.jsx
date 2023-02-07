import "./contato.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {AiTwotonePhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
export default function Contato(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dconc4q', 'template_rnsmb4p', form.current, 'SZOXdO_NlrMLcb89X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
    <>
    <div id="contato" className="contatoRoot" >
        <div className="formulario">
            <h4>Formulário para <span className="laranja">contato</span></h4>
            <form className="espacoFormulario" ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input type="text" name="from_name" />
            <label>E-mail</label>
            <input type="email" name="email" />
            <label>Telefone</label>
            <input type="text" name="teleFone" />
            <label>Mensagem</label>
            <textarea  name="message" />
            <span className="enviarDados">
                <input type="submit" value="Enviar" />
            </span>
            
            </form>
        </div>
        <div className="informacoesContato">
            <h4>Informações para <span className="laranja">contato</span></h4>
            <div className="dadosContato" >
                <AiTwotonePhone size={35}></AiTwotonePhone> 
                <p className="informacoesContatoItem" >+55 77 9189-4228</p>
            </div>
            <div className="dadosContato">
                <MdEmail size={35}></MdEmail>
                <p className="informacoesContatoItem" > contato@mfergonomia.com.br</p> 
            </div>
            <div className="dadosContato">
                <MdLocationOn size={35}></MdLocationOn>
                 <p className="informacoesContatoItem" >Rua Minas Gerais, 426, B. Brasil, Vitória da Conquista.</p>
            </div>
            
        </div>

    </div>
    </>)
}