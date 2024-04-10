import { useState } from "react";

import logo from "../../assets/logo.png";
import UserDetailsModal from "../info_modal/infoModal";
import VideoPlayer from "../video/videoPlayer";
import "./funnel.css";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

const Funnel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onModalClick = e => {
    e.preventDefault();
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div className='home-container'>
        <div className='section_1 section'>
          <div className='logo-container'>
            <img alt='company-logo' src={logo} className='logo mt-16 mb-10' />
          </div>
          <div className='hero_section'>
            <p className='text-3xl text-red-500'>NO COST CASE STUDY</p>
          </div>
          <div className='funnel_moto'>
            <p className='text-3xl mt-5 mb-10 w-full font-light'>
              We Help business people to grow their business
              <br /> Digitally by developing personalised websites
            </p>
          </div>
        </div>
        <div className='section section_2 m-8'>
          <div className='video_player_container mr-16'>
            <VideoPlayer /> {/* Your VideoPlayer component */}
          </div>

          <div className='flex flex-col items-center p-6 border-2 border-blue-600 rounded-lg max-w-lg'>
            <h2 className='text-blue-600 text-2xl leading-10 font-semibold mb-4'>
              EXCLUSIVE FREE CASE STUDY
            </h2>
            <ol className='list-decimal list-inside text-center space-y-2 mb-6'>
              <li>
                <strong>The new strategy</strong> - To achieve your 2nd source
                of income through trading without spending more time.
              </li>
              <li>
                <strong>How to become a profitable trader?</strong> - Even with
                zero knowledge you can learn our strategy and make consistent
                profits.
              </li>
              <li>
                <strong>Trade just 30 mins/day</strong> - How you can have the
                ability to earn more than your 9 to 5 job by just trading part
                time.
              </li>
            </ol>
            <button
              onClick={onModalClick}
              className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
            >
              Watch Now for FREE
            </button>
          </div>
        </div>
      </div>
      <UserDetailsModal isModalOpen={isOpen} className='user-details-modal' />{" "}
      {/* Your InfoModal component */}
    </>
  );
};

export default Funnel;
