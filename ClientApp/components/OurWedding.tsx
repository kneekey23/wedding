import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class OurWedding extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <section id="wedding" className="wedding pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-100">
                                <h1 className="title">Wedding events</h1>
                                <p>Main ceremony - Wedding party</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col-sm-offset-1 text-center">
                                <div className="block-event">
                                    <div className="circle-dashed relative bg green ">
                                    <div className="round-circle  green before">
                                        <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                                            <circle cx="50%" cy="50%" r="50"/>
                                        </svg>
                                        <i className="icon-religious-jewish"></i>
                                    </div>
                                    </div>
                                    <p className="mt-30 mb-30">Main ceremony<span>16:00h - 17:00</span></p>
                                    <p >Address<span>28 Chalmers StreetSydney</span></p>
                                </div>
                            </div>
                            <div className="col-sm-5 text-center">
                                <div className="block-event swap">
                                    <div className="circle-dashed relative bg">
                                    <div className="round-circle  before">
                                        <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                                            <circle cx="50%" cy="50%" r="50"/>
                                        </svg>
                                        <i className="icon-glass"></i>
                                    </div>
                                    </div>
                                    <p className="mt-30 mb-30">Wedding Party<span>17:00h - 18:00</span></p>
                                    <p>Address<span>28 Chalmers Street Sydney</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text-center">
                                <p className="lead mt-80 size-m">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. </p>
                                <a href="#rsvp" className="but mt-40 scroll">
                                    <span>RSVP</span>
                                    <svg className="but-svg" width="143" height="50" viewBox="0 0 230 120" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="but-rect" x="10" y="10" width="210" height="100" rx="6" ry="6"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>;

    }
}
