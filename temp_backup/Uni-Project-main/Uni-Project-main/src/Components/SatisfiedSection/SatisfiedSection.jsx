import Container from "../Container";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
const SatisfiedSection = () => {
  return (
    <div className="py-36 bg-[#F9FAFB] ">
      <Container>
        {/* <Head headingText={"Satisfied Customers"}></HeaderText> */}
        <div className="flex h-[400px]  ">
          <div className="flex-1">
            <img className="h-[400px] w-full" src={banner1} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center  bg-cyan-600 text-white ">
            <div className="px-12">
              <h3 className="text-2xl font-medium">
                I recently received a donation from Zero Hunger, and I'm truly
                grateful for their kindness. Their contribution made a
                significant difference in my life. Thank you for your compassion
                and support!"
              </h3>
              <p className="mt-8">Mir Monir,Banani</p>
            </div>
          </div>
        </div>
        <div className="flex h-[400px]  ">
          <div className="flex-1 flex justify-center items-center  bg-cyan-600 text-white ">
            <div className="px-12">
              <h3 className="text-2xl font-medium">
                I recently donated through this Zero Hunger, and I was impressed
                by their commitment to helping those in need. Keep up the
                fantastic work, and thank you for providing such a meaningful
                platform for giving back!
              </h3>
              <p className="mt-8">Sabbir Hossen,Uttora</p>
            </div>
          </div>
          <div className="flex-1">
            <img className="h-[400px] w-full" src={banner2} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SatisfiedSection;
