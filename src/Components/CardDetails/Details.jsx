import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { addValue } from "../Utilities";

const Details = ({product}) => {
    const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};

 // set in localStorage
//  const [collectData,setData] = useState([]);
 const handleData = (cart)=>{
    addValue(cart);
 }
 const [isActive,setActive] = useState(true);
 const handleDisable = ()=>{
    setActive(!false);
 }


    return (
        <div className="flex flex-row gap-2 justify-center items-center bg-base-200 shadow-2xl rounded-4xl p-6">
            {/* image */}
            <figure className="flex-1">
                <img className="object-cover" src={product_image} alt={product_title} />
            </figure>
            <div className="flex flex-col gap-4 flex-1">
                {/* title */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p>Price : ${price}</p>
                    <p className="badge badge-soft badge-success outline rounded-2xl">{
                    availability === true ? "In Stock" : "Out of Stock"
                    }</p>
                    <p className="text-sm font-light">{description}</p>
                </div>
                {/* specification */}
                <div className="space-y-2">
                    <h3 className="font-semibold">Specification:</h3>
                    <ul className="ml-6">
                    {
                        specification.map((a,idx)=>
                            <li className="list-decimal text-sm font-light" key={idx}>{a}</li>
                        )
                    }
                    </ul>
                </div>
                {/* rating */}
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <h3>Rating</h3>
                        <span className="text-sm text-amber-200">
                            ⭐
                        </span>
                    </div>
                    <div className="flex items-center  gap-4">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                        <div className="bg-stone-200 rounded-2xl px-3 py-2">
                            <p className="text-sm">{rating}</p>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className="flex gap-2">
                    <button 
                    onClick={()=> handleData(product)}
                    className="flex gap-3 btn hover:bg-[#9538E2] hover:text-white text-[#9538E2] border-2 border-[#9538E2] rounded-4xl">
                        <span>Add To Card</span> <ShoppingCart size={24} />
                    </button>
                    <button
                    disabled={isActive}
                    onClick={()=>handleDisable} className="btn shadow p-2 rounded-full text-red-400">
                        <Heart size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;