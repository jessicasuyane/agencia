import React from "react";
import './style.css';

export default function SecaoExperienciaTrabalho(props){
    return(
        <section className={props.ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}  id="secaoex">
            <div
            className={props.ehTemaEscuro ? 'texto-claro' : 'texto-escuro'} id="container-texto">
            
                <h3 className="textoEscuro">Experiências De Trabalho</h3>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
            Sites e Marketing Digital, nos empenhamos diariamente para entregar
            resultados que tragam impacto aos nossos clientes.</p>
            </div>
        </section>
    );
}