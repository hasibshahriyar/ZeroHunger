import React from "react";
import DashboardContainer from "../../../Components/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import HeadingText from "../../../HeadingText/HeadingText";

const ManageAddedFoods = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: foods = [],

    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get(`/foods/donor/${user?.email}`);
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
                  heading={"Donated Food Route Management"}
                  subHeading={
                    "Organize, Track, and Distribute Donated Food Supplies"
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
                      <th>Expire Date</th>
                      <th>Quantity</th>
                      <th>Update</th>
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
                            alt={`${food?.food_name} - donated food`}
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
                        <th className="capitalize">
                          <Link
                            to={`/dashboard/manage-added-foods/update/${food?.id}`}
                          >
                            <button className="btn btn-sm bg-cyan-400 border-none text-white hover:bg-cyan-500  ">
                              Update
                            </button>
                          </Link>
                        </th>
                        <th>
                          <button
                            onClick={() => handleDelete(food?.id)}
                            className="btn btn-sm bg-red-600 text-white hover:bg-black "
                            disabled={food?.verified === "pending"}
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

export default ManageAddedFoods;
