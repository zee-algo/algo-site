import React from "react";
import Image from "next/image";

const SubscriptionCard = ({ index }) => {
  return (
    <>
      <div
        className={`w-full shadow bg-white rounded p-3 relative  mt-${
          16 * index
        }`}
      >
        <div className="text-22px rounded-full bg-[#FDEFE7] text-red-700 flex justify-center items-center text-center w-16 h-16 p-2 absolute -top-9 left-3 ">
          <Image src="pencil.svg" width={25} height={25} alt="" />
        </div>
        <div className="text-22px rounded bg-customOrange text-customWhite flex justify-center items-center px-6 py-1 -top-8 absolute right-3">
          01
        </div>
        <div className=" mt-5">
          <h3 className="text-secondryColor text-14px font-bold mb-5">
            Build & Scale
          </h3>
          <p className="text-14px font-normal leading-5 pb-12">
            Easily scale your development team up or down with our flexible
            subscription model.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
