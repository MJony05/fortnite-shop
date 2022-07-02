export default function (props) {
  const {mainId,displayName,price, quantity} = props
  return (
    <li className="collection-item rows">
      {displayName} x{quantity} = {price.regularPrice*quantity}$
      <span className="secondary-content">
        <a className="waves-effect waves-light btn-small btnq"  onClick={()=>props.decrementQuantity(mainId)}>
          <i className="material-icons left">exposure_minus_1</i>remove
        </a>
        <a className="waves-effect waves-light btn-small btnq" style={{margin:'0 10px'}} onClick={()=>props.incrementQuantity(mainId)}>
          <i className="material-icons right">exposure_plus_1</i>add
        </a>
        <a className="waves-effect waves-light btn-small btnq" onClick={()=>props.removeFromBasket(mainId)}>
          <i className="material-icons basket-delete" >delete_forever</i>
        </a>

      </span>
    </li>
  )
}