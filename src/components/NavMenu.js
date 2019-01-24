import React, { Component } from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';


// export class NavMenu extends React.Component {
//     render() {
//         return (<nav className='main-nav navbar'>
                
//                        <button className='mobile-but navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                           <div className='lines'></div>
//                        </button>
                   
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                        <li className="nav-item active">
//                        <a className='scroll nav-link' href='#story'>Love story</a>
//                         </li>
//                        <li className="nav-item">
//                        <a className='scroll nav-link' href='#wedding'>The wedding</a>
//                         </li>
//                        <li className="nav-item"> <a className='scroll nav-link' href='#photos'>Photos</a>
//                        </li>
//                        <li className="nav-item"><a className='scroll nav-link' href='#gift'>Gift registry</a></li>
//                        <li className="nav-item"><a className='scroll nav-link' href='#friend'>Friends</a></li>
//                        <li className="nav-item"><a className='scroll nav-link' href='#accomodation'>Accomodations</a></li>
//                        <li className="nav-item"><a className='scroll nav-link' href='#rsvp'>RSVP</a></li>
//                     </ul>
//                     </div>
//                  </nav>)
//     }
// }


export class NavMenu extends Component {
   render() {
      return (
         <Navbar collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
            <a className='logo scroll' href='#hero'>
                                <h2>N &amp; J</h2>
                                </a>
            </Navbar.Brand>
               <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight>
                  <NavItem eventKey={1} href="#story">
                  Love Story
                  </NavItem>
                  <NavItem eventKey={2} href="#wedding" className="scroll">
                  The Wedding
                  </NavItem>
                  <NavItem eventKey={3} href="#photos" className="scroll">
                  Photos
                  </NavItem>
                  <NavItem eventKey={4} href="#gift" className="scroll">
                  Gift Registry
                  </NavItem>
                  <NavItem eventKey={5} href="#friend" className="scroll">
                  Friends
                  </NavItem>
                  <NavItem eventKey={6} href="#accomodation" className="scroll">
                  Accomodations
                  </NavItem>
                  <NavItem eventKey={7} href="#rsvp" className="scroll">
                  RSVP
                  </NavItem>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      )
   }
}