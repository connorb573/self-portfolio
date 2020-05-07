import React, {Component} from 'react'

export default class Navbar extends Component{
    render() {
        return(
            <div>
                <div>
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Connor Brookes</a></h1>
                            <span className="position">Software Engineer, UK </span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                                    {/*<li><a href="#" data-nav-section="experience">Experience</a></li>*/}
                                    <li><a href="#" data-nav-section="projects"> Projects</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/connorb573"><i className="icon-facebook2" /></a></li>
                                <li><a href="https://www.instagram.com/con.cooks"><i className="icon-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/connorbrookes"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/connorb573" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                                <li>connorb573@gmail.com</li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                        <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | Created by Connor Brookes with a Template by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </small></p>

                        </div>
                    </aside>
                </div>
            </div>

        )
    }
}