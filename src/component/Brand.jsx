import React from 'react'
import brandOne from '../img/brand/brand1.jpg';
import brandTwo from '../img/brand/brand2.jpg';
import brandThree from '../img/brand/brand3.jpg';
import brandFour from '../img/brand/brand4.jpg';


function Brand() {
    return (
        <div className="brand_area">
            <div className="container">
                <div className="row brand_container">
                    {/* <div className="col-12">
                        <div className="brand_container owl-carousel ">
                            <div className="single_brand">
                                <a href="#"><img src={brandOne} alt="" /></a>
                            </div>
                            <div className="single_brand">
                                <a href="#"><img src={brandTwo} alt="" /></a>
                            </div>
                            <div className="single_brand">
                                <a href="#"><img src={brandThree} alt="" /></a>
                            </div>
                            <div className="single_brand">
                                <a href="#"><img src={brandFour} alt="" /></a>
                            </div>
                            <div className="single_brand">
                                <a href="#"><img src={brandOne} alt="" /></a>
                            </div>
                        </div>
                    </div> */}

                    <div className="col">
                        <div className="single_brand">
                            <a href="#"><img src={brandOne} alt="" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single_brand">
                            <a href="#"><img src={brandTwo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single_brand">
                            <a href="#"><img src={brandThree} alt="" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single_brand">
                            <a href="#"><img src={brandFour} alt="" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="single_brand">
                            <a href="#"><img src={brandOne} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand