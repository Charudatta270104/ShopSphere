import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Nav.Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Mynav = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <Navbar  collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className='brandname'><b>ShopSphere</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navlink' href='/' to={"/"}>Home</Nav.Link>
                        <Nav.Link className='navlink' href='/products' to={"/products"}>Products</Nav.Link>
                        <Nav.Link className='navlink' href='/about' to={"/aboutus"}>About us</Nav.Link>
                        <Nav.Link className='navlink' href='/contact' to={"/contactus"}>Contact us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" className="btn btn-outline-dark m-2 navbtn"><i className="fa fa-sign-in-alt mr-1"></i> Login</Nav.Link>
                        <Nav.Link href="/register" className="btn btn-outline-dark m-2 navbtn"><i className="fa fa-user-plus mr-1"></i> Register</Nav.Link>
                        <Nav.Link href="/cart" className="btn btn-outline-dark m-2 navbtn"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Mynav;