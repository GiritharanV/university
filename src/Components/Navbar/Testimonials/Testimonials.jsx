import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const slider = useRef();
  let tx=0;

const slideforward=()=>{
  if (tx > -50){
    tx -= 25;
  } 
  slider.current.style.transform = `translatex(${tx}%)`

}
const slidebackward=()=>{
  if (tx < 0){
    tx += 25;
  } 
  slider.current.style.transform = `translatex(${tx}%)`

}

  return (
    <div className='testimonials'>
        <img src="../../src/assets/next-icon.png" alt="" className='next-btn' onClick={slideforward} />
        <img src="../../src/assets/back-icon.png" alt="" className='back-btn'onClick={slidebackward}  />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src='../../src/assets/user-1.png'/>
                  <div>
                    <h3>Annie</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                  The supportive community,
                  state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src='../../src/assets/user-2.png'/>
                  <div>
                    <h3>John</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                  The supportive community,
                  state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src='../../src/assets/user-3.png'/>
                  <div>
                    <h3>Jacklin</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                  The supportive community,
                  state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src='../../src/assets/user-4.png'/>
                  <div>
                    <h3>Gregor</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                  The supportive community,
                  state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
          </ul>
        </div>
        

      
    </div>
  )
}

export default Testimonials
