import Style from "./QuartaInfo.module.css";

function QuartaInfo(props)
{
    return(
        <div className={Style.QuartaInfo}>
            <h3>{props.inf}</h3>
            <span>{props.eu}</span>     
        </div>        
    );
}

export default QuartaInfo;