import { Rating } from "@smastrom/react-rating";

import moment from "moment";

const TitleRatingCard = ({ rating }) => {
  const date = rating?.date;
  const formattedDate = moment.utc(date).local().format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className="border-t w-full py-4">
      <div className="flex gap-3 items-center ">
        <div className=" bg-black rounded-full">
          <img
            className=" w-[60px] h-[60px] rounded-full"
            src={rating?.reviewerImage}
            alt=""
          />
        </div>
        <div>
          <p>{rating?.name}</p>
          <div className="flex gap-4 mt-2 items-center">
            <Rating
              style={{ maxWidth: 60 }}
              value={rating?.ratingValue}
              readOnly
            />
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
      <p className="my-8">{rating?.feedback}</p>
    </div>
  );
};

export default TitleRatingCard;
