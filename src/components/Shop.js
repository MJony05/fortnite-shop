import { useState, useEffect} from "react";
import {API_URL, API_KEY} from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {toast} from "react-toastify";
export default function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [showBucket, setShowBucket] = useState(false)
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
    toast.success('Goods added to busket successfully')
  }
  const handleBucket = () => {
    setShowBucket(!showBucket)
  }
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el=>el.mainId!==itemId)
    setOrder(newOrder)
    toast.error('Deleted goods')
  }
  const incrementQuantity = (itemId) => {
    const newOrder = order.map(el=>{
      if(el.mainId===itemId){
        return {
          ...el,
          quantity: el.quantity+1
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }
  const decrementQuantity = (itemId) => {
    const newOrder = order.map(el=>{
      if(el.mainId===itemId){
        return {
          ...el,
          quantity: el.quantity>0?el.quantity-1:0
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }
  return (
    <div className={'container content'}>
      <Cart quantity={order.length} showBucket={handleBucket}/>
      {loading?(<Loader/>):<GoodList goods ={goods} addToBucket={addToBucket}/>}
      {showBucket && <BasketList order={order} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeFromBasket={removeFromBasket} showBusket={handleBucket}/>}
    </div>
  )
}