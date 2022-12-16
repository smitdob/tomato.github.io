import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../Common/slider/NextArrow';
import PreArrow from '../../Common/slider/PreArrow';
import './DileveryCollections.css';
import DileveryItem from './DileveryItem/DileveryItem';
const DileveryItems =  [
    {
        id:1,
        title:'Pizza',
        cover:"https://b.zmtcdn.com/data/pictures/chains/5/18575885/3a12ece4f7c57200da8ae68d9b558f8c_o2_featured_v2.jpeg?output-format=webp"
    },
    {
        id:2,
        title:'Burger',
        cover:"https://b.zmtcdn.com/data/pictures/8/19472528/5a7d2ceac886c2c831f4888c49fab73a_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id:3,
        title:'Rolls',
        cover:"https://b.zmtcdn.com/data/pictures/chains/1/19131311/81cab239d11c646e76cc35b01b25c180_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id:4,
        title:'Cake',
        cover:"https://b.zmtcdn.com/data/dish_photos/870/f5ef4555e45da8fabf5a052cca803870.jpg?output-format=webp"
    },
    {
        id:5,
        title:'Biryani',
        cover:"https://b.zmtcdn.com/data/pictures/8/19283698/c197c170b18d124d53dd7f8438f3ba7c_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id:6,
        title:'Chaat',
        cover:"https://b.zmtcdn.com/data/dish_photos/794/9b1b5596eeef08bc55d981096915a794.jpg?output-format=webp"
    },
    {
        id:7,
        title:'Ice Cream',
        cover:"https://b.zmtcdn.com/data/pictures/chains/2/3800452/2ce6cd59533cfd11f057e5a424441252_o2_featured_v2.jpg?output-format=webp"
    },
    {
        id:8,
        title:'Sandwhich',
        cover:"https://b.zmtcdn.com/data/dish_photos/6ac/dbef24e130904bd784013458118aa6ac.jpg"
    },
    {
        id:9,
        title:'Chole Bhature',
        cover:"https://b.zmtcdn.com/data/dish_photos/dbb/fbd0b461d3c2a6bcced116f25bcb3dbb.jpg"
    },
    {
        id:10,
        title:'Samosa',
        cover:"https://b.zmtcdn.com/data/dish_photos/b19/89aa3086b10c67994ab8830077124b19.jpg"
    }
];
const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow:  <PreArrow/>,
    autoplay: true,
    autoplaySpeed: 2000,
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
            slidesToScroll: 1,
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
        },
        {
          breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false,
            dots: false
          }
        }
      ]
};
const DileveryCollections = (props) => {
  return (
    <>
        <div className="dilevery-collection container-md">
            <div className="max-width">
                <div className='collection-title'> Eat What Makes You Happy</div>
                <Slider {...settings}>
                    {DileveryItems.map((item)=>{
                        return <DileveryItem item={item}  key={item.id}/>
                    })}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default DileveryCollections