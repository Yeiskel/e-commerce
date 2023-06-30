import { useContext } from "react";
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context/Context";
function Home(){
    const {setSearchByTitle, filteredItems} = useContext(ShoppingCartContext)
    
    const renderView = ()=>{
      if (filteredItems?.length > 0){
          return(
            filteredItems?.map((item)=>(
                    <Card key={item.id} {...item}/>
  
                ))
          )
        } else {
          return (
            <p>We don't have anything</p>
          )
        }
      
    }

    return(
      <>
        <div className="flex w-80 items-center justify-center relative mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product"
          onChange={(event)=>{
            setSearchByTitle(event.target.value)
          }}
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {renderView()}
        </div>
        <ProductDetail/>
      </>
    )
}

export default Home