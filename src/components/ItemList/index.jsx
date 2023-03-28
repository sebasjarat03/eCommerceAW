import React from 'react'
import Item from '../Item'


function ItemList(students) {
  return (
    <div class="container mt-4">
      <div class="row">
        {students.items.map(item => (
          <Item
            key={item.id}
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