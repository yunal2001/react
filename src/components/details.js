import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

import yunal from '../Assests/Yunal.jpeg';

function AboutSection() {
  return (
    <section className="sec1" id="about">
      <div className="columns is-vcentered">
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-third">
            <img className="pimg" src={yunal} width="300px" height="500px" alt="Isitha Yunal Mallawaarchchi" />
            <br />
            <div className="sub-head">
              <h3>Isitha Yunal Mallawaarchchi</h3>
            </div>
          </div>
          <div className="column is-half">
            <div>
              <h1>About Me</h1>
              <br />
              <p className="p-xl">
                I’m a first year undergraduate from university of Colombo school of computing. I’m originally from Salzburg, Austria. I spend most of my time with my friends and girlfriend. Apart from that I love playing sports and watching them as well. Guess i’m enjoying my life to the fullest. Anyway sometimes life sucks but gotta enjoy it .
                <br />
              </p>
              <div className="columns is-vcentered">
                <div className="column is-half">
                  <div className="box">
                    Name : Yunal Mallawaarchchi <br />
                    Date of birth : 11/17/2001 <br />
                    Address : Kaluthara, Sri Lanka. <br />
                  </div>
                </div>
                <div className="column is-half">
                  <div className="box">
                    University : UOC <br />
                    Email : isithayunsnjcc@gmail.com (JK) <br />
                    Mobile : +87 45636373838 (don’t call) <br />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
