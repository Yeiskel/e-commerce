import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../Context/Context"
import OrderCard from "./OrderCard"
import { totalPrice } from "../utils/totalPrice"

function CheckOutSideMenu() {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setSearchByTitle} = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date: "01.02.23",
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
    }

  return (
    <aside 
    className={`${isCheckoutSideMenuOpen ? "flex": "hidden"} w-[360px]  flex-col fixed bg-white right-0 top-[68px] border border-black rounded h-[calc(100vh-68px)]`}>
        <div className="flex justify-between item-center p-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <button onClick={()=> {closeCheckoutSideMenu()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div className="px-6 overflow-y-auto flex-1">
            {cartProducts.map(product=>(
            <OrderCard
                key={product.id}
                handleDelete = {handleDelete} 
                {...product}/>
        ))}
        </div>
        <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
                <span className="font-light">Total:</span>
                <span className="font-medium text-2xl">{totalPrice(cartProducts)}$</span>
            </p>
            <Link to="/my-orders/last">
                <button 
                className="w-full bg-black py-3 text-white rounded-lg"
                onClick={()=>{handleCheckout()}}>Checkout</button>
            </Link>
            
        </div>
    </aside>
  )
}

export default CheckOutSideMenu