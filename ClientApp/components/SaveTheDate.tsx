import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class SaveTheDate extends React.Component<{}, {}>  {
    public render() {
        return <section className="date pt-150 pb-150 overlay">
        <div className="background-img">
           <img src="img/4.jpg" alt="" />
        </div>
        <div className="container">
           <div className="row">
                 <h2 className="indent">Wedding date</h2>
              <div className="col-sm-12 text-center">
                 <div className="block-content front-p">
                    <h2 className="typo">Save the date</h2>
                    <p className="lead mt-20 text-white">Saturday May 10th, 2017 - 28 Chalmers Street, Sydney</p>
                    <span className="countdown text-white"></span>
                 </div>
              </div>
           </div>
        </div>
     </section>;
    }
}