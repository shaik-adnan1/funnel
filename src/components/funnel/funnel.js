import logo from "../../assets/logo.png";
import VideoPlayer from "../video/videoPlayer";
import "./funnel.css";


const Funnel = () => {
  
  return (
    <>
      <div className='home-container'>
        <div className='section_1 section'>
          <div className='logo-container'>
            <img className='logo' src={logo} />
          </div>
          <div className='hero_section'>
            <p className='hero_heading'>NO COST CASE STUDY</p>
          </div>
          <div className='funnel_moto'>
            <p>
              We Help business people to grow their business
              <br /> Digitally by developing personalised websites
            </p>
          </div>
        </div>
        <div className="section section_2">
          <VideoPlayer />
        </div>
      </div>
    </>
  );
};

export default Funnel;
