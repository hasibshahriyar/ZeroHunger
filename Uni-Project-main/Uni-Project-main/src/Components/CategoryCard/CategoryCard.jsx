import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/available/${category?.category}`}>
      <div className="bg-slate-100 lg:w-[400px] md:w-[350px] p-8  rounded-lg cursor-pointer">
        <img
          className=" w-full lg:h-[300px] md:h-[220px] rounded-lg object-cover"
          src={category?.category_image}
          alt={`${category?.category} food category`}
        />
        <h2 className="font-bold uppercase text-xl  mt-6">
          {category?.category}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
