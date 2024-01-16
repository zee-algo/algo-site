export default function OurWorkPortfolioCard() {
  return (
    <>
      <div class="">
        <div className="w-full bg-white rounded">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </a>
          <div class="p-6">
            <h3 className="font-bold text-secondryColor text-10px mb-4">
              MIRL ( MEET IN REAL LIFE )
            </h3>
            <p className="text-secondryColor text-11px font-normal">
              The easiest event planning app to help you get together, improve
              communication, And smooth the little obstacles along the way of a
              great gathering. Use this app to enjoy your friends and family in
              many MIRL’s!
            </p>
            <div className="text-center mt-9">
              <button className=" bg-primaryColor rounded text-customWhite font-normal text-12px py-2 px-6 capitalize">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
