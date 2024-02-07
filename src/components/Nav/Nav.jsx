import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavLink() {
    return (
        <>
        <section>
            <h1 className="Center">A Family Addiction</h1>
        </section>
        <Navbar>
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/A-Family-Addiction" className="NavLink">Mission</Nav.Link>
                    <Nav.Link href="/A-Family-Addiction/contact" className="NavLink">Contact</Nav.Link>
                    <Nav.Link href="/A-Family-Addiction/about" className="NavLink">About</Nav.Link>
                </Nav>
                    <Navbar>
                            <a 
                            href="https://988lifeline.org/"
                            target="_blank"
                            rel="noreferrer" className="SecNavLink">Suicide Hotline</a>   
                            <a href="tel:988"
                             className="SecNavLink">
                           <BsTelephoneFill size={18}/>
                           </a>
                            <a href="https://www.thehotline.org/"
                            target="_blank"
                            rel="noreferrer" className="SecNavLink">Domestic Hotline</a> 
                            <a href="tel:8007997233"
                            className="SecNavLink">
                           <BsTelephoneFill size={18}/>
                           </a>
                    </Navbar>
            </Container>
        </Navbar>
        </>
    );
}

export default NavLink;