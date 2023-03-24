import React from "react";

function Language() {
    return (
        <div className="offcanvas_menu">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="canvas_open">
                            <a href="#"><i className="icon-menu"></i></a>
                        </div>
                        <div className="offcanvas_menu_wrapper">
                            <div className="canvas_close">
                                <a href="#"><i className="icon-x"></i></a>
                            </div>
                            <div className="language_currency">
                                <ul>
                                    <li className="language"><a href="#"> Language <i className="icon-right ion-ios-arrow-down"></i></a>
                                        <ul className="dropdown_language">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">Russian</a></li>
                                        </ul>
                                    </li>
                                    <li className="currency"><a href="#"> Currency <i className="icon-right ion-ios-arrow-down"></i></a>
                                        <ul className="dropdown_currency">
                                            <li><a href="#">€ Euro</a></li>
                                            <li><a href="#">£ Pound Sterling</a></li>
                                            <li><a href="#">$ US Dollar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="header_social text-right">
                                <ul>
                                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                </ul>
                            </div>

                            <div className="call-support">
                                <p><a href="tel:(08)23456789">(08) 23 456 789</a> Customer Support</p>
                            </div>
                            <div id="menu" className="text-left ">
                                <ul className="offcanvas_main_menu">
                                    <li className="menu-item-has-children active">
                                        <a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">Home Organic</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Organic 01</a></li>
                                                    <li><a href="index-2.html">Organic 02</a></li>
                                                    <li><a href="index-3.html">Organic 03</a></li>
                                                    <li><a href="index-4.html">Organic 04</a></li>
                                                    <li><a href="index-5.html">Organic 05</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Home Fashion</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index-8.html">Fashion 01</a></li>
                                                    <li><a href="index-9.html">Fashion 02</a></li>
                                                    <li><a href="#">Fashion 03 <span>(Comming Soon)</span></a></li>
                                                    <li><a href="#">Fashion 04 <span>(Comming Soon)</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Home Cosmetic</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index-6.html">Cosmetic 01</a></li>
                                                    <li><a href="index-7.html">Cosmetic 02</a></li>
                                                    <li><a href="#">Cosmetic 03 <span>(Comming Soon)</span></a> </li>
                                                    <li><a href="#">Cosmetic 04 <span>(Comming Soon)</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop Layouts</a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                    <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                    <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                    <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                    <li><a href="shop-list.html">List View</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">other Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="404.html">Error 404</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Product Types</a>
                                                <ul className="sub-menu">
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="product-sidebar.html">product sidebar</a></li>
                                                    <li><a href="product-grouped.html">product grouped</a></li>
                                                    <li><a href="variable-product.html">product variable</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                            <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                            <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                        </ul>

                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">pages </a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="services.html">services</a></li>
                                            <li><a href="faq.html">Frequently Questions</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                            <li><a href="login.html">login</a></li>
                                            <li><a href="404.html">Error 404</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="my-account.html">my account</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="about.html">about Us</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="contact.html"> Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="offcanvas_footer">
                                <span><a href="#"><i className="fa fa-envelope-o"></i> info@yourdomain.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language