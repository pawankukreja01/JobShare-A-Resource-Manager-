import React from "react";
import video1 from  "./pexels-tima-miroshnichenko-6550419 (1).mp4";
import "./Common.css";
function Full()
{
    return (
            <>
             <header className="out">
      <div className="video_container">
        <video autoPlay loop muted className='backgroundvid'>
          <source
            src={video1}
            type="video/mp4"
          />
        </video>
      </div>
    </header>
            </>
    );
}

export default Full;