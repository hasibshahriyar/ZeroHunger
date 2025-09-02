import React, { useState } from "react";
import Lottie from "lottie-react";
import Donation from "../../assets/donation.json";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { uploadImage } from "../../Utilis/imagebb";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DashboardContainer from "../../Components/DashboardContainer";
import { useNavigate } from "react-router-dom";
const AddFood = () => {
  const axios = useAxios();
  const navigate = useNavigate();

  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("rice");

  const { data: foods = [] } = useQuery({
    queryKey: ["foods", selectedCategory],
    queryFn: async () => {
      const res = await axios.get("/foods/unique-categories");
      return res.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = user?.email;
    const user_name = user?.username;
    const user_photo = user?.userImage;
    const status = form.status.value;
    const category = selectedCategory.toLowerCase();
    const additional_notes = form.notes.value;
    const expire_date = form.expire.value;
    const location = form.location.value;
    const quantity = form.quantity.value;
    const food_name = form.food_name.value;
    const imageForm = form.image.files[0];

    const imageData = await uploadImage(imageForm);
    console.log(imageData);
    console.log(category);

    const food_photo = imageData?.data?.display_url;
    const filteredCategoryImage = foods.find((food) =>
      food.category.includes(category)
    );

    let category_image;

    if (filteredCategoryImage) {
      category_image = filteredCategoryImage.category_image;
    }
    console.log(category_image, category);
    const submitInfo = {
      email,
      user_name,
      user_photo,
      status,
      additional_notes,
      expire_date,
      location,
      quantity,
      food_name,
      food_photo,
      category,
      category_image,
    };

    axios.post("/foods", submitInfo).then((data) => {
      if (data.data.affectedRows) {
        console.log(data.data);
        toast.success("Added to the foods");
        navigate("/dashboard/manage-added-foods");
        form.reset();
      }
    });
  };
  return (
    <DashboardContainer>
      <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center gap-20 ">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500  w-1/2 mx-auto py-20 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold mb-4">
            {" "}
            Add Your Food
          </h2>
          <form onSubmit={handleSubmit} className="w-1/2 mx-auto  ">
            <div className="form-control">
              <label className="label">
                <span className="text-white">Food Name</span>
              </label>
              <input
                type="text"
                placeholder=" Food Name"
                name="food_name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Food Photo</span>
              </label>
              <input
                type="file"
                placeholder="photo"
                name="image"
                required
                id="image"
                accept="image/*"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Food Category</span>
              </label>

              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option disabled selected>
                  Category
                </option>
                {foods?.map((food) => (
                  <option key={food?.id} className="uppercase">
                    {food?.category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-white">Food Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Food Quantity"
                name="quantity"
                className="input input-bordered"
                min={1}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Pickup Location</span>
              </label>
              <input
                type="text"
                placeholder="Pickup Location"
                name="location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Expire Date</span>
              </label>
              <input
                type="number"
                placeholder="Expire Date"
                name="expire"
                className="input input-bordered"
                min={1}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Additional Notes</span>
              </label>
              <input
                type="text"
                placeholder="Additional Notes"
                className="input input-bordered"
                name="notes"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Status</span>
              </label>
              <input
                type="text"
                placeholder="Status"
                name="status"
                defaultValue="Available"
                className="input input-bordered"
                readOnly
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-white">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={user?.username}
                className="input input-bordered"
                readOnly
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-none"
              >
                Add Food
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <Lottie animationData={Donation} loop={false}></Lottie>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default AddFood;
