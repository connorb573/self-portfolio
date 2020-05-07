import React, {Component} from 'react'

export default class Projects extends Component{
    render() {
        return(
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Work</span>
                            <h2 className="colorlib-heading animate-box">Recent Work</h2>
                        </div>
                    </div>
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    </div>
                    <div className="row">
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(images/photo.png)'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://github.com/connorb573/generative-music">Generative Music using Processing</a></h3>
                                        <span>An audio-visual application in which sample are formed into loops and generatively repeated
                                        to create constantly evolving music. This is accompanied by generative artwork that interacts
                                        with the music. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(images/snowfall.png)'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://github.com/connorb573/snowfall-system">OpenGL Snow Particle System</a></h3>
                                        <span> A simple particle system using OpenGL and C++ that generates snowfall, with the snow
                                        accumulating on the ground.</span>
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