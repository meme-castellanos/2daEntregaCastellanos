import React from 'react'
import Item from '../item/Item'


const ItemList = ({items}) => {

  return (
      <div className="row d-flex  justify-content-around" style={{ backgroundColor: "#eee" }}>
        {items.map (item => 
          <Item key={item.id} {...item}/>
        )}
      </div>
  );
}

export default ItemList
