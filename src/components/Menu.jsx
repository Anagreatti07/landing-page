import Style from "./Menu.module.css";

function Menu(props)
{
    return(       
       <>
        <div className={Style.logo}>
            <img src={props.logo} alt="" />
        </div>
       </>            
    );
}
export default Menu;