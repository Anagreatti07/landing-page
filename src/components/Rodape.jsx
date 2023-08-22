import Style from "./Rodape.module.css";

function Rodape(props)
{
    return(       
       <>
        <div className={Style.Rodape}>
           <h3 className={Style.infos}> <br> 
           </br> <br></br>Administração Nacional Aeronáutica e Espacial Oficial da NASA: Brian Dunbar</h3> 
            <h3 className={Style.infos}>Entre em contato com a NASA </h3>
        </div>
       </>            
    );
}
export default Rodape;