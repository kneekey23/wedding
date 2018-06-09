import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className='main-nav'>
                    <div className='toggle-mobile-but'>
                       <a href='#' className='mobile-but' >
                          <div className='lines'></div>
                       </a>
                    </div>
                    <ul>
                       <li>
                            <NavLink to={ '#story' } exact activeClassName='active scroll'>
                                Love story
                            </NavLink>
                        </li>
                       <li>
                            <NavLink to={ '/details' } exact activeClassName='active scroll'>
                               The wedding
                            </NavLink>
                        </li>
                       <li>
                            <NavLink to={ '/photos' } exact activeClassName='active'>
                                Photos
                            </NavLink>
                          
                       </li>
                       <li><a className='scroll' href='#gift'>Gift registry</a></li>
                       <li><a className='scroll' href='#friend'>Friends</a></li>
                       <li><a className='scroll' href='#rsvp'>RSVP</a></li>
                    </ul>
                 </nav>;
    }
}
