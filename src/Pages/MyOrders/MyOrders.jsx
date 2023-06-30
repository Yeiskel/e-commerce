import { useContext } from "react"
import { Link } from "react-router-dom"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context/Context"

function MyOrders() {
  const {order} = useContext(ShoppingCartContext)

  return (
    <div>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      
      {order.map((order, index)=>{
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
          </Link>
        )
        
      })}
      
    </div>
  )
}

export default MyOrders