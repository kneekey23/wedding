import React, { Component } from 'react';
//import { RouteComponentProps } from 'react-router';

export class LoveStory extends React.Component {
    render() {
        return ( <section id="story" className="story pt-120 pb-120">
                     <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-30">
                                <h1 className="title">Our Love Story</h1>
                                <h3 className="title">Pooh and Piglet find their honey</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-sm-8 col-sm-offset-2 mb-30">
                                <h2 className="heavy">Let's talk about fate...
                                <p>It typically seems more mystical than realistic.  Try assigning a probability to the following: </p>
                                <p>Unbeknownst to each other, Nicki and Justin grew up two miles apart, and indeed, Nicki was supposed to go to the same elementary school as Justin before her family moved to Newport Beach. They spent the rest of their childhoods separated by a mere two miles, going through the phases of adolescence together simultaneously, geographically close, yet physically apart.</p>
                                <p>Nicki and Justin had mutual friends, including Justin's cousin, yet never met until.... Nicki happened to visit Orange County for the weekend!  Having finished her work early, she decided to spend a few minutes loading up the Jewish version of Tinder to fill the time.  Meanwhile, in the middle of reviewing his clients' portfolios over the weekend, Justin wanted to survey the Jewish prospects in Orange County. </p>
                                <p>App loaded ... Justin scores gold with the first person he sees! Okay, she seems smart and cute, swipe right and a match.  They go on a single date, delete their apps without looking at other profiles, and the rest is history!
Fast forward two amazing years later and Justin plans what's supposed to be the proposal of the year. But he gets overly excited/ anxious and may have proposed while Nicki was blow drying her hair the night before he was planning to do it. Of course she says yes! The next day both sets of families delightfully surprise her at brunch to celebrate.</p>
</h2>
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center">
                                <div className="img-round">
                                <div className="img"><img src="img/NJ1.jpg" alt="" /></div>
                                <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                                    <circle cx="50%" cy="50%" r="50" />
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
    }
}