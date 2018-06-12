import React, { Component } from 'react';
//import { RouteComponentProps } from 'react-router';

export class Accomodations extends Component{
    render() {
        return (  <section className="accom pt-120 pb-120 ">
        <div className="container">
           <div className="row">
              <div className="col-sm-12 text-center mb-100">
                 <h1 className="title">Where to stay</h1>
                 <p>Accommodation Information below</p>
              </div>
           </div>
           <div className="row">
              <div className="col-sm-5 col-sm-offset-1 text-center">
                 <div className="block-img">
                    <a href="https://hoteldel.com/" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/hdc1.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="accomm lead size-s mt-30">Hotel del Coronado  
                    1500 Orange Ave 
                    Coronado, CA 92118  
                    (619) 435-6611
                 </p>
                 <a href="https://hoteldel.com/" className="but mt-30">
                    <span>Visit Website</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
              <div className="col-sm-5 text-center">
                 <div className="block-img accomodations">
                    <a href="http://www.gloriettabayinn.com/" className="venobox">
                       <div className="background-img" >
                          <img src="img/gbi.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="accomm lead size-s mt-30 ">Glorietta Bay Inn
                    1630 Glorietta Blvd
                    Coronado, CA 92118
                    (800) 283-9383
                 </p>
                 <a href="http://www.gloriettabayinn.com/" className="but mt-30">
                    <span>Visit Website</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
           </div>
        </div>
     </section>)

    }
}
