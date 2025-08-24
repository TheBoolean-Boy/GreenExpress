import { useState } from "react"
import About from "../components/About"
import Category from "../components/Category"
import Hero from "../components/Hero"


const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <About />
      <Category category={category} setCategory ={setCategory} />
    </div>
  )
}

export default Home
