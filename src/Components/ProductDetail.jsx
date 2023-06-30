import { useContext } from "react"
import { ShoppingCartContext } from "../Context/Context"
function ProductDetail() {
    const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

  return (
    <aside 
    className={`${isProductDetailOpen ? "flex": "hidden"} w-[360px]  flex-col fixed bg-white right-0 top-[68px] border border-black rounded h-[calc(100vh-68px)]`}>
        <div className="flex justify-between item-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <button onClick={()=> {closeProductDetail()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <figure className="px-6">
            <img className="w-full h-full rounded-lg" src={productToShow.images?.[0]} alt={productToShow.title} />
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">{productToShow.price}$</span>
            <span className="font-medium text-md">{productToShow.title}</span>
            <span className="font-light text-sm">{productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail