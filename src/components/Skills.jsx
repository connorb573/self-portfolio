import React, {Component} from 'react'

export default class Skills extends Component{
    render() {
        return(
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Skills</span>
                            <h2 className="colorlib-heading animate-box">Programming + Web Development</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <p>A brief numerical overview of my confidence in each subject: </p>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Java</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Flutter/Dart</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>React</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <p>I am also familiar with MATLAB, OpenGL, C, Processing and Python. </p>
                            <p>I am very confident with Agile Practices, and have significant experience
                                using Git, Continuous Integration, TDD and planning using user stories.</p>
                            <p>I am also familiar with designing mockups for applications, having worked on
                            paper mock-ups, wireframe mockups, and fully fledged prototypes. I have also used these
                            to receive feedback from testers and update products accordingly.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Other Skills</h2>
                        <p>I can speak German to the A1 level of the European Common Framework for Languages.</p>
                        <p>I have a strong understanding of many Mathematical concepts, including Matrices and Linear
                        Algebra, Mathematical Analysis, and Calculus.</p>
                    </div>
                </div>
            </section>

        )
    }
}