import Style from "./PrimeiraInfo.module.css";
import imagem from './img/satelite.jpg'

function PrimeiraInfo(props)
{
    return(
        <div className={Style.PrimeiraInfo}>
            <h3>{props.inf}</h3>
            <span>{props.eu}</span>     
            <figure className={Style.Imagem}>
                <img src={imagem}></img>
            </figure>       
        </div>        
    );
}

export default PrimeiraInfo;