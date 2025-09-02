import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Container from "../../Components/Container";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useRole from "../../hooks/useRole";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const CategoryDetails = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const [sort, setSort] = useState("default");
  const { category } = useParams();
  const [role] = useRole();
  const [foodName, setFoodName] = useState("");

  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods", sort, foodName],
    queryFn: async () => {
      if (sort === "default") {
        if (!foodName) {
          const data = await axios.get(`/foods/${category}`);
          return data.data;
        } else {
          const data = await axios.get(`/foods/${category}?name=${foodName}`);
          return data.data;
        }
      }
      if (sort === "expire") {
        if (!foodName) {
          const data = await axios.get(`/foods/${category}?sort=expire_date`);
          return data.data;
        } else {
          const data = await axios.get(
            `/foods/${category}?name=${foodName}&sort=expire_date`
          );
          return data.data;
        }
      }
    },
  });
  const { data: foodNameData = [], isLoading: foodNameLoading } = useQuery({
    queryKey: ["foodName"],
    queryFn: async () => {
      const res = await axios.get(`/foods/food-name/${category}`);
      return res.data;
    },
  });
  console.log(foodNameData);

  const handleAdd = async (food) => {
    const statusInfo = {
      status: "requested",
    };
    const wishListFoodInfo = {
      food_id: food.id,

      status: statusInfo.status,
      deliveryStatus: "pending",
      recipientEmail: user?.email,
      recipientName: user?.username,
      recipientImage: user?.userImage,
      donorName: food?.user_name,
      donorEmail: food?.email,
      donorImage: food?.user_photo,

      additional_notes: food?.additional_notes,
      expire_date: food?.expire_date,
      location: food?.location,
      quantity: food?.quantity,
      food_name: food?.food_name,
      food_photo: food?.food_photo,
      category: food?.category,
      category_image: food?.category_image,
    };
    console.log(wishListFoodInfo);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Request for the food!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.put(`/foods/update/${food?.id}`, statusInfo);
          await axios.post("/manage-food", wishListFoodInfo);
          refetch();

          Swal.fire({
            title: "Requested!",
            text: "Your request for the food is successful.",
            icon: "success",
          });
        }
      });
    } catch (err) {}
  };

  return (
    <Container>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {!foodNameLoading && (
            <div className=" mt-24 mb-36 ">
              <div className="flex justify-end gap-12">
                <Autocomplete
                  disablePortal
                  onChange={(e, value) => setFoodName(value)}
                  id="combo-box-demo"
                  options={foodNameData}
                  sx={{ width: 420, borderRadius: 8, bgcolor: "white" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Food Name" />
                  )}
                />
                <select
                  className="select border-gray-300 w-[200px] h-[56px] rounded-md "
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option disabled selected>
                    Sort
                  </option>
                  <option value={"default"}>Default</option>
                  <option value={"expire"}>Expire Date</option>
                </select>
              </div>
              <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 min-h-screen  mt-10">
                {foods &&
                  foods?.map((food) => (
                    <div className=" w-full  bg-base-100 shadow-xl h-full flex flex-col justify-between rounded-lg">
                      <figure>
                        <img
                          className="w-full h-[300px] rounded-lg "
                          src={food.food_photo}
                          alt={food.food_name}
                        />
                      </figure>

                      <div className="card-body space-y-1">
                        <div>
                          <p className="font-medium text-lg">Donated By:</p>

                          <div className="flex items-center flex-col justify-center gap-1 ">
                            <img
                              className="w-[40px] h-[40px] rounded-full"
                              src={food.user_photo}
                              alt={food.user_name}
                            />
                            <h3 className="capitalize">{food.user_name}</h3>
                          </div>
                        </div>
                        <h2 className="text-2xl text-center mb-2 font-bold">
                          {food.food_name}
                        </h2>

                        <p>
                          <span className="font-bold">Location:</span>
                          {food.location}
                        </p>
                        <p>
                          <span className="font-bold">Expire Date:</span> In{" "}
                          {food.expire_date} days
                        </p>
                        <p>
                          <span className="font-bold">Quantity: </span>
                          {food.quantity}
                        </p>

                        <p>
                          <span className="font-bold">Additional Notes: </span>
                          {food.additional_notes}
                        </p>
                        {food?.status === "Available" && (
                          <p className="text-center font-semibold capitalize">
                            {food?.status}
                          </p>
                        )}
                        {food?.status === "requested" && (
                          <p className="text-center font-semibold capitalize text-yellow-500">
                            {food?.status}
                          </p>
                        )}
                        {food?.status === "accepted" && (
                          <p className="text-center font-semibold capitalize text-green-500">
                            {food?.status}
                          </p>
                        )}
                        {food?.status === "delivered" && (
                          <p className="text-center font-semibold capitalize text-blue-500">
                            {food?.status}
                          </p>
                        )}
                        <div className="card-actions justify-center mt-4">
                          {role === "admin" ? (
                            <Link to={"/dashboard/manage-admin-food"}>
                              <button className="btn mt-4 bg-gray-700  text-white hover:bg-black border-none">
                                Manage Food
                              </button>
                            </Link>
                          ) : (
                            <div>
                              {user?.email !== food?.email ? (
                                <button
                                  disabled={food?.status !== "Available"}
                                  onClick={() => handleAdd(food)}
                                  className="btn btn-accent mt-4 text-white"
                                >
                                  Add to Wishlist
                                </button>
                              ) : (
                                <Link to={"/dashboard/manage-added-foods"}>
                                  <button className="btn mt-4 bg-gray-700  text-white hover:bg-black border-none">
                                    {" "}
                                    Manage Food
                                  </button>
                                </Link>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default CategoryDetails;
