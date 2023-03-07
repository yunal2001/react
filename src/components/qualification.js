import React from "react";
import 'bulma/css/bulma.css';
import '../App.css';

import MOE from '../Assests/MOE.jpg';
import Swimming from '../Assests/Swimming.jpeg';
import Batminton from '../Assests/Batminton.jpeg';

const Qualifications = () => {
  return (
    <section className="sec1" id="contact">
      <br />
      <h1 className="heading">QUALIFICATIONS</h1>
      <br />
      <section className="column">
        <div className="columns is-vcentered">
          <div className="column is-two-third">
            <div className="self-box">
              <p style={{ textAlign: "left" }}>
                2015 Provincial English Language drama and singing competitions - Recitation 3rd place
                <br />
                <br />
                2010-2016 Zonal English Language drama and singing competitions - Recitation 1st place
                <br />
                <br />
                2019 All Island Schools U19 Badminton Championships - 2nd runners up
                <br />
                <br />
                Aqua Youth Award winner
                <br />
                <br />
                And many more..........
              </p>
              </div>
            </div>
            <div>
              <div className="vl-long"></div>
            </div>
            <div className="column is-one-third">
              <img src={MOE} width="162px" height="166px" style={{ padding: 10 }} />
              <img src={Swimming} width="162px" height="166px" style={{ padding: 10 }} />
              <img src={Batminton} width="220px" height="210px" style={{ padding: 30 }} />
            </div>
          </div>
        </section>
        <section className="sec1 contact">
          <br />
          <br />
          <h1 className="heading">Contact Me</h1>
          <section className="column">
            <div className="columns is-vcentered">
              <div className="columns is-multiline is-mobile">
                <div className="column is-half">
                  <div>
                    <br />
                    <br />
                    <section className="column">
                      <section>
                        <div className="self-box"> New Orleans,Kaluthara,Sri Lanka. <br />
                          <br />
                          <a className="item-is-link">isithayunxxnxnsnx@gmail.com</a>
                          <br />
                          <br />
                          <a className="item-is-link">+65&nbsp;332837&nbsp;333344</a>
                          <br />
                          <br />
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
  );
};

export default Qualifications;
