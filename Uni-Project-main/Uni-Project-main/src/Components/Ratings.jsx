import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoTime } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import HeadingText from "./../HeadingText/HeadingText";
import useAxios from "../hooks/useAxios";
import Container from "./Container";
import moment from "moment";

const Ratings = () => {
  const axios = useAxios();
  const { data: ratings, isLoading } = useQuery({
    queryKey: ["rating"],
    queryFn: async () => {
      const res = await axios.get("/rating");
      return res.data;
    },
  });
  console.log(ratings);
  return (
    <div className="pb-32 bg-[#F9FAFB]">
      <Container>
        <HeadingText
          heading={"testimonials"}
          subHeading={"What Our User Say"}
        ></HeadingText>
        <div className="mt-12 ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {ratings?.slice(0, 5).map((rating, index) => (
              <SwiperSlide key={index}>
                <div className="w-3/5 bg-white py-20 rounded-md shadow-md mx-auto flex flex-col justify-center items-center space-y-4 text-center">
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={rating.ratingValue}
                  ></Rating>
                  <FaQuoteLeft className="text-3xl" />

                  <p>{rating.feedback}</p>
                  <div className="flex items-center justify-center gap-6">
                    <p className="text-xl font-medium text-yellow-600">
                      {rating.name}
                    </p>

                    <div className="flex items-center gap-1">
                      <IoTime className="text-xl text-gray-900" />
                      <p>{moment(rating.date).fromNow()}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Ratings;
