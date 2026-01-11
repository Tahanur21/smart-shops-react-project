import { NavLink } from "react-router";

const Card = ({ product }) => {
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
  return (
    <div className="
    card h-100 bg-base-100 shadow-sm p-3
    hover:scale-110 cursor-pointer
    transition
    duration-500
    ">
      <figure className="w-full">
        <img className="w-2/3 h-50 object-cover"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body gap-4">
        <h2 className="text-lg font-bold">{product_title}</h2>
       <p>price : ${price}</p>
        <div className="card-actions justify-start">
            <NavLink>
          <button className="
          btn text-[#9538E2] border 
          border-[#9538E2] 
          bg-transparent rounded-3xl 
          hover:bg-[#9538E2] hover:text-white">View Details</button>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
