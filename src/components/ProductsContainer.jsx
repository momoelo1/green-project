import { Button, Container } from "@mui/material";

const ProductsContainer = () => {
  return (
    <div className="productsContainer">
      <div className="rotativaDiv">
        <h2 className="rotativaHeader">Rotativa Commerciale</h2>
        <div className="rotativaParaDiv">
          <p className="rotativaPara">
            Additivi di Bagnatura,
            <br /> Ausiliari per la Stampa,
            <br /> Ausiliari di Lavaggio,
            <br /> Ausiliari degli Additivi,
            <br /> Silicone,
            <br /> Solventi di Lavaggio,
            <br /> Ausiliari per Lastre,
            <br /> Specialita Chimiche
          </p>
        </div>
      </div>
      <div className="macchinaDiv">
        <h2 className="macchinaHeader">Macchina a Foglio</h2>
        <div className="macchinaParaDiv">
          <p className="macchinaPara">
            Additivi di Bagnatura,
            <br /> Ausiliari di Stampa,
            <br /> Ausuliari di Lavaggio,
            <br /> Ausiliari degli Additivi,
            <br /> Solventi di Lavaggio,
            <br /> Ausiliari per Lastre,
            <br /> Specialità Chimiche
          </p>
        </div>
      </div>
      <div className="giornaleDiv">
        <h2 className="giornaleHeader">Rotativa per Giornale</h2>
        <div className="giornaleParaDiv">
          <p className="giornalePara">
            Additivi di Bagnatura,
            <br /> Ausiliari per Lastre,
            <br /> Ausiliari di Lavaggio,
            <br /> Ausiliari degli Additivi,
            <br /> Solventi di Lavaggio,
            <br /> Ausiliari per la Stampa
          </p>
        </div>
      </div>
      <div className="moduloDiv">
        <h2 className="moduloHeader">Modulo Continuo</h2>
        <div className="moduloParaDiv">
          <p className="moduloPara">
            Additivi di Bagnatura,
            <br /> Ausiliari per la Stampa,
            <br /> Solventi di Lavaggio,
            <br /> Ausiliari degli Additivi,
            <br /> Ausiliari per Lastre,
            <br /> Ausiliari di Lavaggio
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
