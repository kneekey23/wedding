import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Friends extends React.Component<{}, {}> {
    public render() {
        return  <section id="friend" className="friend bg-grey pt-120 pb-120">
        <div className="container">
           <div className="row">
              <div className="col-sm-12 text-center mb-100">
                 <h1 className="title">Our best friends</h1>
                 <p>We are lucky to have them in our side</p>
              </div>
           </div>
           <div className="row">
              <div className="col-sm-4  col-sm-offset-2 text-center">
                 <div className="img-round">
                    <div className="img"><img src="img/13.png" alt=""/></div>
                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                       <circle cx="50%" cy="50%" r="50" />
                    </svg>
                 </div>
              </div>
              <div className="col-sm-4  text-center">
                 <div className="img-round ">
                    <div className="img"><img src="img/12.png" alt=""/></div>
                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                       <circle cx="50%" cy="50%" r="50" />
                    </svg>
                 </div>
              </div>
              <div className="col-sm-4 col-sm-offset-2 text-center">
                 <h2 className="heavy mt-20">Lisa Anderton<span>Bridesmaid </span></h2>
              </div>
              <div className="col-sm-4  text-center">
                 <h2 className="heavy mt-20">Jimmy Nicholson<span>Groomsman </span></h2>
              </div>
           </div>
           <div className="row">
              <div className="col-sm-6 col-sm-offset-3 text-center mt-50">
                 <div className="circle-dashed bg green relative">
                    <div className="round-circle  green before">
                       <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                          <circle cx="50%" cy="50%" r="50"/>
                       </svg>
                       <i className="icon-quote"></i>
                    </div>
                 </div>
                 <div className="block-quote">
                    <blockquote className="mt-20">Friendship... is not something you learn in school. But if you haven't learned the meaning 
                       of friendship, you really haven't learned anything.
                    </blockquote>
                    <h2 className="heavy uppercase mt-20">We love you Lisa and Jimmy</h2>
                 </div>
              </div>
           </div>
        </div>
     </section>;
    }
}