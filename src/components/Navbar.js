import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg'
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm   px-sm-5">
                <Link to="/">
                    <img src={logo} className="navbar-brand" alt=""/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link text-warning">products</Link>
                    </li>
                </ul>
            <Link to="/cart" className="ml-auto">
                <button className="btn  btn-outline-warning  text-uppercase px-2">My Cart <span className="ml-2"><FontAwesomeIcon icon={faCartPlus}/></span></button>
            </Link>
            </NavWrapper>

        );
    }
}

export default Navbar;

const NavWrapper =styled.nav`
background: var(--mainBlue);
color: var(--mainWhite) !important;
font-size: 1.3rem;
text-transform: capitalize !important;
`