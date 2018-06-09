import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Accomodations extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <section className="accom pt-120 pb-120 ">
        <div className="container">
           <div className="row">
              <div className="col-sm-12 text-center mb-100">
                 <h1 className="title">Where to stay</h1>
                 <p>Accommodation - information below</p>
              </div>
           </div>
           <div className="row">
              <div className="col-sm-5 col-sm-offset-1 text-center">
                 <div className="block-img">
                    <a href="img/14.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/14.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className=" lead size-s mt-30">Hotel Monaco
                    501 Geary Street
                    San Franciscio, California
                    (415) 292 - 0100
                 </p>
                 <a href="#" className="but mt-30">
                    <span>Location</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
              <div className="col-sm-5 text-center">
                 <div className="block-img">
                    <a href="img/15.jpg" className="venobox">
                       <div className="background-img" >
                          <img src="img/15.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className=" lead size-s mt-30 ">Hotel Nikko
                    222 Mason  Street
                    San Franciscio, California
                    (415) 394 - 1111
                 </p>
                 <a href="#" className="but mt-30">
                    <span>Location</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
           </div>
        </div>
     </section>;

    }
}
