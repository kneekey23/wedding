import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class LoveStory extends React.Component<{}, {}>  {
    public render() {
        return <section id="story" className="story pt-120 pb-120">
                     <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-100">
                 <              h1 className="title">Our love story</h1>
                                <p>The Story of our love and the Wedding</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center mb-30">
                                <h2 className="heavy">When Sara Miller Met Ben Shneider
                                <span>That day changed everything</span>
                                </h2>
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center">
                                <div className="img-round">
                                <div className="img"><img src="img/2.png" alt="" /></div>
                                <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                                    <circle cx="50%" cy="50%" r="50" />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className="row story-row mt-100 mb-100">
                            <div className="circle-dashed timeline bg">
                                <div className="round-circle bg before">
                                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                                    <circle cx="50%" cy="50%" r="50"/>
                                    </svg>
                                    <i className="icon-heart"></i>
                                </div>
                            </div>
                            <div className="col-sm-5 ">
                                <div className="couple-story text-right">
                                    <h2 className="heavy mb-10">Our first met<span>12 Sept 2016</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
                                </div>
                            </div>
                            <div className="col-sm-5 col-sm-offset-2">
                                <div className="couple-story">
                                    <h2 className="heavy mb-10">Our first Dating<span>23 Oct 2016</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
                                </div>
                            </div>
                        </div>
                        <div className="row story-row mt-100 mb-80 ">
                            <div className="circle-dashed timeline bg green">
                                <div className="round-circle  green before">
                                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg" className="dashed-border">
                                    <circle cx="50%" cy="50%" r="50"/>
                                    </svg>
                                    <i className="icon-heart"></i>
                                </div>
                            </div>
                            <div className="col-sm-5 ">
                                <div className="couple-story text-right">
                                    <h2 className="heavy mb-10">How he proposed<span>27 Jan 2017</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
                                </div>
                            </div>
                            <div className="col-sm-5 col-sm-offset-2">
                                <div className="couple-story">
                                    <h2 className="heavy mb-10">Since then we are together<span>To present</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices malesuada ante quis pharetra. Nullam notn bibendum dolor. Ut vel turpis accumsan, efficitur dolor fermentum, tincidunt metus. Etiam ut ultrices nibh. Etiam aliquam mauris non hendrerit faucibus</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center">
                                <div className="img-round">
                                    <div className="img"><img src="img/3.png" alt=""/></div>
                                    <svg viewBox="0 0 103 103" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="dashed-border">
                                    <circle cx="50%" cy="50%" r="50" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 text-center mt-30">
                                <h2 className="heavy">Happy ending we will get married<span>Counting the days...</span></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12  text-center mt-100">
                                <a href="#" className="but">
                                    <span>Wedding location</span>
                                    <svg className="but-svg" width="175" height="50" viewBox="0 0 415 120" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="but-rect" x="10" y="10" width="400" height="100" rx="6" ry="6"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>;
    }
}