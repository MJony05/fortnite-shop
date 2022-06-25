import { useState, useEffect} from "react";
import {API_URL, API_KEY} from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
export default function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  useEffect(()=>{
    fetch(API_URL, {
    headers: {
      Authorization:API_KEY
    }
  }).then(response=>response.json()).then((data)=> {
    data.shop && setGoods(data.shop)
      setLoading(false)
    })
  })
  const addToBucket = (item) => {

    const itemIndex =order.findIndex(orderItem => orderItem.mainId===item.mainId)
console.log(itemIndex)
    if(itemIndex<0){
      const newItem = {
        ...item,
        quantity:1
      }
      setOrder([...order,newItem])
    }else{
      const newOrder = order.map((orderItem,index)=>{
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity+1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    console.log(order)
  }
  return (
    <div className={'container content'}>
      <Cart quantity={order.length}/>
      {loading?(<Loader/>):<GoodList goods ={goods} addToBucket={addToBucket}/>}
    </div>
  )
}