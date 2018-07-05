import React, { Component } from 'react';
//import { RouteComponentProps } from 'react-router';

export class RSVP extends React.Component {
    render() {
        return ( <section id="rsvp" className="rsvp bg-grey pt-120 pb-120 ">
        <div className="container">
           <div className="row vertical-align">
              <div className="col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 ">
                 <h1 className="title">RSVP</h1>
                 <p className="mt-20 pd-r20 rsvpFont">This section is coming soon. You will be available to RSVP online when official invitations get sent out.</p>
              </div>
              <div className="col-md-5 col-sm-5 ">
                 <div className="block-registry">
                    <h2 className="heavy normal mb-30">You can RSVP to our wedding here</h2>
                    <form className="registry-form " method="post" action="#">
                       <input placeholder="Your name" value="" id="name" name="name" type="text"/>
                       <div className="input-columns clearfix">
                          <div className="column-1">
                             <div className="column-inner">
                                <input placeholder="Guest number" value="" id="Guest" name="guest" type="text"/>
                             </div>
                          </div>
                          <div className="column-2">
                             <div className="column-inner select-input">
                                <select>
                                   <option value="volvo">I'm attending...</option>
                                   <option value="saab">All events</option>
                                   <option value="mercedes">Wedding</option>
                                   <option value="audi">Ceremony</option>
                                   <option value="audi">I'm not attending</option>
                                </select>
                             </div>
                          </div>
                       </div>
                       <button className=" btn but submit" disabled type="submit">Submit My RSVP</button>
                    </form>
                 </div>
              </div>
           </div>
        </div>
     </section>)

    }
}

