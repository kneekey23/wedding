import React, { Component } from 'react';
import { Carousel,Modal, Button } from 'react-bootstrap';
import {API_ROOT} from '../constants';
import {RadioGroup, Radio} from 'react-radio-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import {FormErrors} from '../components/FormErrors';
import 'react-toastify/dist/ReactToastify.css';
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
         selectedAttendingRadio: 'Accept',
         formErrors: {firstName: '', lastName: ''},
         firstNameValid: false,
         lastNameValid: false,
         formValid: false
      }
      this.findInvite = this.findInvite.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.next = this.next.bind(this);
      this.back = this.back.bind(this);
      this.handleAttendingRadio = this.handleAttendingRadio.bind(this);
      this.handleFoodRadio = this.handleFoodRadio.bind(this);
      this.sendRsvp = this.sendRsvp.bind(this);
   }

   handleFirstNameChange(e){
      let value = e.target.value;
      this.setState({firstName: value}, () => { this.validateField("firstName", value) });
   }

   handleLastNameChange(e) {
      let value = e.target.value;
      this.setState({lastName: value}, () => { this.validateField("lastName", value) });
   }

   handleAttendingRadio(e, i) {
      let guests = this.state.guests;
      guests[i].attending = e;
      this.setState({guests: guests});
   }

   handleFoodRadio(e, i) {
      let guests = this.state.guests;
      guests[i].foodChoice = e;
      this.setState({guests: guests});
   }

   validateField(name, value) {
      let fieldValidationErrors = this.state.formErrors;
      let firstNameValid = this.state.firstNameValid;
      let lastNameValid = this.state.lastNameValid;
    
      switch(name) {
        case 'firstName':
          firstNameValid = value.length >= 2;
          fieldValidationErrors.firstName = firstNameValid ? '' : 'Please fill in a first name.';
          break;
        case 'lastName':
          lastNameValid = value.length >= 2;
          fieldValidationErrors.lastName = lastNameValid ? '': 'Please fill in a last name.';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      firstNameValid: firstNameValid,
                      lastNameValid: lastNameValid
                    }, this.validateForm);
   }

   validateForm() {
      this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid});
    }
    

   next() {
      const prevIndex = this.state.index;
      this.setState({
         direction: 'next',
         index: prevIndex + 1
      }, () => {
         if(this.state.index > 1){
            this.forceUpdate();
         }
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
      if(!this.state.formValid){
         return;
      }
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
            if(result.length > 0){
            this.setState({guests: result}, () => {
               this.handleShow();
            });
         }
         else{
            toast.error('No guests were found with that first name and last name. Please try your search again.', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               className: "toastError",
               });
         }
         },
         (error) => {
            toast.error('There was an error with your request. Please try your search again.', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               className: "toastError",
               });
         
         })
   }

   errorClass(error) { 
      return(error.length === 0 ? '' : 'has-error'); 
   }

   sendRsvp() {
      let url = `${API_ROOT}guest`;
      this.state.guests.forEach((val, i) => {
         console.log(val);
         fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(val)
            })
            .then(response => response.json())
            .then((result) => {
                  this.handleClose();
                  if(this.state.guests.length -1 == i){
                  toast.success('Your RSVP has been saved! Thanks!', {
                     position: "top-right",
                     autoClose: 5000,
                     hideProgressBar: true,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     className: "toastSuccess"
                     });
                  }
                  
            },
            (error) => {
               toast.error('There was an error with your submission. Please try submitting your rsvp again.', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  className: "toastError",
                  });
            
            })
      })

     
      

   }

    render() {
      let CarouselConfirmationPage;
      if(this.state.guests.length > 0){
         CarouselConfirmationPage = <Carousel.Item key={this.state.guests.length}>
                                       {this.state.guests.map((guest) => {
                                          let icon;
                                          if(guest.attending === 'true'){
                                             icon = <FontAwesomeIcon className="mr-5 attendingCheck" icon="check" />
                                          }
                                          else{
                                             icon = <FontAwesomeIcon className="mr-5 attendingX" icon="times" />
                                          }
                                          return (<div key={guest.firstName + 1} className="rsvpGuestName">
                                                   {icon}
                                                   {guest.firstName + ' ' + guest.lastName}
                                                   </div>)
                                       })}
                                       <Button onClick={this.sendRsvp} className="rsvp-modal-button">Send Rsvp</Button>
                                    </Carousel.Item>
      }
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
                  <h2 className="heavy normal mb-30">RSVP to our wedding here</h2>
                  <ToastContainer position="top-right" autoClose={5000} closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover/>
                  <div className="panel">
                     <FormErrors formErrors={this.state.formErrors} />
                  </div>
                    <form className="registry-form">
                       <div className="input-columns clearfix">
                          <div className="column-1">
                             <div className={`column-inner form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                                <input name="FirstName" placeholder="Enter your First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} type="text"/>
                             </div>
                          </div>
                          <div className="column-2">
                             <div className={`column-inner form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
                             <input name="LastName" placeholder="Enter your Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} type="text"/>
                             </div>
                          </div>
                       </div>
                       <button className="btn but submit" type="button" disabled={!this.state.formValid} onClick={this.findInvite}>Find my invite</button>
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
          <hr className="rsvp-hr"></hr>
          <Carousel indicators={false} controls={false} activeIndex={index} direction={direction} onSelect={this.handleSelect}>
            {this.state.guests.map((guest, i) => {

                return (<Carousel.Item key={i}>
                     <div id="view10" className="rsvp-view">
                        <p className="rsvp-guest-counter pb">Guest {i + 1} of {this.state.guests.length}:</p>
                        <p className="rsvp-guest-name">{guest.firstName + " " + guest.lastName}</p>
                        <div className="rsvp-events-list">
                              <div className="rsvp-event-name">Nicki & Justin's Wedding</div>
                              <div className="rsvp-event-datetime">
                                    <span>May 11, 2019</span>
                                    <span className="datetime-divider"> | </span> 
                                    <span>6:00 PM</span>
                              </div>
                              <RadioGroup name={'attending' + i} selectedValue={guest.attending} onChange={(e) => this.handleAttendingRadio(e, i)} className="radioGroup">
                              <Radio id={'attending' + guest.firstName} value="true"/><label className="leftAttendingLabel" htmlFor={'attending' + guest.firstName}>Accept</label>
                              <Radio id={'attending' + guest.lastName} value="false"/><label className="rightAttendingLabel" htmlFor={'attending' + guest.lastName}>Regret</label>
                              </RadioGroup>
                              <div className="foodChoice">
                              <span className="foodChoice">Please indicate food preference:</span>
                              <RadioGroup name={'attending' + i+1} selectedValue={guest.foodChoice} onChange={(e) => this.handleFoodRadio(e, i)} className="radioGroup">
                              <Radio id={'attending' + guest.firstName + 1} value="fish"/><label className="leftAttendingLabel" htmlFor={'attending' + guest.firstName + 1}><FontAwesomeIcon className="mr-5" icon="fish" />Fish</label>
                              <Radio id={'attending' + guest.lastName + 1} value="meat"/><label className="rightAttendingLabel" htmlFor={'attending' + guest.lastName + 1}><FontAwesomeIcon className="mr-5" icon="drumstick-bite" />Meat</label>
                              </RadioGroup>
                              </div>
                        </div>
                        <div className="mt-20">
                        <Button className="btn rsvp-modal-button" onClick={this.next}>Next</Button>
                        </div>
                     </div>
               </Carousel.Item>)
                  })}
                  {CarouselConfirmationPage}
            </Carousel>
          </Modal.Body>

        </Modal>
     </section>)

    }
}

