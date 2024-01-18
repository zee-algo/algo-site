import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div class="top-footer border-b-2 mx-auto max-w-screen-xl px-4 py-2 md:py-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 md:gap-y-4 ">
            <div className="col-span-4 lg:col-span-3">
              <ul className="flex flex-wrap space-x-4 md:space-x-6 items-center">
                <li>
                  <a>Pricing and plans</a>
                </li>
                <li>
                  <a>Privacy & Policy</a>
                </li>
                <li>
                  <a> Membership</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-start lg:justify-end md:space-x-3 space-x-6">
              <a href="#">
                <Image src="faceb.svg" width={25} height={25} alt="" />
              </a>
              <a href="#">
                <Image src="linkdin.svg" width={25} height={25} alt="" />
              </a>
              <a href="#">
                <Image src="ins.svg" width={25} height={25} alt="" />
              </a>

              <a href="#">
                <Image src="twi.svg" width={25} height={25} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="main-footer"></div>
      </footer>

      <footer class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="text-teal-600">
                <Image src="/AlgoLogo.png" width={120} height={120} alt="" />
              </div>

              <p class="mt-4 max-w-xs text-gray-500">
                We are the best world Information Technology Company. Providing
                the highest quality in hardware, Software & Network solutions.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p class="font-medium text-gray-900"> IT Services</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Cyber Security
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Cloud Computing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Managed IT
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      IT Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p class="font-medium text-gray-900"> Important Links</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Meet Our Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      News & Media
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      locations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p class="font-medium text-gray-900"> Get In Touch</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Phone: +92 42 35817113
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-12px md:text-14px lg:text-16px font-normal text-secondryColor transition hover:opacity-75"
                    >
                      Email: Info@algopublic.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      locations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="text-xs text-center text-gray-500 border-t mt-8 pt-5">
            Copyright @ 2023 AlgoRepublic
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
