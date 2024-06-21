import React from "react";
import bg from "../assets/Rectangle 9.png";
import Button from "../Component/Button";

const TalkToUs = () => {
  return (
    <div className="px-4">
      <div
        className="container mx-auto p-6 sm:p-10 md:p-20 my-24"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-wrap gap-5 justify-between items-center">
          <p className="font-semibold text-3xl text-white">
            Need guidance? Let us help you.
          </p>
          <Button label={"Talk to a Counsellor"} />
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
