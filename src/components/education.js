import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

function Education() {
  return (
    <section className="sec1" id="education">
      <br />
      <h1 className="heading">Education</h1>
      <br />
      <br />
      <div className="columns is-vcentered">
        <div className="column is-one-third">
          <section left>
            <div className="self-box">
              <h2 className="sub-head">Bachelors Degree</h2>
              <h3 className="sub-head">University of Colombo <br />2006-present </h3>
            </div>
          </section>
        </div>
        <div>
          <div className="vl"></div>
        </div>
        <div className="column is-two-third">
          <div className="self-box">
            <p>Bsc. in Information Systems <br /> Currently on my first year at University of Colombo School of computing. </p>
          </div>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column is-one-third">
          <section left>
            <div className="self-box">
              <h2 className="sub-head">School Education</h2>
              <h3 className="sub-head">Mahanama College <br />2018-2020 </h3>
            </div>
          </section>
        </div>
        <div>
          <div className="vl"></div>
        </div>
        <div className="column is-two-third">
          <div className="self-box">
            <p>Secondary Education <br /> Passed my G.C.E A/Ls with 2 A passes and a B pass. </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Education;
