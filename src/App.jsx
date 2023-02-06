import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import Inicio from './components/inicio/inicio';
import Servico from './components/servicos/servico';
import Sobre from './components/sobre/sobre';
import Contato from './components/contato/contato';
import Whatsapp from './components/floatWpp/floatWpp';
import Footer from './components/footer/footer';

function App() {
  return (
      <>
       
        <Menu></Menu>
        <Whatsapp></Whatsapp>
        <Inicio></Inicio>
        <Sobre></Sobre>
        <Servico></Servico>
        <Contato></Contato>
        <Footer></Footer>
      </>
      
  );
}

export default App;
