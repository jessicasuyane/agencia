
import './style.css';

export default function Card(props) {

    return(
      <div className={props.ehTemaEscuro ? 'card-escuro' : 'card-claro'} id="container-card">
      
        <div className="card">
        <p>JUNHO 2012 - 2016</p>
        <h4>Web Designer</h4>
        <p>Pied Piper StartUp.</p>
        <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
        </div>

        <div className="card" >
        <p>AGOSTO 2016 - 2019</p>
        <h4>Product Designer</h4>
        <p>E Corp.</p>
        <p>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra</p>
        </div>

        <div className="card">
        <p>FEVEREIRO 2019 - 2021</p>
        <h4>Digital Consulting</h4>
        <p>Arasaka Inc.</p>
        <p>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução</p>
        </div>
        
      </div>
      
    );
  }