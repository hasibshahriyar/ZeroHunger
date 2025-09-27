import React from "react";
import DashboardContainer from "../../../Components/DashboardContainer";
import HeadingText from "../../../HeadingText/HeadingText";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import TitleRatingCard from "../../../Components/TitleRatingCard/TitleRatingCard";
import Swal from "sweetalert2";

const AdminManageRating = () => {
  const axios = useAxios();
  const { data: ratings, refetch } = useQuery({
    queryKey: ["ratings"],
    queryFn: async () => {
      const res = await axios.get("/rating");

      return res.data;
    },
  });
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete the review!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`/rating/${id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <DashboardContainer>
      {" "}
      <div>
        <HeadingText
          heading={"Review User Feedback"}
          subHeading={
            "Moderate and respond to user reviews to uphold the reputation and credibility of the platform"
          }
        ></HeadingText>
        <h3 className="mt-12 mb-8 font-bold text-lg ">
          Total Review:{ratings?.length}
        </h3>
        <div className="grid grid-cols-2 gap-32">
          {ratings?.map((rating) => (
            <div className="flex">
              <TitleRatingCard rating={rating}></TitleRatingCard>
              <button
                onClick={() => handleDelete(rating.id)}
                className="btn bg-red-600 text-white border-none mt-6 hover:bg-first"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default AdminManageRating;
