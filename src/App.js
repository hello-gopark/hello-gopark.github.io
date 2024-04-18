import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
function NearestParking() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  const url2 = `https://axxx.pythonanywhere.com/{'latitude':${latitude}, 'longitude':${longitude}}`;
  return (
    <div>
      <a href={url2} target="_blank" rel="noopener noreferrer">
        <button>Try GoPark</button>
      </a>
    </div>
  );
}
function App() {
  return (
    <div>
      <header>
        <a href="#opening"><h2>GoPark</h2></a>
        <nav>
            <a href="#about-us">About Us</a>
            <a href="#impact">Impact</a>
            <a href="#people">People</a>
            <a href="#subscription">Subscription</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <video autoPlay muted width="100%" loop>
            <source src="/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag
        </video>
        <div id="opening">
            <div className="content">
            <div>  
                <h1>Introducing GoPark</h1>
                    <h3>An Environmentally Innovative Solution For Traffic</h3><hr/>
                    {/* <a href="./GoPark.pdf" download><button>Download Research</button></a> */}
                </div>
            </div>
        </div>
        <div id="about-us">
            <h1>About Us</h1>
            <div className="content">
                <div>
                    <b>GoPark - a groundbreaking project aimed at transforming parking and traffic in Hong Kong.</b>
                    <p>One of the primary problems being addressed by the Green Deck project is the extremely congested traffic around the tunnel area in Hong Kong. To alleviate this issue, GoPark provides real-time guidance to drivers, helping them navigate to available parking spots.</p>
                    <p>Another concern involves poor air quality and lack of healthy living in the community. By encouraging drivers to quickly find parking spots, the project reduces unnecessary idling, thereby minimizing vehicle emissions and enhancing air quality.</p>
                    <NearestParking/>
                </div>
                <img src="app.png" className="wrapper" ></img>
            </div>
        </div>
        <div id="impact">
            <h1>Impact</h1>
            <div className="content">
                <h2 className="subtitle"></h2>
                <div className="left">
                    <img src="a1.jpg" className="image"/>
                    <div>
                        <h2>Reducing circling for parking</h2>
                        <p>By providing real-time guidance to drivers about nearby available parking spaces, GoPark reduces traffic congestion by guiding drivers to adjacent parking spaces in real time. This decreases vehicle idling, a key air pollutant. </p>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Streamlining parking processes</h2>
                        <p>By utilizing technology like sensors and data analysis, GoPark can guide drivers to vacant spots effectively, ensuring that parking spaces are utilized efficiently. This streamlined approach minimizes the time spent entering and exiting parking facilities.</p>
                    </div>
                    <img src="a2.jpg" className="image"/>
                </div>
                <div className="left">
                    <img src="a3.jpg" className="image"/>
                    <div>
                        <h2>Reducing double and illegal parking</h2>
                        <p>By providing real-time information about available parking spaces, GoPark helps discourage double-parking and illegal parking by guiding drivers to legitimate and convenient parking options, thereby reducing disruptions to traffic flow.</p>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Promoting alternative modes of transport</h2>
                        <p>By providing drivers with accurate information about parking availability, they may be more willing to park their vehicles in convenient locations and utilize other modes of transportation, such as such as public transit, walking, or cycling for their daily commutes.</p>
                    </div>
                    <img src="a4.jpg" className="image"/>
                </div>
                <div className="left">
                    <img src="a5.jpg" className="image"/>
                    <div>
                        <h2>Supporting sustainable urban planning</h2>
                        <p>By optimizing space utilization, GoPark encourages the development of green infrastructure, which helps absorb pollutants, enhance biodiversity, and create healthier urban environments.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div id="people">
            <h1>People</h1>
            <div className="content">
                <div className="entry">
                    <img src="l1.jpg" className="logo"/>
                    <h2>Dylan</h2>
                    <h4>Year 2 COMP</h4>
                    <a href="https://www.linkedin.com/in/dylanharyoto/" target="_blank"><button>View Profile</button></a>
                </div>

                <div className="entry">
                    <img src="l2.jpeg" className="logo"/>
                    <h2>Awwab</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/awwabh/" target="_blank"><button>View Profile</button></a>
                </div>

                <div className="entry">
                    <img src="l3.jpg" className="logo"/>
                    <h2>Manish</h2>
                    <h4>Year 2 COMP</h4>
                    <a href="https://www.linkedin.com/in/rai-manish-cs/" target="_blank"><button>View Profile</button></a>
                </div>
                <div className="entry">
                    <img src="l4.jpg" className="logo"/>
                    <h2>Sashenka</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/sashenka-gamage-2001/" target="_blank"><button>View Profile</button></a>
                </div>
                <div className="entry">
                    <img src="l5.jpg" className="logo"/>
                    <h2>Phurinut</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/phurinut/" target="_blank"><button>View Profile</button></a>
                </div>
            </div>
        </div> */}

        <div id="subscription">
            <h1>Subscription</h1>
            <div className="content">
                <div className="entry">
                    <img src="s1.jpg" className="logo"/>
                    <h2>GoBasic</h2>
                    <h4>Free version of GoPark, limited features.</h4>
                    <ul>
                      <li><h3>&#x2713; Basic parking search</h3></li>
                      <li><h3>&#x2713; Real-time updates</h3></li>
                      <li><h3>&#x2713; Navigation assistance</h3></li>
                      <li><h3>&#x2713; User reviews</h3></li>
                      <li><h3>&#x2717; Ad-Free experience</h3></li>
                      <li><h3>&#x2717; Priority updates</h3></li>
                      <li><h3>&#x2717; Reserve parking slots</h3></li>
                      <li><h3>&#x2717; Weekly discount</h3></li>
                    </ul>
                    <a href="#demo"><button>Free Access</button></a>
                </div>

                <div className="entry">
                    <img src="s2.jpg" className="logo"/>
                    <h2>GoSilver</h2>
                    <h4>Unlock some features, 7 days free trial</h4>
                    <ul>
                      <li><h3>&#x2713; Basic parking search</h3></li>
                      <li><h3>&#x2713; Real-time updates</h3></li>
                      <li><h3>&#x2713; Navigation assistance</h3></li>
                      <li><h3>&#x2713; User reviews</h3></li>
                      <li><h3>&#x2713; Ad-Free experience</h3></li>
                      <li><h3>&#x2713; Priority updates</h3></li>
                      <li><h3>&#x2713; Reserve parking slots</h3></li>
                      <li><h3>&#x2717; Weekly discount</h3></li>
                    </ul>
                    <a href="https://gopark.pythonanywhere.com/parking/" target="_blank"><button>HKD$100</button></a>
                </div>

                <div className="entry">
                    <img src="s3.jpg" className="logo"/>
                    <h2>GoPremium</h2>
                    <h4>Unlock full features, 14 days free trial</h4>
                    <ul>
                      <li><h3>&#x2713; Basic parking search</h3></li>
                      <li><h3>&#x2713; Real-time updates</h3></li>
                      <li><h3>&#x2713; Navigation assistance</h3></li>
                      <li><h3>&#x2713; User reviews</h3></li>
                      <li><h3>&#x2713; Ad-Free experience</h3></li>
                      <li><h3>&#x2713; Priority updates</h3></li>
                      <li><h3>&#x2713; Reserve parking slots</h3></li>
                      <li><h3>&#x2713; Weekly discount</h3></li>
                    </ul>
                    <a href="https://gopark.pythonanywhere.com/parking/" target="_blank"><button>HKD$150</button></a>
                </div>

            </div>
        </div>

        <div id="contact">
            <h1>Contact</h1>
            <div className="content">
                <h2 className="subtitle">Drop some comments below. We value your feedback!<hr/></h2>
                <form action="https://formsubmit.co/hello.gopark@gmail.com" method="POST">
                    <input type="text" placeholder="Full Name" name="name" required/>
                    <input type="text" placeholder="Email Address" name="email" required/>
                    <input type="text" placeholder="Subject" name="subject" required/>
                    <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    <a name="submit"><button>Submit</button></a>
                </form>
                <img src="t1.png" className="me"/>
                <div>
                    <a href="https://www.linkedin.com/in/dylanharyoto/" target="_blank"><img src="i1.png" className="icon"/></a>
                    <a href="https://www.instagram.com/dylanharyoto/" target="_blank"><img src="i2.png" className="icon"/></a>
                    <a href="https://github.com/dylanharyoto?tab=repositories" target="_blank"><img src="i3.png" className="icon"/></a>
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
