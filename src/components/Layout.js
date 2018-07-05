import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { LoveStory } from './LoveStory';
import { SaveTheDate } from './SaveTheDate';
import { Registry } from './Registry';
import { Photos } from './Photos';
import {Friends} from './Friends';
import {Accomodations} from './Accomodations';
import { RSVP } from './RSVP';
import { OurWedding } from './OurWedding';

class Layout extends React.Component{
    render() {
        return ( <div className='wrapper'>
                    <section className='hero overlay'>
                        <div className='background-img'>
                            {/* <img src='img/NJ.jpg' alt='' /> */}
                        </div>
                        <header className='header default'>
                            <div className='left-part'>
                                <a className='logo scroll' href='#hero'>
                                <h2>N &amp; J</h2>
                                </a>
                            </div>
                            <div className='right-part'>
                                <NavMenu />
                            </div>
                        </header>
                        <div className='inner-hero'>
                            <div className='container hero-content'>
                                <div className='row'>
                                    <div className='col-sm-12 text-center'>
                                    <h1 className='large mb-20'>Nicki&amp;Justin</h1>
                                        <div className='block-date-hero'>
                                            <div className='circle-dashed bg-n'>
                                                <div className='round-circle'>
                                                    <svg viewBox='0 0 103 103' version='1.1' xmlns='http://www.w3.org/2000/svg'  className='dashed-border'>
                                                    <circle cx='50%' cy='50%' r='50' />
                                                    </svg>
                                                    <i className='icon-heart'></i>
                                                 </div>
                                            </div>
                                                 <ul>
                                                    <li>Save the date</li>
                                                    <li>May 11th, 2019</li>
                                                </ul>
                                        </div>
                                    <p className='mt-20 lead'>Hotel Del Coronado</p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <LoveStory />
                    <SaveTheDate />
                    <OurWedding />
                    <Photos />
                    <Registry />
                    <Friends />
                    <Accomodations />
                    <RSVP />

                    <section className="just-married pt-200 pb-200">
                        <div className="background-img">
                       
                        </div>
                        <div className="container">
                            <div className="row">
                            <div className="col-sm-12 text-center">
                            <div className="block-content front-p">
                            <h2 className="typo">We Can't Wait!</h2>
                     </div>
                  </div>
               </div>
            </div>
         </section>
            </div>)
        }
}
export default Layout;