import React from 'react'
import './Programs.css'


const Programs = () => {
  return (
    <div className='programs' >
      
            <div className="program">
                <img src='../../src/assets/program-1.png' alt=''></img>
                <div className="caption">
                <img src= '../../src/assets/program-icon-1.png' alt=''></img>
                    <p>Graduation degree</p>
                </div>
            </div>
            <div className="program">
                <img src='../../src/assets/program-2.png' alt=''></img>
                <div className="caption">
                <img src= '../../src/assets/program-icon-2.png' alt=''></img>
                    <p>Masters degree</p>
                </div>
            </div>
            <div className="program">
                <img src='../../src/assets/program-3.png' alt=''></img>
                <div className="caption">
                <img src= '../../src/assets/program-icon-3.png' alt=''></img>
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
      
 
  )
}

export default Programs
