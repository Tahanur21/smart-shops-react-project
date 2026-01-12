import { useEffect, useState } from "react";
import { getValue, removeValue } from "../Utilities";
import Cart from "../Cart/Cart";

const Dashboard = () => {

    // usingParams for price
    const [active,setAcivte] = useState([
        {
            isActive : 'active',
            status : true,
        }
    ]);
    const handleActive = (status)=>{
        if(status === 'active'){
            setAcivte(true);
        }
        else if(status === 'deActive'){
            setAcivte(false)
        }
    }
    const [collectData,setData] = useState([]);
    useEffect(()=>{
        const data = getValue();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(data)
    },[])
    const totalPrice = collectData.reduce(
  (sum, item) => sum + (item.price || 0),0);
    // geting data from localstorage
    const handleRemove = (cart)=>{
    removeValue(cart);
     const data = getValue();
        setData(data);
  }
  const handleSort = ()=>{
    const sorted = [...collectData].sort((a,b)=> b.price - a.price);
    setData(sorted);
  }
  
  return (
    <>
    <div className="bg-stone-100">

      {/* text */}
      <div className="bg-[#9538E2] text-white text-center p-6 py-20 space-y-3">
        <h1 className="text-3xl font-semiboldd">Product Details</h1>
        <p className="font-light text-sm">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center items-center gap-2">
            <button onClick={()=>handleActive('active')}
             className={
                active ? 'btn bg-white' : "btn bg-[#9538E2]"
             }>Cart</button>
            <button onClick={()=>handleActive('deActive')}
             className={
                active ? 'btn bg-[#9538E2]' : "btn bg-white"
             }>Wishlist</button>
        </div>
      </div>
      {/* sort and purchase button */}
      <div className="flex flex-row lg:gap-80 justify-around items-center mt-10">
        <h1 className="text-2xl font-semibold">{active ? 'Cart' : 'Wishlist'}</h1>
        <div className="flex items-center gap-10">
            <p>Total Cost : ${totalPrice}</p>
            <div className="flex gap-3 items-center">
                <button
                onClick={()=>handleSort()}
                className="btn bg-white border rounded-4xl text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white">Sort by Price</button>
                <button
                onClick={()=>handleRemove(collectData)}
                className="btn bg-[#9538E2] rounded-4xl hover:text-white">Purchase</button>
            </div>
        </div>
      </div>
      {/* showing cart and wishlist */}
      <div className="space-y-4 pt-10 pb-40 px-10">
             {
                collectData.map(item=>
                    <Cart
                    handleRemove={handleRemove}
                    key={item.product_id}
                    item={item}
                    />
                )
             }
      </div>
    </div>
    </>
  );
};

export default Dashboard;
