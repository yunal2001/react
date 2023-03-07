import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import web from '../Assests/web.jpg';

function HomeSection() {
  return (
    <section className="sec" id="home">
      <div className="columns is-vcentered">
        <div className="columns is-multiline is-mobile">
          <div className="column is-half">
            <div>
              <br />
              <br />
              <section>
                <section className="first">
                  <div className="name">
                    <h1 style={{ fontSize: 'xxx-large' }}>Yunal Mallawaarchchi</h1>
                  </div>
                  <section>
                    <div className="self-box">
                      <p>
                        I’m a 1st year student from University of Colombo school of computing. And I’m quite a fun personality who always open to get to know new people.
                      </p>
                      <br />
                      <br />
                    </div>
                  </section>
                </section>
              </section>
            </div>
          </div>
          <div className="column is-half">
            <img src={web} width="max-content" height="400px" style={{ marginTop: '100px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
