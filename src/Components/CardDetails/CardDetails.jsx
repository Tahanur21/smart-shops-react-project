import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "./Details";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filterData = data.filter(
      (items) => items.product_id === parseInt(id)
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(filterData);
  }, [data, id]);
  return (
    <>
    <div className="bg-[#9538E2] text-white text-center p-6 pb-40 space-y-3">
      <h1 className="text-3xl font-semiboldd">Product Details</h1>
      <p className="font-light text-sm">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
    <div className="max-w-6xl mx-auto -mt-30 mb-10">
        {
                products.map(product=>
                    <Details
                    key={product.product_id}
                    product={product}
                    />
                )
            }
    </div>
    </>
  );
};

export default CardDetails;
