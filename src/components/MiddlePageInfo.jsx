import leafImg from "../images/leafImg.jpg";
import handsImg from "../images/handsImg.jpg";
import questionMarkImg from "../images/questionMarkImg.png";
import Footer from './Footer'

const MiddlePageInfo = () => {
  return (
    <div className="middlePageDiv">
      <div className="infoDiv">
        <h2 className="infoHeader">
          Detergenti a Base Vegetale su misura per accrescere il vostro
          business.
        </h2>
        <p className="infoParagraph">
          In <strong className="name">Green Solutions</strong> usiamo detergenti a base vegetale
           riservando ai professionisti del settore e privati,
           non soddisfatti dei prodotti sul mercato,
           che hanno necessità di soluzioni in grado di essere personalizzate
           a partire dalle vostre esigenze
        </p>
      </div>
      <br />
      <div className="greenDiv">
        <img className="leafImg" src={leafImg} alt="" />
        <p className="greenPara">Detergenti naturali a base vegetale </p>
      </div>
      <div className="blackDiv">
        <img className="leafImg" src={handsImg} alt="" />
        <p className="blackPara">Creiamo prodotti personalizzati </p>
      </div>
      <div className="yellowDiv">
        <img className="leafImg" src={questionMarkImg} alt="" />
        <p className="yellowPara">Contattaci per ogni informazione</p>
      </div>
      
    </div>
  );
};

export default MiddlePageInfo;
