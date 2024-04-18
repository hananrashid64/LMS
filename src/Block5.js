import React from 'react'
import './Block5.css';
const Block5 = () => {
  return (
    <div className='block5'>
      <div className='event-img'>
        <img src="images/event photo.png" alt=" "/>

        <div className='event'>
            <h2>Events</h2>
            <p>The is not just a institute for prayers rather it is
             a community center for all. The Center is committed to
              preserving an Islamic identity, building and supporting
               a viable Muslim community, promoting a compre-hensive 
               Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad S.A.W</p>

            <div className='fullBlock'>
            <div className='box'>
               <h2>Ramazan Workshop</h2>
               <p>Lorem ipsum dolor sit amet consectetur. Hac.</p>
               <p>10:00 Pm - 4:00 Am</p><br/>
               <span>Lorem ipsum dolor sit amet consectetur. Egestas netus tristique urna sem ipsum volutpat. Vitae.</span>
               <hr></hr>
               <h1>View Event Details </h1>


                <h4>MAR<br/><span>04</span> </h4>
                
                
            </div>
               
                {/* <div className='march'>
                    march
                </div> */}
               </div>
        </div>
      </div>
      <div className='lowerPara'>Alhamdulillah We Have Reached Over</div>

      <div className='block5cards'>
        <div className='card1B5'>
        <h5>Students</h5>
            <div className='ratings'>
                <h4>20k+</h4>
            </div>
        
        </div>

        <div className='card1B5'>
        <h5>Instructors</h5>
        <div className='ratings'>
        <h4>12+</h4>
            </div>
        </div>

        <div className='card1B5'>
        <h5>Courses</h5>
        <div className='ratings'>
        <h4>18+</h4>
            </div>
        </div>

        <div className='card1B5'>
            <h5>Positive Reviews</h5>
            <div className='ratings'>
            <h4>5k+</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Block5
