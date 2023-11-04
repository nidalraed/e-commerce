import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';


function Hero() {

  return (
<div class="hero">
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://assets.littlebirdie.com.au/uploads/sale_event/sale_event_image/100939/auto_banner.jpeg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>

  </div>
</div>

  );
}

export default Hero;
