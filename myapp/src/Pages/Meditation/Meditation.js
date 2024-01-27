import React from "react";
import meditation from "../../assets/Images/meditation.jpg";

const Meditation = () => {
  return (
    <div className="pt-20 pl-5 pr-5 flex flex-col gap-4">
      <div className="bg-linear">
        <h1 className="font-semibold text-xl">
          How mediattion helps when we are in Mental stress.
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-2xl">Importance :</h1>
        <div className="flex gap-8">
          <img
            src={meditation}
            alt="meditation"
            className="rounded-[50%] w-[30%] h-[30%]"
          />
          <ul className="text-md flex flex-col gap-3 items-center justify-center">
            <li>- Promotes Relaxation</li>
            <li>- Promotes Relaxation</li>
            <li>- Promotes Relaxation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
