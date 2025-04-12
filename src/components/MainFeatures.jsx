import React from 'react'
import ItemHeading from './ItemHeading'
import FeaturesItem from './FeaturesItem'
import F1 from '/Images/F1.svg'
import F2 from '/Images/F2.svg'
import F3 from '/Images/F3.svg'
import F4 from '/Images/F4.svg'

const MainFeatures = () => {
  return (
    <div>

<ItemHeading heading='Core features' subHeading='eCommerce Talks discusses tech, current trends, and insights from around the eCommerce world'/>
      

<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10 gap-8'>

<FeaturesItem heading={'On demand product'} subHeading='Some fashion stores may also sell beauty products, home decor items, and other lifestyle products.' img={F1} />
<FeaturesItem heading={'trending product'} subHeading='Some fashion stores may also sell beauty products, home decor items, and other lifestyle products.' img={F2} />
<FeaturesItem heading={'On-time delivery'} subHeading='Some fashion stores may also sell beauty products, home decor items, and other lifestyle products.' img={F3} />
<FeaturesItem heading={'online support'} subHeading='Some fashion stores may also sell beauty products, home decor items, and other lifestyle products.' img={F4} />

</div>

    </div>
  )
}

export default MainFeatures
