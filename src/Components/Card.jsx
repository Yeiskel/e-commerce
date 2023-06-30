import { useContext } from "react"
import { ShoppingCartContext } from "../Context/Context"

function Card({id, price, title, description,  images, category:{name}}) {
  const {count, setCount, openProductDetail, closeProductDetail, setProductToShow, cartProducts,setCartProducts, openCheckoutSideMenu} = useContext(ShoppingCartContext)
  const showProduct = (productDetail) =>{
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) =>{
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, productData])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id) =>{
    const isInCart = cartProducts.filter(product => product.id === id).length > 0

    if (isInCart){
      return(
      <button 
        className="absolute top-0 right-0 justify-center flex items-center  w-6 h-6 bg-black/80 rounded-full m-2 p-1 border border-slate-400" >
              {/* Check icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
      </button>
      )
    } else{
      return(
      <button 
        className="absolute top-0 right-0 justify-center flex items-center  w-6 h-6 bg-white/80 rounded-full m-2 p-1" 
        onClick={(event)=>{addProductsToCart(event,{id,price, title, description,  images, category:{name}})}}>
              {/* Plus Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

      </button>
      )
    }    
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={()=>{showProduct({price, title, description, images, category:{name}})}}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-medium">{name}</span>
            <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title}/>
            {renderIcon(id)}
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{title}</span>
            <span className="text-lg font-medium">{`$${price}`}</span>
        </p>
    </div>
  )
}

export default Card