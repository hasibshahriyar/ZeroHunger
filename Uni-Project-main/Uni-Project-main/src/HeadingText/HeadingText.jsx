import React from "react";

const HeadingText = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-4xl text-cyan-400 font-serif capitalize">
        {heading}
      </h3>
      <p className="font-medium text-xl mt-1 text-yellow-500">{subHeading}</p>
    </div>
  );
};

export default HeadingText;
