import React, { useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import DashboardContainer from "../../../Components/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import VerifiedUpdateModal from "../../../Modal/VerifiedUpdateModal";

import Swal from "sweetalert2";
import HeadingText from "../../../HeadingText/HeadingText";

const ManageRequestedFood = () => {
  const { user } = useAuth();
  const axios = useAxios();
  let [isOpen, setIsOpen] = useState(false);
  const [foodData, setFoodData] = useState({});

  const handleOpen = (id) => {
    setIsOpen(true);
    setFoodData(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelivered = async (foodId, manageId) => {
    const updateStatus = {
      status: "delivered",
    };
    console.log(foodId, manageId);
    try {
      await axios.put(`/foods/update/${foodId}`, updateStatus);
      await axios.put(`/manage-food/delivery/${manageId}`, updateStatus);
      await axios.put(`/manage-food/${manageId}`, updateStatus);
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Delivery Done!!!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["requestedFoods", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/manage-food/donor/${user?.email}`);
      return res.data;
    },
  });
  console.log(foods);
  return (
    <DashboardContainer>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <div>
            {foods?.length === 0 ? (
              <p className="text-center font-semibold  text-2xl text-cyan-900 font-serif">
                Thank you for your interest in supporting our cause. We
                appreciate your willingness to make a difference.There is no
                request till now .
              </p>
            ) : (
              <div>
                <HeadingText
                  heading={" Donor Request Management"}
                  subHeading={
                    "Track and Fulfill User Requests for Donated Food"
                  }
                ></HeadingText>
                <table className="table mt-12 ">
                  {/* head */}
                  <thead>
                    <tr className=" text-center bg-black text-white text-[16px]">
                      <th></th>
                      <th>Food Images</th>
                      <th>Food Name</th>
                      <th> Location</th>
                      <th>Recipient Name</th>

                      <th>Category</th>
                      <th>Status</th>
                      <th>Delivery Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foods?.map((food, index) => (
                      <tr className="text-center">
                        <th>{index + 1}</th>
                        <th>
                          <img
                            className="w-[100px] h-[100px] object-cover rounded-lg"
                            src={food?.food_photo || "https://i.ibb.co/HFFn1w2/biriyani.jpg"}
                            alt={`${food?.food_name} - requested food`}
                            onError={(e) => {
                              e.target.src = "https://i.ibb.co/HFFn1w2/biriyani.jpg";
                            }}
                          />
                        </th>
                        <th>{food?.food_name}</th>
                        <th>{food?.location}</th>
                        <th>{food?.recipientName}</th>

                        <th className="capitalize">{food?.category}</th>
                        <th>
                          {food?.status === "requested" && (
                            <button
                              onClick={() => handleOpen(food)}
                              className="btn btn-sm capitalize bg-cyan-500 text-white hover:bg-cyan-600"
                            >
                              {food?.status}
                            </button>
                          )}
                          {food?.status === "rejected" && (
                            <p className="text-red-500 capitalize">
                              {food?.status}
                            </p>
                          )}
                          {food?.status === "accepted" && (
                            <p className="text-green-500 capitalize">
                              {food?.status}
                            </p>
                          )}
                          {food?.status === "delivered" && (
                            <p className="text-blue-500 capitalize">
                              {food?.status}
                            </p>
                          )}
                        </th>
                        <th className="capitalize">
                          {food?.deliveryStatus !== "delivered" && (
                            <button
                              onClick={() =>
                                handleDelivered(food?.food_id, food.id)
                              }
                              disabled={food?.status !== "accepted"}
                              className="bg-cyan-500 btn btn-sm text-white hover:bg-cyan-600 border-none"
                            >
                              Delivered
                            </button>
                          )}
                          {food?.deliveryStatus === "delivered" && (
                            <p className="text-sky-500">Done!</p>
                          )}
                        </th>
                        <th>
                          <button
                            onClick={() => handleDelete(food?.food_id)}
                            className="btn btn-sm bg-red-600 text-white hover:bg-black "
                            disabled={
                              food?.status === "accepted" ||
                              food?.status === "delivered"
                            }
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
      <VerifiedUpdateModal
        refetch={refetch}
        isOpen={isOpen}
        food={foodData}
        closeModal={closeModal}
      ></VerifiedUpdateModal>
    </DashboardContainer>
  );
};

export default ManageRequestedFood;
