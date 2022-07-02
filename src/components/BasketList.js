import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const {order,showBusket} = props
  const totalPrice =order.reduce((sum,el)=>{
    return sum+ el.price.regularPrice*el.quantity
  },0)
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">
          Basket
        </li>
        {order.length? order.map(item=> {
          return (
            <BasketItem
              key={item.mainId}
              removeFromBasket={props.removeFromBasket}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              {...item}
            />)
        }):<li className="collection-item">Basket is empty</li>}
        <li className="collection-item active">
          Total cost: {totalPrice}<b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={showBusket}>close</i>
      </ul>
    </div>


  );
};

export default BasketList;