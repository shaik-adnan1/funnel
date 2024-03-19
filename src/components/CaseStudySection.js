// CaseStudySection.js
import React from "react";

const CaseStudySection = () => {
  return (
    <section className='case-study'>
      <div className='video-container'>
        {/* Replace with actual video or image */}
        <img src='/path-to-founder-image.png' alt='Founder' />
        <button className='play-button'>Play</button>
      </div>
      <div className='case-study-content'>
        <h2>Exclusive Free Case Study</h2>
        <ul>
          <li>Importance of website</li>
          <li>How an effective website grows your business</li>
          <li>Build your effective website instantly</li>
        </ul>
        <button className='watch-now-button'>Watch Now For FREE</button>
      </div>
    </section>
  );
};

export default CaseStudySection;
