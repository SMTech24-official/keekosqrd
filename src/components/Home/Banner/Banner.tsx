import React from 'react'
import { HeroCarousel } from '../HeroCarousel/HeroCarousel'
import { Stats } from '../Stats/Stats'

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-[35px] md:pt-[62px]">
    <div className="space-y-6 text-justify md:text-start">
      <h1 className="text-[30px] md:text-[40px] lg:text-[53px] font-bold leading-tight text-default">
        Choose your sneaker each week
      </h1>
      <p className="text-gray text-base md:text-lg">
        Step into the world of exclusive sneakers! Subscribe, vote for your favorite kicks, and stand a chance to win the ultimate.
      </p>
      <button className="bg-grey text-default hover:bg-gray-300 uppercase font-bold px-6 py-3 rounded-[4px]">
        Subcribe Vote Win
      </button>
      
      <div className="pt-12">
        <Stats />
      </div>
    </div>
    
    <div className="flex justify-center">
      <HeroCarousel />
    </div>
  </div>
  )
}
