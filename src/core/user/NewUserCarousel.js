import React, { useContext } from 'react'
import Slider from "react-slick";
import MainPageContext from '../../contexts/MainPage-context'
import '../styles/carousel.css'
import search from '../../images/search.jpg'
import profile from '../../images/profile.jpg'
import post from '../../images/post.jpg'

export default function NewUserCarousel(props) {
    const {mainPageInfo,dispatch} = useContext(MainPageContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:true,
        useCSS:true
      };
    return (
        <Slider style={{width:'90vw',margin:'0 auto'}} {...settings}>
        <div className={"section"}  >
           <div class="container_main">
        <p>
        {mainPageInfo.name}
        <br/>
        Welcom!
        </p>
        <hr/>
        <p>
        Since you are not following any users yet, it would be a good time to take a tour of the place
        </p>
    </div>
        </div>
        <div class="section">
            <div class="container_main">
            <img className={'fit_image'} src={profile} />
            </div>
        </div>
        <div class="section">
            <div class="container_main">
            <img className={'fit_image'} src={search} />
            </div>
        </div>
        <div class="section">
            <div class="container_main">
            <img className={'fit_image'} src={post} />
            </div>
        </div>
        <div className={"section"}  >
           <div class="container_main">
        <p>
        Thank you! 
        <br/>
        And good luck
        </p>
        <hr/>
        <p>
        To get out of the apprentice mode you are welcome to follow the first user you want
        </p>
    </div>
        </div>
      </Slider>
    )
}
