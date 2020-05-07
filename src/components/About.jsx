import React, {Component} from 'react'

export default class About extends Component{
    render() {
        return(
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p><strong>Hi, I'm Connor.</strong> In 2020, I graduated from the University of Manchester with a 1st Class Degree
                                        in Computer Science and Mathematics. I'm now pursuing a career, furthering my passions for: </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-bulb" /></span>
                                        <h3>Programming</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline" /></span>
                                        <h3>Web Design</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>Software</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3" /></span>
                                        <h3>Applications</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h2 className="colorlib-heading">Hobbies</h2>
                                            <p> I'm a self confessed lover of learning, constantly teaching myself new skills and exploring
                                            new topics to expand my knowledge. I'm also a multi-instrumentalist, rock climber, home cook, photographer
                                            and an avid reader: </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="hire">
                                        <h2> <strong> "Whatever it is you're seeking wont come in the form you're expecting" </strong> <br /> - Haruki Murakami</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}