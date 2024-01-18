import React from "react";
const OurWorkPortfolioCard= () => {
  return (
    <>
      <div className="">
        <div className="w-full bg-white rounded">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </a>
          <div className="p-6">
            <h3 className=" text-secondryColor font-semibold text-14px lg:text-15px mb-4">
              <span className="font-bold">MIRL</span> ( MEET IN REAL LIFE )
            </h3>
            <p className="text-secondryColor text-12px md:text-14px lg:text-16px font-normal">
              The easiest event planning app to help you get together, improve
              communication, And smooth the little obstacles along the way of a
              great gathering. Use this app to enjoy your friends and family in
              many MIRL’s!
            </p>
            <div className="text-center mt-9">
              <button className=" bg-primaryColor rounded text-customWhite font-normal text-12px md:text-14px lg:text-16px  py-2 px-6 capitalize">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default OurWorkPortfolioCard;