import React, {useState} from "react";

function Item({ name, category }) {
  
const [itemClass,setClassName] = useState("");
const [cartStatus, setCartStatus] = useState('add to cart')
const handleInCart = () => 
{
 setClassName(itemClass ===  "" ? 'in-cart' : "")
}
const handleCartStat = () => 
{
  setCartStatus(cartStatus === "add to cart" ? "remove from cart" : "add to cart" )
  console.log('click')

}
const handleClick = () => {
  handleInCart();
  handleCartStat();
};
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartStatus}</button>
    </li>
  );
}

export default Item;
