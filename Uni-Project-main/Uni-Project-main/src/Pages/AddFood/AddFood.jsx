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
      <div className="min-h-screen py-8 px-4">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Share Your Food 🍽️
          </h1>
          <p className="text-gray-600 text-lg">
            Help your community by donating extra food. Every meal counts!
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          {/* Form Section */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Food Details Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>📋</span> Food Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Food Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Chicken Biryani, Fresh Vegetables"
                      name="food_name"
                      className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Category *</span>
                    </label>
                    <select
                      className="select select-bordered w-full focus:border-cyan-500 focus:outline-none"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option disabled>Select Category</option>
                      {foods?.map((food) => (
                        <option key={food?.id} value={food?.category}>
                          {food?.category.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Quantity (servings) *</span>
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      name="quantity"
                      className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
                      min={1}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Expires In (days) *</span>
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 2"
                      name="expire"
                      className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
                      min={1}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Status</span>
                    </label>
                    <input
                      type="text"
                      name="status"
                      defaultValue="Available"
                      className="input input-bordered w-full bg-green-50 text-green-700 font-semibold"
                      readOnly
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>📸</span> Food Photo
                </h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Upload a clear photo *</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    required
                    id="image"
                    accept="image/*"
                    className="file-input file-input-bordered file-input-cyan-500 w-full"
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Recommended: Clear, well-lit photo (JPG, PNG)
                    </span>
                  </label>
                </div>
              </div>

              {/* Pickup Information Section */}
              <div className="border-b pb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>📍</span> Pickup Information
                </h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Pickup Location *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 123 Main St, Downtown, City"
                    name="location"
                    className="input input-bordered w-full focus:border-cyan-500 focus:outline-none"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Provide a safe, convenient pickup location
                    </span>
                  </label>
                </div>

                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Additional Notes *</span>
                  </label>
                  <textarea
                    placeholder="e.g., Best before 6 PM, Contains nuts, Vegetarian, Pickup between 5-7 PM"
                    className="textarea textarea-bordered h-24 focus:border-cyan-500 focus:outline-none"
                    name="notes"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Include dietary info, pickup times, or special instructions
                    </span>
                  </label>
                </div>
              </div>

              {/* Donor Information Section */}
              <div className="pb-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>👤</span> Your Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.username}
                      className="input input-bordered w-full bg-gray-50"
                      readOnly
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Your Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      defaultValue={user?.email}
                      className="input input-bordered w-full bg-gray-50"
                      readOnly
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg font-semibold border-none h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎁 Share Food & Make a Difference
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Animation */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <Lottie animationData={Donation} loop={true} className="w-full" />
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">💡 Quick Tips</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm">Upload a clear, appetizing photo of the food</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm">Mention allergens and dietary information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm">Provide accurate quantity and expiry dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm">Choose a safe, accessible pickup location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-sm">Respond promptly to pickup requests</span>
                </li>
              </ul>
            </div>

            {/* Impact Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">🌟 Your Impact</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every food donation helps fight hunger and reduces waste. 
                Thank you for being part of our community and making a real 
                difference in someone's life today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default AddFood;
