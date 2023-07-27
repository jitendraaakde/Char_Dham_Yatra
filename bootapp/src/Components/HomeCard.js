import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.css';
import Kedarnath from '../image/Kedarnath.jpeg';
import Badrinath from '../image/Badrinath.jpeg';
import Gangotri from '../image/Gangotri.jpeg';
import Yamunotri_Feature from '../image/Yamunotri_feature.jpg';
import Agent_Logo from '../image/agent-logo.png';
import Dharamshala from '../image/dharamshala.png';
import Hotel from '../image/hotel.png';
import HomeStay from '../image/stay-home.png';
import TouristPlace from '../image/tourish-places.png';
import MarketPlace from '../image/market.png';
import Tours from '../image/Tours.jpg';
import TempleTiming from '../image/Temple-Timing.png';
import BestTiming from '../image/Best-Timing.png';
import Booking from '../image/Booking.png';
import Hospital from '../image/Hospital.png';

export default function HomeCard() {
  return (
    <>
      <div>
        <h2>EXPLORE MORE</h2>
        <div className='cooking-area'>
          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/agent-list">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Agent_Logo} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/agent-list" className="cooking-area-title">
                  Agent List
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/dharamshala">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Dharamshala} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/dharamshala" className="cooking-area-title">
                  Dharamshala
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/hospital">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Hospital} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/hospital" className="cooking-area-title">
                  Hospitals
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/homestay">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={HomeStay} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/homestay" className="cooking-area-title">
                  Home Stay
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="https://uttarakhandtourism.gov.in/activity/char-dham">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Tours} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="https://uttarakhandtourism.gov.in/activity/char-dham" className="cooking-area-title">
                  Tours
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/best-timing">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={BestTiming} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/best-timing" className="cooking-area-title">
                Best Timing For Journey
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/booking">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Booking} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/booking" className="cooking-area-title">
                Booking
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/booking">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={TouristPlace} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/booking" className="cooking-area-title">
                  Tourist Places
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/hotel">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={Hotel} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/hotel" className="cooking-area-title">
                  Hotel
                </Link>
              </h2>
            </div>
          </div>

          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/temple-timing">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={TempleTiming} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/temple-timing" className="cooking-area-title">
                  Temple Timing
                </Link>
              </h2>
            </div>
          </div>


          <div className="widget Image" data-version="2" id="Image2">
            <div className="widget-content">
              <div className="cooking-area-img">
                <Link to="/p/html-simplified-series.html">
                  <img alt="Learn HTML" height="100" id="Image2_img" src={MarketPlace} width="100" />
                </Link>
              </div>
            </div>
            <div className="cooking-area-title">
              <h2>
                <Link to="/p/html-simplified-series.html" className="cooking-area-title">
                  Market Places
                </Link>
              </h2>
            </div>
          </div>




        </div>
      </div>




























      <div>
        <h2>EXPLORE MORE</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '2rem 1.1rem'
        }}>
          <Link to="/kedarnath" className="cardHover">
            <img src={Kedarnath} alt="" style={{
              height: '14rem',
              width: '14rem',
              margin: '1rem 1.1rem 1.1rem 1.1rem',
              cursor: 'pointer',
              borderRadius: '1rem'
            }} />
          </Link>
          <Link to="/badrinath" className='cardHover'>
            <img src={Badrinath} alt="" style={{
              height: '14rem',
              width: '14rem',
              margin: '1rem 1.1rem 1.1rem 1.1rem',
              cursor: 'pointer',
              borderRadius: '1rem'
            }} />
          </Link>
          <Link to="/gangotri" className='cardHover'>
            <img src={Gangotri} alt="" style={{
              height: '14rem',
              width: '14rem',
              margin: '1rem 1.1rem 1.1rem 1.1rem',
              cursor: 'pointer',
              borderRadius: '1rem'
            }} />
          </Link>
          <Link to="/yamunotri" className='cardHover'>
            <img src={Yamunotri_Feature} alt="" style={{
              height: '14rem',
              width: '14rem',
              margin: '1rem 1.1rem 1.1rem 1.1rem',
              cursor: 'pointer',
              borderRadius: '1rem'
            }}></img>
          </Link>
        </div>
      </div>
    </>
  )
}