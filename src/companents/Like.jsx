import React from 'react'
import "../style/like.css"
import rasm1 from "../img/#.png"
import Hero2_card from './Hero2_card'
function Like() {
  return (
    <section className='like'>
        <div className="container">
<h1>You might also like...</h1>
<div className="like_wrapper">
  <div className="like_con1">
  <Hero2_card rasm={rasm1} span="Bottle"/>

  </div>
  <div className="like_con2">
  <Hero2_card rasm={rasm1} span="Bottle"/>

  </div>
  <div className="like_con3">
  <Hero2_card rasm={rasm1} span="Bottle"/>

  </div>

</div>
        </div>
    </section>
  )
}

export default Like
