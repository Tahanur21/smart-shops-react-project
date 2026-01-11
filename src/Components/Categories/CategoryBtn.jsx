import React from "react";
import { NavLink } from "react-router";

const CategoryBtn = ({ categories }) => {
  const { product_id, category, slug } = categories;
  return (
    <>
      <div className="w-full">
        <NavLink to={`/cards/${category}`}>
          <button className="w-full btn rounded-2xl hover:bg-[#9538E2] hover:text-white">
            {category}
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default CategoryBtn;
