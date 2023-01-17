
import './style.css';
import Logo from '../../assets/logo.png'
import iconeSol from '../../assets/sun.png'
import iconeLua from '../../assets/moon.png'

export default function Topo(props){
    return(
        <header className={props.ehTemaEscuro ? "modo-escuro" : "header"}>
            
                <img className="img-logo" src={Logo} alt="logo"/>
              
                <button onClick={props.alterarTema}      className={props.ehTemaEscuro ? "botao-escuro" : "button"}>
                    <img className="iconesBtn" src={props.ehTemaEscuro ? iconeSol : iconeLua } alt="icone"/>
                </button>
               
        </header>
    );
}

