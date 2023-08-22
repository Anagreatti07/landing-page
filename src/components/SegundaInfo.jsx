import Style from "./SegundaInfo.module.css";

function SegundaInfo(props)
{
    return(
        <section className={Style.SegundaInfo}>
            <h3>{props.inf}</h3>
        </section>
    );
}

export default SegundaInfo;