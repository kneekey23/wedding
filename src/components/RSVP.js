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
         formValid: false,
         showPlusOneForm: true,
         guestFirstName: '',
         guestLastName: '',
         guestFoodChoice: 'fish',
         guestDietaryRestrictions: ''
      }
      this.findInvite = this.findInvite.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleDietaryRestrictionChange = this.handleDietaryRestrictionChange.bind(this);
      this.handleGuestDietaryRestrictionChange = this.handleGuestDietaryRestrictionChange.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.next = this.next.bind(this);
      this.back = this.back.bind(this);
      this.handleAttendingRadio = this.handleAttendingRadio.bind(this);
      this.handleFoodRadio = this.handleFoodRadio.bind(this);
      this.sendRsvp = this.sendRsvp.bind(this);
      this.handlePlusOneRadio = this.handlePlusOneRadio.bind(this);
      this.sendGuest = this.sendGuest.bind(this);
      this.handleGuestFirstNameChange = this.handleGuestFirstNameChange.bind(this);
      this.handleGuestLastNameChange = this.handleGuestLastNameChange.bind(this);
      this.updatePlusOneStatus = this.updatePlusOneStatus.bind(this);
   }

   handleFirstNameChange(e){
      let value = e.target.value;
      this.setState({firstName: value}, () => { this.validateField("firstName", value) });
   }

   handleLastNameChange(e) {
      let value = e.target.value;
      this.setState({lastName: value}, () => { this.validateField("lastName", value) });
   }

   handleDietaryRestrictionChange(e, i) {
      let guests = this.state.guests;
      guests[i].dietaryRestrictions = e.target.value;
      this.setState({guests: guests});
   }

   handleGuestDietaryRestrictionChange(e) {
      let value = e.target.value;
      this.setState({guestDietaryRestrictions: value});
   }

   handleGuestFirstNameChange(e) {
      let value = e.target.value;
      this.setState({guestFirstName: value}, () => {this.validateField("firstName", value)});
   }

   handleGuestLastNameChange(e) {
      let value = e.target.value;
      this.setState({guestLastName: value}, () => {this.validateField("lastName", value)});
   }

   handleAttendingRadio(e, i) {
      let guests = this.state.guests;
      guests[i].attending = this.stringToBool(e);
      this.setState({guests: guests});
   }

   handleFoodRadio(e, i) {
      let guests = this.state.guests;
      guests[i].foodChoice = e;
      this.setState({guests: guests});
   }

   handlePlusOneRadio(e) {
      let answer = this.stringToBool(e);
      this.setState({showPlusOneForm: answer});
   }

   handlePlusOneFoodChoice(e) {
      this.setState({guestFoodChoice: e});
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
      this.setState({ show: false, index: 0 });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

   capitalizeFirst(string) 
   {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }  

    stringToBool(value) {

      return (value == 'true');
    }
  

   findInvite() {
      if(!this.state.formValid){
         return;
      }
      let firstName = this.state.firstName.toLowerCase().replace(/ /g, '');
      let lastName = this.state.lastName.toLowerCase().replace(/ /g, '');
      let url = `${API_ROOT}guest?firstName=${firstName}&lastName=${lastName}`;
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
             
            let guests = result.map((guest) => {
               guest.firstName = this.capitalizeFirst(guest.firstName);
               guest.lastName = this.capitalizeFirst(guest.lastName);
               return guest;
            })
            console.log(guests);
            this.setState({guests: guests}, () => {
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
         //lowercase the names again before submitting
       val.firstName = val.firstName.toLowerCase();
       val.lastName = val.lastName.toLowerCase();

       if(!val.attending){
          val.foodChoice = "none";
       }
       if(val.attending && (val.foodChoice == "none" || val.foodChoice == undefined)){
          //default food choice
          val.foodChoice = "fish";
       }
       if(val.dietaryRestrictions === undefined){
          val.dietaryRestrictions = "none";
       }
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

   sendGuest() {
      let url = `${API_ROOT}guest`;

      let mainGuest = this.state.guests.filter(guest => guest.plusOne == true)[0];

      let newGuest = {
         firstName: this.state.guestFirstName,
         lastName: this.state.guestLastName,
         address: mainGuest.address,
         foodChoice: this.state.guestFoodChoice,
         email: mainGuest.email,
         groupId: mainGuest.groupId,
         dietaryRestrictions: this.state.guestDietaryRestrictions,
         attending: true
      }

      fetch(url, {
         method: 'PUT',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(newGuest)
         })
         .then(response => response.json())
         .then((result) => {
               let guests = this.state.guests
               guests.push(newGuest);
               const prevIndex = this.state.index;
               this.setState({guests: guests, showPlusOneForm: false}, () => {
                 
                 this.next();

               });

               //update main guest status of plus one to false
               this.updatePlusOneStatus(mainGuest);

         },
         (error) => {
            toast.error('There was an error with your guest submission. Please try submitting your guest again.', {
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

   updatePlusOneStatus(mainGuest) {
      let url = `${API_ROOT}status`;
      //lowercase first and last name for query
      mainGuest.firstName = mainGuest.firstName.toLowerCase();
      mainGuest.lastName = mainGuest.lastName.toLowerCase();
      fetch(url, {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(mainGuest)
         })
         .then(response => response.json())
         .then((result) => {},
         (error) => {
            toast.error('There was an error with your guest submission. Please try submitting your guest again.', {
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

    render() {
      let CarouselConfirmationPage;
      let CarouselPlusOnePage;
      let confirmIndex = this.state.showPlusOneForm ? this.state.guests.length + 1 : this.state.guests.length;
      
      if(this.state.guests.length > 0){
         CarouselConfirmationPage = <Carousel.Item key={confirmIndex}>
                                       <p className="mb-10">Are your details correct? Please confirm before submitting.</p>
                                       {this.state.guests.map((guest) => {
                                          let icon;
                                          console.log(guest.attending);
                                          if(guest.attending){
                                             icon = <FontAwesomeIcon className="mr-5 attendingCheck" icon="check" />
                                          }
                                          else{
                                             icon = <FontAwesomeIcon className="mr-5 attendingX" icon="times" />
                                          }
                                          return (<div key={guest.firstName + 1} className="rsvpGuestName mb-10">
                                                   {icon}
                                                   {guest.firstName + ' ' + guest.lastName}
                                                   </div>)
                                       })}
                                       <Button onClick={this.sendRsvp} className="rsvp-modal-button">Send Rsvp</Button>
                                    </Carousel.Item>
      }
      if(this.state.guests.length > 0 && this.state.guests.filter(guest => guest.plusOne == true).length > 0 && this.state.showPlusOneForm){
         CarouselPlusOnePage = <Carousel.Item key={this.state.guests.length}>
                                 <p className="mb-10">Please enter your guest's name</p>
                                 <form className="registry-form">
                                 <div className="panel">
                                    <FormErrors formErrors={this.state.formErrors} />
                                 </div>
                                 <div className="form-group">
                                    <input type="text" name="GuestFirstName" className="form-control" value={this.state.guestFirstName} onChange={this.handleGuestFirstNameChange} placeholder="First Name" />
                                 </div>
                                 <div className="form-group">
                                    <input type="text" name="GuestLastName" className="form-control" value={this.state.guestLastName} onChange={this.handleGuestLastNameChange} placeholder="Last Name" />
                                 </div>
                                 <div className="radioGroupExtra mb-10">
                                    <span className="radioGroupExtra">Please indicate food preference:</span>
                                    <RadioGroup name="guestfoodchoice" selectedValue={this.state.guestFoodChoice} onChange={(e) => this.handlePlusOneFoodChoice(e)} className="radioGroup">
                                       <Radio id="fish1" value="fish"/><label className="leftAttendingLabel" htmlFor="fish1"><FontAwesomeIcon className="mr-5" icon="fish" />Fish</label>
                                       <Radio id="meat1" value="meat"/><label className="rightAttendingLabel" htmlFor="meat1"><FontAwesomeIcon className="mr-5" icon="drumstick-bite" />Meat</label>
                                    </RadioGroup>
                                 </div>
                                 <div className="form-group mt-10">
                                    <label className="mb-10" htmlFor="comment">Dietary Restrictions:</label>
                                    <textarea className="form-control" rows="3" value={this.state.guestDietaryRestrictions} onChange={(e) => this.handleGuestDietaryRestrictionChange(e)}></textarea>
                                 </div>
                                 <Button onClick={this.sendGuest} className="rsvp-modal-button">Submit Guest</Button>
                                 </form>
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
                       <div className="input-columns clearfix mb-10">
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
               let plusOneAsk;
               if(guest.plusOne){
                  plusOneAsk = <div className="radioGroupExtra">
                                 <span className="radioGroupExtra">RSVP for your plus one?</span>
                                 <RadioGroup name={'plusone' + i } selectedValue={this.state.showPlusOneForm.toString()} onChange={(e) => this.handlePlusOneRadio(e)} className="radioGroup">
                                    <Radio id={'yes' + guest.firstName + 1} value="true"/><label className="leftAttendingLabel" htmlFor={'yes' + guest.firstName + 1}>Yes</label>
                                    <Radio id={'no' + guest.firstName + 2} value="false"/><label className="rightAttendingLabel" htmlFor={'no' + guest.firstName + 2}>No</label>
                                 </RadioGroup>
                              </div>
               }
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
                              <RadioGroup name={'attending' + i} selectedValue={guest.attending == undefined ? true : guest.attending.toString()} onChange={(e) => this.handleAttendingRadio(e, i)} className="radioGroup">
                              <Radio id={'attending' + guest.firstName + i} value="true"/><label className="leftAttendingLabel" htmlFor={'attending' + guest.firstName + i}>Accept</label>
                              <Radio id={'regret' + guest.lastName + i} value="false"/><label className="rightAttendingLabel" htmlFor={'regret' + guest.lastName + i}>Regret</label>
                              </RadioGroup>
                              <div className="radioGroupExtra">
                                 <span className="radioGroupExtra">Please indicate food preference:</span>
                                 <RadioGroup name={'food' + i } selectedValue={guest.foodChoice == undefined || guest.foodChoice == 'none' ? 'fish' : guest.foodChoice.toString()} onChange={(e) => this.handleFoodRadio(e, i)} className="radioGroup">
                                    <Radio id={'fish' + guest.firstName + 1} value="fish"/><label className="leftAttendingLabel" htmlFor={'fish' + guest.firstName + 1}><FontAwesomeIcon className="mr-5" icon="fish" />Fish</label>
                                    <Radio id={'meat' + guest.firstName + 2} value="meat"/><label className="rightAttendingLabel" htmlFor={'meat' + guest.firstName + 2}><FontAwesomeIcon className="mr-5" icon="drumstick-bite" />Meat</label>
                                 </RadioGroup>
                              </div>
                              <div className="form-group mt-10">
                                 <label htmlFor="comment"className="pb-10">Dietary Restrictions:</label>
                                 <textarea className="form-control" rows="3" value={guest.dietaryRestrictions === undefined ? '': guest.dietaryRestrictions.toString()} onChange={(e) => this.handleDietaryRestrictionChange(e, i)}></textarea>
                              </div>
                              {plusOneAsk}
                        </div>
                        <div className="mt-20">
                        <Button className="btn rsvp-modal-button" onClick={this.next}>Next</Button>
                        </div>
                     </div>
               </Carousel.Item>)
                  })}
                  {CarouselPlusOnePage}
                  {CarouselConfirmationPage}
            </Carousel>
          </Modal.Body>

        </Modal>
     </section>)

    }
}

