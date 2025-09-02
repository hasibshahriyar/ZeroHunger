import React, { useState } from "react";
import DashboardContainer from "../../../Components/DashboardContainer";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import HeadingText from "../../../HeadingText/HeadingText";

const UserRating = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const axios = useAxios();
  const [ratingError, setRatingError] = useState("");
  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestion = form.suggestion.value;
    const feedback = form.feedback.value;
    const name = user?.username;
    const email = user?.email;
    const userImage = user?.userImage;
    const ratingValue = rating;
    const dateValue = new Date();
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0"); // Adding 1 because getMonth() returns 0-based index
    const day = String(dateValue.getDate()).padStart(2, "0");
    const hours = String(dateValue.getHours()).padStart(2, "0");
    const minutes = String(dateValue.getMinutes()).padStart(2, "0");
    const seconds = String(dateValue.getSeconds()).padStart(2, "0");

    const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(date);
    const ratingInfo = {
      suggestion,
      feedback,

      name,
      email,
      userImage,
      ratingValue,
      date,
    };
    if (rating === 0) {
      setRatingError("please give a rating first");
    } else {
      try {
        setRatingError("");
        await axios.post("/rating", ratingInfo);
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your rating has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <DashboardContainer>
        <HeadingText
          heading={"User Feedback and Rating "}
          subHeading={"Rate Your Experience and Provide Feedback"}
        ></HeadingText>
        <form
          onSubmit={handleReview}
          className="w-4/5 mx-auto bg-cyan-300 p-20 rounded-md mt-12 "
        >
          <div className=" flex flex-col items-center">
            <Rating
              style={{ maxWidth: 250 }}
              value={rating}
              onChange={setRating}
              isRequired
            ></Rating>
            {ratingError && (
              <p className="text-red-500 font-semibold text-lg mt-4">
                {ratingError}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2  mt-8 ">
            <label className="ml-2">
              Do you have any suggestion for this website?
            </label>
            <input
              placeholder="Suggestion"
              className="py-4  pl-2 rounded-lg"
              type="text"
              name="suggestion"
              required
            />
          </div>
          <div className="flex flex-col space-y-2  mt-8 ">
            <label className="ml-2">Please give a feedback</label>
            <textarea
              placeholder="Feedback"
              className="py-2  pl-2 h-[200px]  rounded-lg"
              type="text"
              required
              name="feedback"
            />
          </div>
          <button
            type="submit"
            className="btn bg-gray-800 hover:bg-gray-900 text-white border-none mt-6"
          >
            Send Review
          </button>
        </form>
      </DashboardContainer>
    </div>
  );
};

export default UserRating;
