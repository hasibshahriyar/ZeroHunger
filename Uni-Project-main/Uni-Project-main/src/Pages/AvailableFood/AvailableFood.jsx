import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import { FaLocationDot } from "react-icons/fa6";
import FoodCategory from "../FoodCategory/FoodCategory";

const AvailableFood = () => {
  return (
    <Container>
      <div className="my-24">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-12  text-blue-950 text-center">
          View Donatable Food Categories
        </h1>
        <FoodCategory></FoodCategory>
      </div>
    </Container>
  );
};

export default AvailableFood;
