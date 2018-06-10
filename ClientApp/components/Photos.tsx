import * as React from 'react';
//import { RouteComponentProps } from 'react-router';

export class Photos extends React.Component<{}, {}>{

    public render() {
        return  <section id="album" className="album bg-grey pt-120 pb-120">
                    <div className="container">
           <div className="row mb-30">
                 <h2 className="indent">Photo album</h2>
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/6.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/6.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/7.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/7.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/8.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/8.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
           </div>
           <div className="row ">
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/9.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/9.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/10.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/10.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 " >
                 <div className="block-img">
                    <a href="img/11.jpg" className="venobox">
                       <div className="background-img">
                          <img alt="" src="img/11.jpg" />
                       </div>
                    </a>
                 </div>
              </div>
           </div>
        </div>
     </section>;
    }

}
