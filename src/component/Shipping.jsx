import React from 'react'
import shippingOne from '../img/about/shipping1.jpg';
import shippingTwo from '../img/about/shipping2.jpg';
import shippingThree from '../img/about/shipping3.jpg';
import shippingFour from '../img/about/shipping4.jpg';

function Shipping() {
    return (
        <div className="shipping_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single_shipping">
                            <div className="shipping_icone">
                                <img src={shippingOne} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h3>Free Shipping</h3>
                                <p>Free shipping on all US order or order above $200</p>
                            </div>3
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_shipping col_2">
                            <div className="shipping_icone">
                                <img src={shippingTwo} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h3>Support 24/7</h3>
                                <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_shipping col_3">
                            <div className="shipping_icone">
                                <img src={shippingThree} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h3>30 Days Return</h3>
                                <p>Simply return it within 30 days for an exchange</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_shipping col_4">
                            <div className="shipping_icone">
                                <img src={shippingFour} alt="" />
                            </div>
                            <div className="shipping_content">
                                <h3>100% Payment Secure</h3>
                                <p>We ensure secure payment with PEV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping