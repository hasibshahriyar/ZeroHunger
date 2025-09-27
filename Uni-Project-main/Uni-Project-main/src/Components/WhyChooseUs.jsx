import { Swiper, SwiperSlide } from "swiper/react";
import { FiGlobe, FiShield, FiClock, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";
import { MdVerified, MdSupportAgent } from "react-icons/md";
import image1 from "../assets/choose-1.jpg";
import image2 from "../assets/choose-2.jpg";
import image3 from "../assets/choose-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import Container from "./Container";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      image: image1,
      icon: FiGlobe,
      title: "Global Impact Network",
      description: "Join a worldwide community of food donors and recipients. Our platform connects generous hearts across continents, creating a global movement against hunger and food waste.",
      stats: { label: "Countries", value: "25+" },
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      image: image2,
      icon: MdVerified,
      title: "Trusted & Verified",
      description: "Every donor and recipient is verified through our comprehensive system. We ensure food safety standards and maintain trust through transparent community reviews and ratings.",
      stats: { label: "Trust Score", value: "99.8%" },
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      image: image3,
      icon: MdSupportAgent,
      title: "24/7 Expert Support",
      description: "Our dedicated support team and food safety experts are available around the clock to assist you. Get guidance on food donation best practices and platform usage.",
      stats: { label: "Response Time", value: "<5min" },
      color: "from-orange-500 to-red-600"
    }
  ];

  const additionalFeatures = [
    { icon: FiAward, title: "Award Winning", desc: "Recognized globally for innovation" },
    { icon: FiUsers, title: "Community Driven", desc: "Built by the community, for the community" },
    { icon: FiTrendingUp, title: "Growing Impact", desc: "Expanding reach every day" },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-primary-50/30 to-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent-200 rounded-full opacity-10 animate-pulse animation-delay-400"></div>
      
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary-100 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-4">
            <FiShield className="w-4 h-4" />
            Trusted by thousands worldwide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-4">
            Why Choose <span className="text-gradient">ZeroHunger</span>?
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We're not just a platform – we're a movement dedicated to eliminating food waste 
            and hunger through technology, community, and compassion.
          </p>
          
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Main Features Carousel */}
        <div className="mb-16 animate-slide-up animation-delay-200">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            modules={[Pagination, Autoplay]}
            className="feature-swiper pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={feature.id}>
                <div className="card-modern p-8 h-full group cursor-pointer">
                  {/* Image with overlay */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={feature.image} 
                      alt={feature.title}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                      <feature.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Stats badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-xs font-semibold text-secondary-800">{feature.stats.value}</div>
                      <div className="text-xs text-secondary-500">{feature.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.color}`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-secondary-900">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Action indicator */}
                    <div className="flex items-center gap-2 text-primary-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <FiTrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up animation-delay-400">
          {additionalFeatures.map((feature, index) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:shadow-colored transition-all duration-300 transform group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-800 mb-2">{feature.title}</h4>
              <p className="text-secondary-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up animation-delay-600">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-soft">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-white flex items-center justify-center">
                  <FiUsers className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-secondary-800">Join 10,000+ donors</div>
              <div className="text-sm text-secondary-500">Making a difference every day</div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .feature-swiper .swiper-pagination-bullet {
          background: #0ea5e9;
          opacity: 0.3;
        }
        .feature-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
