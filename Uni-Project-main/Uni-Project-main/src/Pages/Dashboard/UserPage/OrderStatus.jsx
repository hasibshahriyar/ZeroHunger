import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Components/Loader/Loader";
import DashboardContainer from "../../../Components/DashboardContainer";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import HeadingText from "../../../HeadingText/HeadingText";

const OrderStatus = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderStatus", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/manage-food/${user?.email}`);
      return res.data;
    },
  });
  const handleDelete = async (id) => {
    console.log(id);
    const statusInfo = {
      status: "Available",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/manage-food/${id}`);
        await axios.put(`/foods/update/${id}`, statusInfo);
        refetch();

        Swal.fire(
          "Deleted!",
          "Your requested food has been deleted.",
          "success"
        );
      }
    });
  };

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
                appreciate your willingness to make a difference. At this time,
                it seems that you haven't made a donation yet. Your support is
                vital to the success of our mission, and any contribution you
                can make, no matter the amount, will help us greatly. If you
                have any questions or would like to learn more about how you can
                help, please feel free to reach out to us. Together, we can make
                a positive impact. Thank you for considering donating to our
                cause.
              </p>
            ) : (
              <div>
                <HeadingText
                  heading={"Requested Food List and Status Tracker"}
                  subHeading={
                    "Monitor the Status of Your Food Requests and Track Your Requested Items"
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
                      <th>Donor Name</th>

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
                            className="w-[100px] h-[100px] object-cover "
                            src={food?.food_photo}
                            alt=""
                          />
                        </th>
                        <th>{food?.food_name}</th>
                        <th>{food?.location}</th>
                        <th>{food?.donorName}</th>

                        <th className="capitalize">{food?.category}</th>
                        <th>
                          {food?.status === "requested" && (
                            <p className="capitalize text-yellow-500">
                              {food?.status}
                            </p>
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
                          {food?.status === "requested" && (
                            <button className="btn btn-sm" disabled>
                              Waiting for donor approval
                            </button>
                          )}
                          {food?.status === "accepted" && (
                            <p className="text text-yellow-500">Pending</p>
                          )}
                          {food?.status === "delivered" && (
                            <p className="text-center font-semibold capitalize text-sky-500">
                              Done
                            </p>
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
    </DashboardContainer>
  );
};

export default OrderStatus;
