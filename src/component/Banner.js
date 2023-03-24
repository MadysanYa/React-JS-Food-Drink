import React from 'react'
import bannerOne from '../img/bg/banner1.jpg';
import bannerTwo from '../img/bg/banner1.jpg';

function Banner() {
    return (
        <div className="banner_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a href=""><img src={bannerOne} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                <a href=""><img src={bannerTwo} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner