import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../Common/slider/NextArrow'
import PreArrow from '../../Common/slider/PreArrow';
import './TopBrand.css'
const BrandList=[
    {
        id:1,
        time:"35min",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Burger_King_1994_logo.svg/200px-Burger_King_1994_logo.svg.png"
    },
    {
        id:2,
        time:"48min",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/800px-Domino%27s_pizza_logo.svg.png"
    },
    {
        id:3,
        time:"37min",
        cover:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/640px-KFC_logo.svg.png"
    },
    {
        id:4,
        time:"5min",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
    },
    {
        id:5,
        time:"50min",
        cover:"https://e7.pngegg.com/pngimages/582/796/png-clipart-submarine-sandwich-yorkville-toronto-clemmons-subway-wrap-menu-food-text.png"
    },
    {
        id:6,
        time:"55min",
        cover:"https://yt3.ggpht.com/ytc/AMLnZu-n0HEt-uZrP51QuzVtCorHLx1nP0kRccyVe4k6GA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id:7,
        time:"15min",
        cover:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
        id:8,
        time:"18min",
        cover:"https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png"
    },
    {
        id:9,
        time:"11min",
        cover:"https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
    },
    {
        id:10,
        time:"30min",
        cover:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/640px-KFC_logo.svg.png"
    }
]
const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>
};
const TopBrand = () => {
  return (
   <>
   <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands for You</div>
        <Slider {...settings}>
        {BrandList.map((brand)=>{
            return <div key={brand.id}>
                <div className="top-brand-cover" >
                    <img src={brand.cover} alt={brand.time} className='top-brand-image' />
                </div>
                <div className='top-brand-time'>{brand.time}</div>
            </div>
        })}
        </Slider>
   </div>
   </>
  )
}

export default TopBrand