import React from 'react'
import './Block2.css'
const Block2 = () => {
  return (
  <div className='Block2'>
    <div className='bg-img'>
  <img className="man-praying" src="images/Namaz.png" alt=""/>
  <div className='bismil-text'>
  <img className="bismillah" src="images/bismillah.png" alt=""/>
  <p>This is not just a institute for prayers rather it is a community center for all. The Center<br/>
     is committed to preserving an Islamic identity,<br/> building and supporting a viable Muslim community, promoting a <br/>
     compre-hensive Islamic way of life based on the Holy Quran and<br/> the Sunnah of Prophet Muhammad S.A.W</p>
  </div>
   
</div>
    <div className='text2'>
    {/* <p>
        <span class="first-line">Blossoming in the<br/></span> 
        <span class="first-line">Garden of<br/></span>
        <span class="second-line">Islamic Knowledge</span>
    </p> */}
    <p>Blossoming in the<br/> Garden of<br/> Islamic Knowledge</p><br/>
    <p className='capital-text'>ETHICAL & MORAL BELIEFS THAT GUIDES</p>

    <button className='btn'>Learn more</button>
    {/* <button className="signup hoverBtn">
          <a href="#">Sign Up</a>
        </button> */}

        <img src="images/Namaz(2) (1).png" alt=" "/>

    </div>
</div>

  )
}

export default Block2
