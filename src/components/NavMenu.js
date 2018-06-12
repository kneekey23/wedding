import React, { Component } from 'react';


export class NavMenu extends React.Component {
    render() {
        return (<nav className='main-nav'>
                    <div className='toggle-mobile-but'>
                       <a href='#' className='mobile-but' >
                          <div className='lines'></div>
                       </a>
                    </div>
                    <ul>
                       <li>
                       <a className='scroll' href='#story'>Love story</a>
                        </li>
                       <li>
                       <a className='scroll' href='#wedding'>The wedding</a>
                        </li>
                       <li> <a className='scroll' href='#photos'>Photos</a>
                       </li>
                       <li><a className='scroll' href='#gift'>Gift registry</a></li>
                       <li><a className='scroll' href='#friend'>Friends</a></li>
                       <li><a className='scroll' href='#rsvp'>RSVP</a></li>
                    </ul>
                 </nav>)
    }
}
