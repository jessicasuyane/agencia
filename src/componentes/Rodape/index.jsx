import Logo from '../../assets/logo.png';
import Face from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png';
import Google from '../../assets/google-plus.png';
import './style.css';

export default function Rodape(props){
    return(
        <footer className={props.ehTemaEscuro ? 'footer-escuro' : 'footer'}>
            <div>
                <img className="logo" src={Logo} alt="logo" />
            </div>
                <p className="paragrafo">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
                <div className="redes">
                    <img className="img-rede" src={Face} alt="face" />
                    <img className="img-rede" src={Twitter} alt="twitter" />
                    <img className="img-rede" src={Linkedin} alt="linkedin" />
                    <img className="img-rede" src={Dribble} alt="dribble" />
                    <img className="img-rede" src={Behance} alt="behance" />
                    <img className="img-rede" src={Google} alt="google" />
                </div>
                <p className="ultimo-p">Copyright 2022 nome do desenvolvedor</p>
        </footer>
    );
}