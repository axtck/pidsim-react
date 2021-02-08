import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

const Header = ({ title }) => {
    return (
        <Navbar className="text-white bg-primary sticky-top">
            <div className="">
                <h3>{title}</h3>
            </div>
        </Navbar>
    )
}

export default Header
