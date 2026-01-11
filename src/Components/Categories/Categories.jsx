import { NavLink } from "react-router";
import CategoryBtn from "./CategoryBtn";


const Categories = ({ data }) => {


  return (
    <div
      className="flex flex-row flex-wrap lg:flex-col 
            items-center justify-center 
            lg:items-baseline gap-5
            bg-base-100 shadow-sm p-5 rounded-2xl
            "
    >
     <div className="w-full">
          <NavLink to={'/cards/all'}>
            <button className="w-full btn rounded-2xl hover:bg-[#9538E2] hover:text-white">
              All Products
            </button>
          </NavLink>
        </div>
      {data.map((categories) => (
        <CategoryBtn key={categories.product_id} categories={categories} />
      ))}
      <div className="w-full">
        <NavLink to={"/errorHandle"}>
          <button className="w-full btn rounded-2xl hover:bg-[#9538E2] hover:text-white">
            Smart Watch
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
