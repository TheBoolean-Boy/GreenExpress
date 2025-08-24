

import React from 'react'
import Card from '../utils/Card'
import Button from '../utils/Button'
import { plants } from '../assets/data'

const Category = ({category, setCategory}) => {
  const item = {
    id: 2,
    name: "Ficus Bonsai",
    category: "Bonsai",
    price: 300,
    image: "https://images.unsplash.com/photo-1667305202885-847a0bfa9d7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Evergreen bonsai known for its resilience and lush green canopy."
  }
  return (
    <div>
      <div className=' flex gap-10 justify-center mb-10'>
        <Button buttonText={"All"} onClick = {() => setCategory("All")} />
        <Button buttonText={"Bonsai"} onClick = {() => setCategory("Bonsai")} />
        <Button buttonText={"Thorns"} onClick = {() => setCategory("Thorns")} />
        <Button buttonText={"Orchids"}  onClick = {() => setCategory("Orchids")}/>
        <Button buttonText={"Succulents"} onClick = {() => setCategory("Succulents")} />
        <Button buttonText={"Palms"} onClick = {() => setCategory("Palms")} />
        <Button buttonText={"Ferns"} onClick = {() => setCategory("Ferns")} />
      </div>

      <div className=' grid grid-cols-4 gap-y-10 mb-10 w-[100%] '>
        {
          plants.map((item, index) => {
            if(category === "All" || item.category === category){
              console.log(category)
              return (
              <Card key={index} id={item.id} name={item.name} category={item.category} price={item.price} image={item.image} description={item.description} />
            )
            }
          })
        }

      </div>
    </div>
  )
}

export default Category
