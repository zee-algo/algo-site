import Image from "next/image";
import Navbar from "../components/Navbar";
import WhatWeDoCard from "../components/Cards/WhatWeDoCard";
import BlogCard from "../components/Cards/BlogCard";
import TestimonialsCard from "../components/Cards/TestimonialsCard";
import Heading from "../components/Heading";
import OurWorkPortfolioCard from "../components/Cards/OurWorkPortfolioCard";
import SubscriptionCard from "../components/Cards/SubscriptionCard";
import Footer from "../components/Cards/Footer";
import Counter from "../components/Counter";
import Explore from "../components/Explore";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
  return (
    <>
      {/* --------------------- */}
      {/*--- navbar section --- */}
      {/*---------------------- */}
      <header>
        <Navbar />
      </header>

      {/* --------------------- */}
      {/*--- company subscriptions --- */}
      {/*---------------------- */}

      <div className="py-10 px-4">
        <section className="company-subscription py-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((value , index) => {
                console.log(index)
                return (
                  <div key={index}  >
                    <SubscriptionCard  index = {index}/>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>


 {/* --------------------- */}
      {/*--- Counter Section --- */}
      {/*---------------------- */}

<Counter/>

 {/* --------------------- */}
      {/*--- Explore Section --- */}
      {/*---------------------- */}

      <Explore/>







      {/* --------------------- */}
      {/*--- what we do section --- */}
      {/*---------------------- */}
      <section className="what-we-do-section py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-1">
            <Heading
              heading={"what we do"}
              title={
                "AlgoRepublic offer you all kind of the software solutions"
              }
            />
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="grid grid-cols-1 gap-5">
              {[1, 2, 3].map((value) => {
                return (
                  <div key={value}>
                    <WhatWeDoCard />
                  </div>
                );
              })}
            </div>

            <div className="grid grid-1 flex items-center justify-center">
              <div className="">
                <Image src="/CenterImg.png" alt="" width={100} height={100} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {[1, 2, 3].map((value) => {
                return (
                  <div key={value}>
                    <WhatWeDoCard />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- */}
      {/*---Our Work Section --- */}
      {/*---------------------- */}

      <section className="Our-work-section py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-1">
            <Heading
              heading={"Our Work"}
              title={"Portfolio that speaks Itself"}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((value) => (
              <div key={value}>
                <OurWorkPortfolioCard key={value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- */}
      {/*--- Testimonials section --- */}
      {/*---------------------- */}
      <section className="testimonials-section py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-1">
            <Heading heading={"Testimonial"} title={"What’s Clients Say"} />
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3].map((value) => {
              return (
                <div key={value}>
                  <TestimonialsCard />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------- */}
      {/*--- Blog Section --- */}
      {/*---------------------- */}

      <section className="Blog-section py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-1">
            <Heading heading={"Blog"} title={"News & Articles"} />
          </div>
          <div className="grid grid-cols-2 md:grid:cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((value) => (
              <div key={value}>
                <BlogCard key={value} />
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* --------------------- */}
      {/*--- GeTInTouchSection --- */}
      {/*---------------------- */}

  <GetInTouch/>



      {/* --------------------- */}
      {/*--- Footer Section --- */}
      {/*---------------------- */}

      <section className="Footer-section pt-10 px-4">
        <Footer />
      </section>
    </>
  );
}
