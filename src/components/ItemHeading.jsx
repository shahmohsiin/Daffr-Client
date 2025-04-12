import React from 'react'
import HStarIcon from '/Images/h-star.svg';
const ItemHeading = ({heading, subHeading, noSpace = false}) => {
  return (
    <div className={`flex flex-col justify-center items-center px-5 ${noSpace ? '' : 'py-4'} `}>

        <div className={`flex justify-center items-center gap-3 uppercase ${noSpace ? '' : 'mb-5'} `}>
        <img className='w-4' src={HStarIcon} alt="" />
          <h2 className='text-2xl font-heading'>{heading}</h2>
            <img className='w-4' src={HStarIcon} alt="" />
        </div>

{subHeading && <p className='text-sm text-center font-subHeading text-[#777777]'>Soft. Sleek. Street-ready. Our best-selling oversized tee is a closet staple, blending comfort with effortlessly cool vibes.</p>}
        
      
    </div>
  )
}

export default ItemHeading
