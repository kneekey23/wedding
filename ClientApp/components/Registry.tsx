import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Registry extends React.Component<{}, {}> {
    public render() {
        return  <section id="gift" className="gift  pt-120 pb-120 mb-100">
        <div className="container">
           <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center mb-100">
                 <h1 className="title">Gift registry</h1>
                 <p className="lead size-m mt-20">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
              </div>
           </div>
           <div className="row relative">
              <div className="circle-dashed  bg middle">
                 <div className="round-circle before">
                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                       <circle cx="50%" cy="50%" r="50"/>
                    </svg>
                    <i className="icon-gift"></i>
                 </div>
              </div>
              <div className="col-sm-5 mt-50">
                 <div className="block-content text-right">
                    <img className="gift-reg" src="img/logo/1.png" alt="" />
                 </div>
              </div>
              <div className="col-sm-5 col-sm-offset-2 mt-50">
                 <div className="block-content text-left">
                    <img className="gift-reg" src="img/logo/2.png" alt=""/>
                 </div>
              </div>
              <div className="col-sm-5 mt-50">
                 <div className="block-content text-right">
                    <img className="gift-reg" src="img/logo/3.png" alt=""/>
                 </div>
              </div>
              <div className="col-sm-5 col-sm-offset-2 mt-50">
                 <div className="block-content text-left">
                    <img className="gift-reg" src="img/logo/4.png" alt=""/>
                 </div>
              </div>
           </div>
        </div>
     </section>;
    }
}

