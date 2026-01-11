/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import {useLoaderData, useParams } from "react-router";
import Card from "./Card";

const Cards = () => {
  const data = useLoaderData()
  const { id } = useParams();
  console.log(id)
  const [products, setProduct] = useState([]);
  useEffect(() => {
    if (id === 'all') {
      setProduct(data);
    }
    else if(id){
      const filterData = [...data].filter((items) => items.category === id);
      setProduct(filterData);
    }
    else {
      setProduct(data.slice(0, 6));
    }
  }, [id, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
      {products.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default Cards;
