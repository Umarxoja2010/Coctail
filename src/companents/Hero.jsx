import React from 'react'
import "../style/hero.css"
import hero_img from '../img/hero_choy.png'
function Hero() {
  return (
<section className='hero'>
    <div className="hero_wrapper">
    <div className="hero_img">
<img src={hero_img} alt="" />
    </div>
    <div className="hero_content">
        <div className="hero_con">
        <h3>New arrival</h3>
        <h2> Lorem ipsum 
        dolor sit amet</h2>
        <a href="/pradakt">Shop naw</a>
        </div>
    </div>
    </div>
</section>
  )
}

export default Hero
