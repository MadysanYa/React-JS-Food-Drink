import React from 'react'
import sliderOne from '../img/slider/slider1.jpg';
import sliderTwo from '../img/slider/slider2.jpg';
import sliderThree from '../img/slider/slider3.jpg';

function Slider() {
    return (
        <section className="slider_section">
            <div className="slider_area owl-carousel">
                <div className="single_slider d-flex align-items-center" data-bgimg={sliderOne}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider_content">
                                    <h1>Vegetables Big Sale</h1>
                                    <h2>Fresh Farm Products</h2>
                                    <p>
                                        10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!
                                    </p>
                                    <a href="shop.html">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single_slider d-flex align-items-center" data-bgimg={sliderTwo}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider_content">
                                    <h1>Fresh Vegetables</h1>
                                    <h2>Natural Farm Products</h2>
                                    <p>
                                        Widest range of farm-fresh Vegetables, Fruits & seasonal produce
                                    </p>
                                    <a href="shop.html">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single_slider d-flex align-items-center" data-bgimg={sliderThree}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider_content">
                                    <h1>Fresh Tomatoes</h1>
                                    <h2>Natural Farm Products</h2>
                                    <p>
                                        Natural organic tomatoes make your health stronger. Put your information here
                                    </p>
                                    <a href="shop.html">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider