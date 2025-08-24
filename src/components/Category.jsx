

import React from 'react'
import Card from '../utils/Card'

const Category = () => {
  const tree = {
    id: 2,
    name: "Ficus Bonsai",
    category: "Bonsai",
    price: 300,
    image: "https://images.unsplash.com/photo-1667305202885-847a0bfa9d7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Evergreen bonsai known for its resilience and lush green canopy."
  }
  return (
    <div>
      <Card name={tree.name} category={tree.category} price={tree.price} image={tree.image} description={tree.description} />
    </div>
  )
}

export default Category
