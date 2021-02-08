import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

const Header = ({ title }) => {
    return (
        <Navbar className="text-white bg-primary sticky-top">
            <h3>{title}</h3>
        </Navbar>
    )
}

export default Header
