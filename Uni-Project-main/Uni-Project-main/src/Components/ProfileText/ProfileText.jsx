import { TypeAnimation } from "react-type-animation";
import useAuth from "../../hooks/useAuth";

const ProfileText = () => {
  const { user } = useAuth();
  return (
    <div className="mb-12">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          `Hi, welcome  ${user?.username}`,
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "2em",

          display: "inline-block",
        }}
        repeat={1}
      />
    </div>
  );
};

export default ProfileText;
