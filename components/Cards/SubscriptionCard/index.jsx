import Image from 'next/image'
import data from './data'
const Subscription = () => {
  return (
    <>
      <div className='pt-16 pb-10'>
        <section className='company-subscription py-10'>
          <div className='max-w-screen-2xl mx-auto px-4 lg:py-16 lg:px-12'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
              {data.map((value, index) => {
               
                return (
                  <div key={index}>
                    <div
                      className={`w-full shadow bg-white rounded ${value.margin} p-3 relative`}
                    >
                      <div
                        className={`text-22px rounded-full ${value.iconBackground} text-red-700 flex justify-center items-center text-center w-16 h-16 p-2 absolute -top-9 left-3 `}
                      >
                        <Image
                          src={value.icon.src}
                          width={25}
                          height={25}
                          alt=''
                        />
                      </div>
                      <div
                        className={`text-22px rounded ${value.indexColor}  text-customWhite text-12px md:text-14px lg:text-16px font-bold flex justify-center items-center px-6 py-2 -top-8 absolute right-3`}
                      >
                        0{index + 1}
                      </div>
                      <div className=' mt-5'>
                        <h3 className='text-secondryColor text-14px font-bold mb-5'>
                          {value.title}
                        </h3>
                        <p className='text-14px font-normal leading-5 pb-12'>
                          {value.decription}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default Subscription
