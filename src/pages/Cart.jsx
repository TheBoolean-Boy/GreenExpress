import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { plants } from "../assets/data";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";


const Cart = () => {
  const { removeFromCart, getTotalAmount, cartItems } = useContext(StoreContext);
  return (
    <div className="max-w-[1400px] px-10">
  <table className="table-auto w-full border-collapse border border-gray-300 text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="border border-gray-300 px-4 py-2 w-[200px]">Species</th>
        <th className="border border-gray-300 px-4 py-2 w-[100px]">Price</th>
        <th className="border border-gray-300 px-4 py-2 w-[100px]">Quantity</th>
        <th className="border border-gray-300 px-4 py-2 w-[120px]">Item Total</th>
        <th className="border border-gray-300 px-4 py-2 w-[120px]">Remove Quantity</th>
      </tr>
    </thead>
    <tbody>
      {plants.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 truncate max-w-[200px]">
                {item.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${item.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {cartItems[item.id]}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${item.price * cartItems[item.id]}
              </td>
              <td className=" flex justify-center px-4 py-2">
                <IoIosRemoveCircle className=" cursor-pointer text-xl hover:scale-105 transition:transform duration-300"
                onClick={ () => removeFromCart(item.id)} />
              </td>
              
            </tr>
          );
        }
        return null;
      })}
    </tbody>
  </table>

  <div className=" flex flex-col -mt-20">
  <div className=" basis-[50%] px-1 mt-30 ">
    <div className=" flex justify-between items-center mb-2">
      <h1 className="text-2xl font-semibold">SubTotal</h1>
      <p className=" font-semibold">${getTotalAmount()}</p>
    </div>
    <div className=" flex justify-between items-center mb-2">
      <h1 className="  text-xl">Delivery</h1>
      <p className="font-semibold">${getTotalAmount()? 25: getTotalAmount() }</p>
    </div>
    <hr />
    <div className=" flex justify-between items-center mt-4">
      <h1 className=" text-2xl font-bold">Total</h1>
      <p className=" font-bold">${getTotalAmount() ? getTotalAmount() + 25 : 0}</p>
    </div>
  </div>

  <div className=" basis-[50%] mt-10 text-end ">
    <Link to={"/order"}>

    <Button buttonText={"Payment"}/>
    </Link>
  </div>
  </div>
</div>

  )
}

export default Cart
