import React from 'react';
//import { RouteComponentProps } from 'react-router';

export class Accomodations extends React.Component{
    render() {
        return (  <section id="accomodation" className="accom pt-120 pb-120 ">
        <div className="container">
           <div className="row">
              <div className="col-sm-12 text-center mb-100">
                 <h1 className="title">Where To Stay</h1>
                 <p>Accommodation Information below</p>
              </div>
           </div>
           <div className="row">
              <div className="col-sm-5 col-sm-offset-1 text-center">
                 <div className="block-img">
                    <a href="https://hoteldel.com/" className="venobox">
                       <div className="background-img">
                          <img alt="hotel del coronado" src="img/hdc1.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="accomm lead size-s mt-30">Hotel del Coronado  
                    1500 Orange Ave 
                    Coronado, CA 92118  
                    (619) 435-6611
                 </p>
                 <p>If the room block is full, please let us know and we will try to add more rooms to it.</p>
                 <a href="https://hoteldel.com/" className="but mt-30">
                    <span>Visit Website</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
                 <a href="https://book.passkey.com/e/49759556" className="but mt-30">
                    <span>Room Block</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
              <div className="col-sm-5 text-center">
                 <div className="block-img accomodations">
                    <a href="http://www.gloriettabayinn.com/" className="venobox">
                       <div className="background-img" >
                          <img src="img/gbi.jpg" alt="glorietta bay inn"/>
                       </div>
                    </a>
                 </div>
                 <p className="accomm lead size-s mt-30 ">Glorietta Bay Inn
                    1630 Glorietta Blvd
                    Coronado, CA 92118
                    (800) 283-9383
                 </p>
                 <a href="http://www.gloriettabayinn.com/" className="but mt-30">
                    <span>Visit Website</span>
                    <svg className="but-svg" width="175" height="50" viewBox="0 0 290 120" xmlns="http://www.w3.org/2000/svg">
                       <rect className="but-rect" x="10" y="10" width="270" height="100" rx="6" ry="6"/>
                    </svg>
                 </a>
              </div>
           </div>
        </div>
        <div className="container pt-120">
           <div className="row">
            <div className="col-sm-12 text-center mb-100">
                    <h1 className="title">Things To Do</h1>
                    <p>Have some fun while you are in town!</p>
            </div>
           </div>
           <div className="row">
           <div className="col-sm-4 text-center">
                 <div className="bike">
                    <a href="https://wheelfunrentals.com/ca/coronado/hotel-del-coronado/" className="venobox">
                       <div className="background-img">
                          <img alt="wheel fun rentals" src="img/bike.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="lead mt-20">Rent Bikes</p>
                 <p className="toDo size-s"> One of our favorite things to do is bike around the island, Coronado is one of the most bike-friendly regions in the area and it is a beautiful bike ride with a view of the ocean or parks at all times. You can bike along the coast all the way south to the Silver Strand bike path or meander to all the various parks on the island. Wheel Fun Rentals is right next to the Hotel Del.</p>
                 <a href="https://wheelfunrentals.com/ca/coronado/hotel-del-coronado/" className="btn btn-info mt-20">
                    <span>Wheel Fun Rentals</span>

                 </a>
              </div>
              <div className="col-sm-4 text-center">
                 <div className="bike">
                    <a href="https://www.flagshipsd.com/cruises/coronado-ferry" className="venobox">
                       <div className="background-img">
                          <img alt="coronado ferry" src="img/ferry.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="lead mt-20">Coronado Ferry</p>
                 <p className="toDo size-s">Take a ferry to downtown and enjoy the downtown action. Whether you are looking for the most scenic transportation to Coronado or taking the afternoon to explore San Diego’s Gaslamp District, you can’t beat the Coronado Ferry. This short twenty-minute ride showcases the beauty of the San Diego skyline and provides breathtaking views of the sweeping Coronado Bridge.</p>
                 <a href="https://www.flagshipsd.com/cruises/coronado-ferry" className="btn btn-info mt-20">
                    <span>Coronado Ferry</span>

                 </a>
              </div>
              <div className="col-sm-4 text-center">
                 <div className="bike">
                    <a href="https://seaforthboatrental.com/coronado-san-diego/" className="venobox">
                       <div className="background-img">
                          <img alt="seaforth boat rentals" src="img/waverunner.jpg"/>
                       </div>
                    </a>
                 </div>
                 <p className="lead mt-20">Rent WaveRunners</p>
                 <p className="toDo size-s">The Coronado watersports lineup excites us to no end! From kayaking with the occasional dolphins and meandering sea lions to sunset sailing to embracing a surge of power with jet skis and powerboats, Seaforth Boat Rentals can help you with any adrenaline-seeking water activity you’re looking to test out. It's also only a few steps away from the Hotel Del.</p>
                 <a href="https://seaforthboatrental.com/coronado-san-diego/" className="btn btn-info mt-20">
                    <span>SeaForth Boat Rental</span>

                 </a>
              </div>
           </div>
        </div>
     </section>)

    }
}
