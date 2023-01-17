
import './style.css';

export default function SecaoBanner(props){
    return(
        <section id="secaoBanner">
            <div id="imagemFundo"  className={props.ehTemaEscuro ? 'imgFundo-escuro' : 'imgFundo-claro'}></div>
            <div className="texto">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>
                Agência de Branding <span>e design digital</span>
                </h2>
            </div>
        </section>
    );
}