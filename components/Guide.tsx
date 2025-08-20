// ...existing code...
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <img src="/camp.svg" alt="camp" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Your Ethiopian Adventure Awaits
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Expert Guides for Your Journey</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Discover Ethiopia with our experienced local guides who know every hidden corner of this ancient land. From the rock churches of Lalibela to the peaks of the Simien Mountains, we'll ensure you experience the authentic beauty and culture of Ethiopia. Our offline maps and expert knowledge guarantee you'll never miss the most important sites.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img 
          src="/boat.png"
          alt="Ethiopian landscape"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
          style={{ width: 'auto', height: 'auto' }}
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">2 hours</p>
              </div>
              <p className="bold-20 mt-2">Lalibela</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Addis Ababa</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide