import React from 'react'
import Item from '../Item'


function ItemList(items) {

  return (
    <div class="container mt-4">
      <div class="row">
        {items.items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemList