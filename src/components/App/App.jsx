import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavLink from "../Nav";
import LandingPage from "../../pages/LandingPage";
import Contact from "../../pages/ContactPage";
import AboutMe from "../../pages/AboutPage"
import Footer from "../Footer";

function App() {

    return(
        <Router>
            <div>
                <NavLink />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={AboutMe} />
            </div>
            <div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
