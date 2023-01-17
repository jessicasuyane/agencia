import { useState } from "react";
import Card from "./componentes/Card";
import Rodape from "./componentes/Rodape";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import './App.css';

export default function App() {
    
  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
      <SecaoExperienciaTrabalho  ehTemaEscuro={ehTemaEscuro} />
      <Card  ehTemaEscuro={ehTemaEscuro} />
      <Rodape  ehTemaEscuro={ehTemaEscuro} />
    </div>
  );
}

 
