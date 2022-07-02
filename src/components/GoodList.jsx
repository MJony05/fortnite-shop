import React from 'react';
import GoodItem from "./GoodItem";
function GoodList({goods = []}) {
  if (!goods.length) return <h1>Nothing found</h1>
  return <div className="goods">
    {goods.map((item)=> {
      return <GoodItem key={item.mainId} {...item}/>
    })}
  </div>
}
export default GoodList;