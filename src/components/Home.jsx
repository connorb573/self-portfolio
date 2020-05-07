import React, {Component} from 'react'

export default class Home extends Component {
    render() {
        return(
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{backgroundImage: 'url(images/hdb2.jpeg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div  className="desc">
                                                <h1> Developer, <br /> Music Lover, <br />  Food Enthusiast. </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}