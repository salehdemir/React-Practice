import Avatar from "./avatar";
import Descrip from "./description";

function Cart(prop){
    return(
    <div className="cart">
       
           <Avatar image={prop.image} />
      <Descrip name={prop.name} desc={prop.desc} />
    </div>
    );
}

export default Cart