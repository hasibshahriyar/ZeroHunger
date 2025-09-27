import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/choose-1.jpg";
import image2 from "../assets/choose-2.jpg";
import image3 from "../assets/choose-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "./Container";

const WhyChooseUs = () => {
  return (
    <div className=" bg-[#F9FAFB]">
      <Container>
        <h3 className="text-blue-950 font-bold text-3xl text-center pt-24">
          Why Choose Us
        </h3>
        <div className="flex justify-center    items-center py-20 ">
          <Swiper
            slidesPerView={2}
            spaceBetween={80}
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className=" bg-white shadow-lg rounded-lg p-12">
              <img className="w-36 mx-auto h-[120px]" src={image1} alt="" />
              <h3 className=" font-bold text-2xl text-center text-blue-950">
                WorldWide leaders
              </h3>
              <p className="text-center  text-blue-950 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eveniet provident eos ipsam? Id veritatis, modi nam, debitis non
                eos odit, amet consequatur beatae dignissimos ipsam vel a earum
                eveniet!
              </p>
            </SwiperSlide>
            <SwiperSlide className=" bg-white shadow-lg rounded-lg p-12">
              <img className="w-36 mx-auto h-[120px]" src={image2} alt="" />
              <h3 className=" font-bold text-2xl text-center text-blue-950">
                Trusted Organization
              </h3>
              <p className="text-center  text-blue-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eveniet provident eos ipsam? Id veritatis, modi nam, debitis non
                eos odit, amet consequatur beatae dignissimos ipsam vel a earum
                eveniet!
              </p>
            </SwiperSlide>
            <SwiperSlide className=" bg-white shadow-lg rounded-lg p-12">
              <img className="w-36 mx-auto h-[120px]" src={image3} alt="" />
              <h3 className=" font-bold text-2xl text-center text-blue-950">
                24/7 Expert Advice
              </h3>
              <p className="text-center  text-blue-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                eveniet provident eos ipsam? Id veritatis, modi nam, debitis non
                eos odit, amet consequatur beatae dignissimos ipsam vel a earum
                eveniet!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
