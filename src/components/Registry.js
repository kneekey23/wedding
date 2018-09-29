import React, { Component } from 'react';
//import { RouteComponentProps } from 'react-router';


export class Registry extends React.Component {
    render() {
        return ( <section id="gift" className="gift  pt-120 pb-120 mb-100">
        <div className="container">
           <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center mb-100">
                 <h1 className="title">Gift registry</h1>
              </div>
           </div>
           <div className="row relative">
                <div className="col-sm-4">
                    <p className="lead size-m mt-20">The best present you could possibly give us is the celebration of our marriage. However, if you’d like to spoil us we’ve picked out a few items, activities, and charities that pique our interests.</p>
                </div>
              <div className="col-sm-4 registryBlock">
                 <div className="block-content">
                 <a className="btn" href="https://www.travelersjoy.com/nickiandjustin23">
                    <img className="gift-reg travelersjoy" src="https://www.travelersjoy.com/images/logos/registry.png" alt="" />
                    <span className="registryText">Traveler's Joy</span>
                    </a>
                 </div>
              </div>
              <div className="col-sm-4 registryBlock">
                 <div className="block-content">
                 <a className="btn" href="https://www.amazon.com/wedding/nicole-klein-justin-stone-coronado-may-2019/registry/7KJV4VOZ1QU0">
                    <img className="gift-reg" src="img/amazon.png" alt="" />
                    <span className="registryText">Amazon Registry</span>
                    </a>
                 </div>
              </div>
           </div>
           <div>
               <div className="col-sm-offset-4 col-sm-4 registryBlock">
               <div className="block-content">
                 <a className="btn" href="https://www.potterybarn.com/registry/qfrh7prlxk/registry-list.html">
                    <img className="gift-reg" src="img/pb.png" alt="" />
                    <span className="registryText">Pottery Barn</span>
                    </a>
                 </div>
               </div>
           </div>
        </div>
     </section>)
    }
}

