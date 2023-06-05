import React from 'react';
import footerLogo from '../img/logo/logo.png';
import payPalOne from '../img/icon/paypal1.jpg';
import payPalTwo from '../img/icon/paypal2.jpg';
import payPalThree from '../img/icon/paypal3.jpg';
import payPalFour from '../img/icon/paypal4.jpg';

function Footer() {
    return (
        <footer className="footer_widgets">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-7">
                            <div className="widgets_container contact_us">
                                <div className="footer_logo">
                                    <a href="index.html"><img src={footerLogo} alt="" /></a>
                                </div>
                                <p className="footer_desc">We are a team of designers and developers that create high quality eCommerce, WordPress, Shopify .</p>
                                <p><span>Address:</span> 4710-4890 Breckinridge USA</p>
                                <p><span>Email:</span> <a href="#">demo@hasthemes.com</a></p>
                                <p><span>Call us:</span> <a href="tel:(08)23456789">(08) 23 456 789</a> </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="widgets_container widget_menu">
                                <h3>Information</h3>
                                <div className="footer_menu">

                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#"> Privacy Policy</a></li>
                                        <li><a href="#"> Terms & Conditions</a></li>
                                        <li><a href="contact.html"> Contact Us</a></li>
                                        <li><a href="#"> Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="widgets_container widget_menu">
                                <h3>Extras</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">  Gift Certificates</a></li>
                                        <li><a href="#">Affiliate</a></li>
                                        <li><a href="#">Specials</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#"> Order History</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="widgets_container widget_newsletter">
                                <h3>Sign up newsletter</h3>
                                <p className="footer_desc">Get updates by subscribe our weekly newsletter</p>
                                <div className="subscribe_form">
                                    <form id="mc-form" className="mc-form footer-newsletter">
                                        <input id="mc-email" type="email" autoComplete="off" placeholder="Enter you email" />
                                        <button id="mc-submit">Subscribe</button>
                                    </form>
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting"></div>
                                        <div className="mailchimp-success"></div>
                                        <div className="mailchimp-error"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <div className="copyright_area">
                                <p>Copyright © 2021 <a href="#">Safira</a> . All Rights Reserved.Design by <a href="#">Safira</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="footer_payment">
                                <ul>
                                    <li><a href="#"><img src={payPalOne} alt="" /></a></li>
                                    <li><a href="#"><img src={payPalTwo} alt="" /></a></li>
                                    <li><a href="#"><img src={payPalThree} alt="" /></a></li>
                                    <li><a href="#"><img src={payPalFour} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer