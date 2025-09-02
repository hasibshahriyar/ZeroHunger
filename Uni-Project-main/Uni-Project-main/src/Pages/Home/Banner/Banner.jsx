import { Link, useNavigate } from "react-router-dom";
import banner from "../../../assets/donation.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
        title: "Do you want to be a donor?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Not now`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const data = await axios.put(`/users/${user?.email}`, roleInfo);
          refetch();
          Swal.fire("You are now a donor", "", "success");
          navigate("/dashboard/add-food");
        } else if (result.isDenied) {
          Swal.fire("You are not a donor at this time", "", "info");
        }
      });
    }
    if (role === "donor") {
      navigate("/dashboard/add-food");
    }
  };
  return (
    <div className="bg-[#F9FAFB]">
      <Container>
        {" "}
        <div className="flex pt-24 items-center justify-center gap-14">
          <div className="flex-1">
            <h2 className="text-[#fb8300] font-bold text-4xl">Be The Reason</h2>
            <h3 className="font-bold text-4xl text-blue-950 mt-4">
              Someone Smiles Today!
            </h3>
            <p className="my-10">
              Help make a difference by donating food today!Your kindness can
              bring joy to someone's life and make a positive impact on their
              day.Consider donating nutritious meals to those in need.Every
              donation,no matter how small,can make a big difference in
              someone's life.Together,let's spread happiness and ensure that
              everyone has access to healthy and nourishing food.Your generosity
              can be the reason someone smiles today!
            </p>
            {user && role !== "admin" && (
              <button
                onClick={() => handleRole()}
                className="btn bg-blue-950 rounded-full text-white border-none hover:bg-blue-900"
              >
                Donate Now{" "}
                <FaArrowAltCircleRight className="text-xl "></FaArrowAltCircleRight>
              </button>
            )}
          </div>
          <div className="flex-1">
            <img src={banner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
