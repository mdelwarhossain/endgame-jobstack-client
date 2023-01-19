import React, { useEffect, useState } from "react";
import clockbg from "../../../assest/images/clock.jpg";

const LeftSideCard = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="text-center shadow-xl mb-5" style={{backgroundImage: `url(${clockbg})`,height:"350px"}}>
      <h1 className="pt-60 mb-2 text-3xl font-extrabold">
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h1>
      <p className=" font-extrabold">
        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default LeftSideCard;
