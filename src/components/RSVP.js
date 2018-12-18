import React, { Component } from 'react';
import { Carousel,Modal, Button } from 'react-bootstrap';
import {API_ROOT} from '../constants';
import {RadioGroup, Radio} from 'react-radio-group';
//import { RouteComponentProps } from 'react-router';

export class RSVP extends React.Component {
   constructor(props, context){
      super(props, context);
      this.state = {
         firstName: '',
         lastName: '',
         guests: [],
         index: 0,
         direction: null,
         show: false,
         selectedAttendingRadio: 'Accept'
      }
      this.findInvite = this.findInvite.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.next = this.next.bind(this);
      this.back = this.back.bind(this);
      this.handleAttendingRadio = this.handleAttendingRadio.bind(this);
   }

   handleFirstNameChange(e){
      this.setState({firstName: e.target.value});
   }

   handleLastNameChange(e) {
      this.setState({lastName: e.target.value});
   }

   handleAttendingRadio(e, i) {
      let guests = this.state.guests;
      guests[i].attending = e;
      this.setState({guests: guests});
   }

   next() {
      const prevIndex = this.state.index;
      this.setState({
         direction: 'next',
         index: prevIndex + 1
      })
    }

    back() {
       const currentIndex = this.state.index;
       this.setState({
          direction: 'prev',
          index: currentIndex - 1
       })
    }

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  

   findInvite() {
      let url = `${API_ROOT}guest?firstName=${this.state.firstName}&lastName=${this.state.lastName}`;
      fetch(url, {
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         }
         })
         .then(response => response.json())
         .then((result) => {
            this.setState({guests: result}, () => {
               this.handleShow();
            });
            
            console.log(this.state.guests);
         },
         (error) => {
            console.log(error);
         
         })
   }

    render() {
      const { index, direction } = this.state;
        return ( <section id="rsvp" className="rsvp bg-grey pt-120 pb-120 ">
        <div className="container">
           <div className="row vertical-align">
              <div className="col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 ">
                 <h1 className="title">RSVP</h1>
                 <p className="mt-20 pd-r20 rsvpFont">Please search for your invitation here using your first and last name to rsvp and indicate your meal choice.</p>
              </div>
              <div className="col-md-5 col-sm-5 ">
                 <div className="block-registry">
                  <h2 className="heavy normal mb-30">You can RSVP to our wedding here</h2>
                    <form className="registry-form">
                       <div className="input-columns clearfix">
                          <div className="column-1">
                             <div className="column-inner">
                                <input placeholder="Enter your First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} type="text"/>
                             </div>
                          </div>
                          <div className="column-2">
                             <div className="column-inner">
                             <input placeholder="Enter your Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} type="text"/>
                             </div>
                          </div>
                       </div>
                       <button className="btn but submit" type="button" onClick={this.findInvite}>Find my invite</button>
                    </form>
                 </div>
              </div>
           </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Button onClick={this.back}>Go Back</Button>
            <Modal.Title className="rsvp-guest-counter">RSVP</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
          <span className="rsvpTitle">Nicki  &amp; Justin</span>
          <Carousel indicators={false} controls={false} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
            {this.state.guests.map((guest, i) => {

                return (<Carousel.Item key={i}>
                     <div id="view10" className="rsvp-view">
                        <p className="rsvp-guest-counter">Guest {i + 1} of {this.state.guests.length}:</p>
                        <p className="rsvp-guest-name">{guest.firstName + " " + guest.lastName}</p>
                        <div className="rsvp-events-list">
                              <div className="rsvp-event-name">Nicki & Justin's Wedding</div>
                              <div className="rsvp-event-datetime">
                                    <span>May 11, 2019</span>
                                    <span className="datetime-divider">|</span> 
                                    <span>6:00 PM</span>
                              </div>
                              <RadioGroup name={'attending' + i} selectedValue={guest.attending} onChange={(e) => this.handleAttendingRadio(e, i)}>
                                 <Radio value="true" />Accept
                                 <Radio value="false" />Regret
                              </RadioGroup>
            
                        </div>
                     </div>
               </Carousel.Item>)
                  })}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button className="rsvp-modal-button" onClick={this.next}>Next</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
     </section>)

    }
}

