import Image from "next/image";
export default function ContactUs() {
  return (
    <>
      <section className="bg-customOffWhiteBG py-8 lg:py-16 border-b-2">
        <div className="mx-auto max-w-screen-2xl py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="hero-heading flex items-center">
              <div className ="">
              <h1 className="mb-4 tracking-tight leading-none text-secondryColor text-80px font-normal">
                <span className="text-primaryColor font-bold">Contact </span> Us
              </h1>
              <p className="tracking-tight leading-none text-secondryColor text-24px font-normal">We are here to help you </p>
              </div>
              
            </div>
            <div className="contact-us-hero">
              <div >
                <Image src="aus.svg" width={200} height={200} className="-mt-14 mx-auto" />
              </div>
            </div>

            <div className="hero-heading pt-14">
            <Image src="lahore.svg" width={200} height={200} className="mt-"/>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-customOffWhiteBG p-10">
        <div className="contactuspage mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white shadow px-14 py-8">
              <div>
                <label className="text-18px font-medium capitalize text-[#49454F]">
                  Your Name
                </label>
                <input
                  type="text"
                  className="border bg-customOffWhiteBG p-4 w-full mt-2 mb-10 border-[#BDB4B5]"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div>
                <label className="text-18px font-medium capitalize text-[#49454F]">
                  Your Email
                </label>
                <input
                  type="email"
                  className="border bg-customOffWhiteBG p-4 w-full mt-2 mb-10 border-[#BDB4B5]"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div>
                <label className="text-18px font-medium capitalize text-[#49454F]">
                  Your Subject
                </label>
                <input
                  type="text"
                  className="border bg-customOffWhiteBG p-4 w-full mt-2 mb-10 border-[#BDB4B5]"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div>
                <label className="text-18px font-medium capitalize text-[#49454F]">
                  Your Message ( Optional )
                </label>
                <input
                  type="text"
                  className="border bg-customOffWhiteBG p-4 w-full mt-2 mb-10 border-[#BDB4B5]"
                  placeholder="Enter your Email Address"
                />
              </div>

              <div className="flex justify-center">
                <button className="bg-primaryColor px-14 py-5 rounded text-customWhite text-16px font-normal uppercase">
                  Submit
                </button>
              </div>
            </div>
            <div className="px-14">
              <span className="text-28px font-normal text-primaryColor underline">
                Contact info to
              </span>
              <h2 className="text-44px text-secondryColor font-bold">
                Reach Our Expert Team
              </h2>
              <p className="text-20px text-customBlack  font-normal leading-10 pb-6">
                Send a message through given form, If your enquiry is time
                sensitive please use below contact details.
              </p>

              <div className="bg-customWhite p-10 mt-5 rounded shadow">
                <div className="flex">
                  <div className="bg-secondryColor text-white flex justify-center text-center items-center rounded-full w-[50px] h-[50px]">
                    <h3>A</h3>
                  </div>
                  <div className="pl-5">
                    <h2 className="text-20px text-secondryColor font-semibold mb-1 capitalize">
                      Post Address
                    </h2>
                    <p className="text-16px text-secondryColor font-normal">
                      Office #614 Siddiq Trade Center, Gulberg II Lahore,
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-customWhite p-10 mt-5 rounded shadow">
                <div className="flex">
                  <div className="bg-secondryColor text-white flex justify-center text-center items-center rounded-full w-[50px] h-[50px]">
                    <h3>A</h3>
                  </div>
                  <div className="pl-5">
                    <h2 className="text-20px text-secondryColor font-semibold mb-1 capitalize">
                      Post Address
                    </h2>
                    <p className="text-16px text-secondryColor font-normal">
                      Office #614 Siddiq Trade Center, Gulberg II Lahore,
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-customWhite p-10 mt-5 rounded shadow">
                <div className="flex">
                  <div className="bg-secondryColor text-white border-customDarkBrown flex justify-center text-center items-center rounded-full w-[50px] h-[50px]">
                    <h3>A</h3>
                  </div>
                  <div className="pl-5">
                    <h2 className="text-20px text-secondryColor font-semibold mb-1 capitalize">
                      Post Address
                    </h2>
                    <p className="text-16px text-secondryColor font-normal">
                      Office #614 Siddiq Trade Center, Gulberg II Lahore,
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-customWhite shadow contactuspage mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-5">
          <div className="py-8 px-4 lg:py-24 lg:px-12">
            <h2 className="text-44px font-medium pb-8">
              Signup to our newsletter
            </h2>
            <p className="text-20px font-normal pb-5 pr-14">
              Signup to our newsletter for the latest news & updates upcoming.
            </p>
            <div>
              <label className="text-18px font-bold capitalize text-[#49454F]">
                Subscribe
              </label>
              <br />
              <input
                type="email"
                className="border bg-customOffWhiteBG p-5 w-full mt-2 mb-10"
                placeholder="Enter your Email Address"
              />
              <br />
              <span className="text-14px font-bold mt-5 text-customBlack">
                Already a Member?
                <span className="text-primaryColor">Sign In</span>
              </span>
            </div>
          </div>
          <div className="w-full h-[500px] lg:w-[700px]">
            <img
              src="/SignupMan.png"
              alt="Signup Image"
              className="w-full h-full ml-32"
            />
          </div>
        </div>
      </div>
    </>
  );
}
