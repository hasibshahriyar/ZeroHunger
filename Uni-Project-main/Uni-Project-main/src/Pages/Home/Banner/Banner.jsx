import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiHeart, FiUsers, FiTrendingUp } from "react-icons/fi";
import { MdFoodBank } from "react-icons/md";
import banner from "../../../assets/donation.jpg";

import Container from "./../../../Components/Container";
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const Banner = () => {
  const [role, isLoading, refetch] = useRole();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  
  const handleRole = () => {
    if (role === "user") {
      const roleInfo = {
        role: "donor",
      };
      Swal.fire({
        title: "🤝 Become a Food Donor",
        text: "Join our community of generous donors and help fight hunger in your area!",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, I want to help!",
        denyButtonText: "Maybe later",
        confirmButtonColor: "#0ea5e9",
        denyButtonColor: "#64748b",
        background: "#ffffff",
        customClass: {
          popup: "rounded-2xl shadow-strong",
          title: "text-secondary-800 font-heading",
          confirmButton: "rounded-xl px-6 py-3",
          denyButton: "rounded-xl px-6 py-3",
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = await axios.put(`/users/${user?.email}`, roleInfo);
          refetch();
          Swal.fire({
            title: "🎉 Welcome to our donor community!",
            text: "You can now start sharing food with those in need",
            icon: "success",
            confirmButtonColor: "#0ea5e9",
            customClass: {
              popup: "rounded-2xl shadow-strong",
              confirmButton: "rounded-xl px-6 py-3",
            }
          });
          navigate("/dashboard/add-food");
        } else if (result.isDenied) {
          Swal.fire({
            title: "No worries!",
            text: "You can become a donor anytime from your profile",
            icon: "info",
            confirmButtonColor: "#0ea5e9",
            customClass: {
              popup: "rounded-2xl shadow-strong",
              confirmButton: "rounded-xl px-6 py-3",
            }
          });
        }
      });
    }
    if (role === "donor") {
      navigate("/dashboard/add-food");
    }
  };

  const stats = [
    { icon: FiUsers, label: "People Helped", value: "10K+", color: "text-primary-600" },
    { icon: MdFoodBank, label: "Meals Shared", value: "50K+", color: "text-accent-600" },
    { icon: FiHeart, label: "Active Donors", value: "2K+", color: "text-red-500" },
    { icon: FiTrendingUp, label: "Success Rate", value: "95%", color: "text-green-500" },
  ];

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-60 animate-float animation-delay-400"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-300 rounded-full opacity-60 animate-float animation-delay-800"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center section-padding">
          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary-700 shadow-soft">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              Fighting hunger, one meal at a time
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                <span className="text-gradient">Be The Reason</span>
                <br />
                <span className="text-secondary-800">Someone Smiles Today!</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-secondary-600 leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
              Join our mission to eliminate food waste and hunger. Your generosity can transform 
              surplus food into hope, bringing nourishment and joy to families in need. Every 
              donation creates a ripple effect of kindness in your community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              {user && role !== "admin" && (
                <button
                  onClick={handleRole}
                  className="btn-primary px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg group"
                >
                  <MdFoodBank className="w-5 h-5" />
                  {role === "donor" ? "Add Food Now" : "Become a Donor"}
                  <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              )}
              
              <Link to="/available">
                <button className="btn-secondary px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg">
                  <FiHeart className="w-5 h-5" />
                  Browse Available Food
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-slide-up animation-delay-600">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-soft mb-3 group-hover:shadow-medium transition-all duration-300 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-800">{stat.value}</div>
                  <div className="text-sm text-secondary-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-slide-up animation-delay-200">
            <div className="relative z-10">
              {/* Main image with modern styling */}
              <div className="relative overflow-hidden rounded-3xl shadow-strong">
                <img 
                  src={banner} 
                  alt="Food donation helping people in need" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-strong animate-bounce-gentle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <FiHeart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-secondary-800">Impact Today</div>
                    <div className="text-xs text-secondary-500">127 meals shared</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-strong animate-bounce-gentle animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <FiUsers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-secondary-800">Active Now</div>
                    <div className="text-xs text-secondary-500">45 donors online</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
