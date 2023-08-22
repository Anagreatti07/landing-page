import Style from "./TerceiraInfo.module.css";
import imagem from './img/planeta.jpg';

function TerceiraInfo(props)
{
    return(
        <div className={Style.TerceiraInfo}>
            <h2 className={Style.TerceiraInfotitulo}>Novo planeta que pode ser habitável é encontrado pela Nasa:</h2>
            <h3 className={Style.TerceiraInfo}>{props.inf}</h3>
            <span>{props.eu}</span>     
            <figure className={Style.Imagem}>
                <img src={imagem}></img>
            </figure>      
        </div>        
    );
}

export default TerceiraInfo;