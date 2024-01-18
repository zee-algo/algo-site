import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-customOffWhiteBG py-5">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl px-10 py-4 shadow bg-white rounded">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/AlgoLogo.png" alt="" width={100} height={100} />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col items-center space-x-4 md:space-x-6 rtl:space-x-reverse md:flex-row">
              <li>
                <a href="#" className="block py-2 px-3 text-secondryColor text-12px md:text-14px lg:text-16px font-semibold" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <button className="flex items-center justify-between w-full py-2 px-3 text-secondryColor text-12px md:text-14px lg:text-16px font-semibold">
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 ">
                  <ul className="py-2 ">
                    <li>
                      <a href="#" className="block px-4 py-2">
                        Websites
                      </a>
                    </li>

                    <li>
                      <a href="#" className="block px-4 py-2">
                        Mobile App
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-secondryColor text-12px md:text-14px lg:text-16px font-semibold">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-secondryColor text-12px md:text-14px lg:text-16px font-semibold">
                  About Uss
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-secondryColor text-12px md:text-14px lg:text-16px font-semibold">
                  Contact Us
                </a>
              </li>
              <li>
                <span className="py-2 px-3 text-secondryColor text-10px md:text-12px lg:text-14px font-semibold">Have Any Question ?</span>
                <br />
                <span className="py-2 px-3 text-primaryColor text-10px md:text-12px lg:text-14px font-semibold">+92 42 35817113</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
