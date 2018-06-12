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
           <div className="col-sm-5 mt-50">
           <p className="lead size-m mt-20">The best present you could possibly give us is the celebration of our marriage. However, if you’d like to spoil us we’ve picked out a few items, activities, and charities that pique our interests.</p>

           </div>
              <div className="circle-dashed  bg middle">
                 <div className="round-circle before">
                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                       <circle cx="50%" cy="50%" r="50"/>
                    </svg>
                    <i className="icon-gift"></i>
                 </div>
              </div>
              <div className="col-sm-5 mt-50 registryBlock">
                 <div className="block-content">
                 <a href="https://www.travelersjoy.com/nickiandjustin23">
                    <img className="gift-reg" src="https://www.travelersjoy.com/images/logos/registry.png" alt="" />
                    <p className="registryText"><span>Traveler's Joy</span> <span>Honeymoon Registry</span></p>
                    </a>
                 </div>
              </div>
           </div>
        </div>
     </section>)
    }
}

