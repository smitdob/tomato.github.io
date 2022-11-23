import React from 'react'
import './Collections.css'
import Slider from "react-slick";
import NextArrow from '../../Common/slider/NextArrow';
import PreArrow from '../../Common/slider/PreArrow';
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow:  <PreArrow/>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
        nextArrow: false,
        prevArrow: false,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
        nextArrow: false,
        prevArrow: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        dots: false
      }
    }
  ]
};
const Collections = ({list}) => {
  return (
    <>
    <div className="collection-wrapper container-md">
        <div className='collection'>   
            <div className="collection-title">Collection</div>
            <div className="collection-subtitle-row">
                <div className="collection-subtitle-text">
                  Explore curated lists of top restaurants,cafes,pubs in surat
                </div>
                <div className="collection-location">
                    <div>All Collections in Surat</div>
                    <div><i className="fa-solid fa-caret-right"></i></div>
                </div>
            </div>
            <Slider {...settings}>
              {list.map((item)=>{
                return <div key={item.id}>
                  <div className='collection-cover'>
                    <img src={item.cover} alt={item.title } className='collection-imng'/>
                    <div className="gredient-bg"></div>
                    <div className='collection-card-title'>{item.title}</div>
                    <div className="collection-card-subtitle">
                      <div>{item.places}</div>
                      <i className="fa-solid fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              })}
            </Slider>
        </div>
    </div>
    </>
  )
}

export default Collections