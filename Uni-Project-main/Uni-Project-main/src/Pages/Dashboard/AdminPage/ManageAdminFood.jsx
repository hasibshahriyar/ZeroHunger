import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashboardContainer from "../../../Components/DashboardContainer";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import HeadingText from "../../../HeadingText/HeadingText";

const ManageAdminFood = () => {
  const axios = useAxios();
  const {
    data: foods,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get("/foods");
      return res.data;
    },
  });
  const handleDelete = (id) => {
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
        await axios.delete(`/foods/${id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your food has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <DashboardContainer>
          <HeadingText
            heading={"Donated Food Route Management"}
            subHeading={
              "Organize, Track, and Distribute Donated Food For Donor and User"
            }
          ></HeadingText>
          <h3 className=" mt-12 font-bold text-lg">
            Total Food:{foods?.length}
          </h3>
          <table className="table mt-7 ">
            {/* head */}
            <thead>
              <tr className=" text-center bg-black text-white text-[16px]">
                <th></th>
                <th>Food Images</th>
                <th>Food Name</th>
                <th> Location</th>
                <th>Donor Name</th>

                <th>Category</th>
                <th>Expire Date</th>
                <th>Quantity</th>
                <th>Status</th>
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
                      alt={`${food?.food_name} - food item`}
                      onError={(e) => {
                        e.target.src = "https://i.ibb.co/HFFn1w2/biriyani.jpg";
                      }}
                    />
                  </th>
                  <th className="capitalize">{food?.food_name}</th>
                  <th className="capitalize">{food?.location}</th>
                  <th className="capitalize">{food?.user_name}</th>

                  <th className="capitalize">{food?.category}</th>
                  <th>In {food?.expire_date} days</th>
                  <th> {food?.quantity} </th>
                  <th>
                    {food?.status === "requested" && (
                      <p className="text-yellow-500 capitalize">
                        {food?.status}
                      </p>
                    )}
                    {food?.status === "Available" && (
                      <p className="text-gray-700 capitalize">{food?.status}</p>
                    )}

                    {food?.status === "accepted" && (
                      <p className="text-green-500 capitalize">
                        {food?.status}
                      </p>
                    )}
                    {food?.status === "delivered" && (
                      <p className="text-blue-500 capitalize">{food?.status}</p>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(food?.id)}
                      className="btn btn-sm bg-red-600 text-white hover:bg-black "
                      disabled={food?.status !== "Available"}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </DashboardContainer>
      )}
    </div>
  );
};

export default ManageAdminFood;
