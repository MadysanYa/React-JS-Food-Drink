import React from 'react'
import headerLogo from '../img/logo/logo.png';

function Header() {
    return (
        <header>
            <div className="main_header">
                <div className="header_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
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
                            </div>
                            <div className="col-lg-6">
                                <div className="header_social text-right">
                                    <ul>
                                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                        <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                                        <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                        <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_middle">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                <div className="logo">
                                    <a href="index.html"><img src={headerLogo} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-6 col-sm-7 col-8">
                                <div className="header_right_info">
                                    <div className="search_container mobail_s_none">
                                        <form action="#">
                                            <div className="hover_category">
                                                <select className="select_option" name="select" id="categori2" defaultValue="1">
                                                    <option value="1">Select a categories</option>
                                                    <option value="2">Accessories</option>
                                                    <option value="3">Accessories & More</option>
                                                    <option value="4">Butters & Eggs</option>
                                                    <option value="5">Camera & Video </option>
                                                    <option value="6">Mornitors</option>
                                                    <option value="7">Tablets</option>
                                                    <option value="8">Laptops</option>
                                                    <option value="9">Handbags</option>
                                                    <option value="10">Headphone & Speaker</option>
                                                    <option value="11">Herbs & botanicals</option>
                                                    <option value="12">Vegetables</option>
                                                    <option value="13">Shop</option>
                                                    <option value="14">Laptops & Desktops</option>
                                                    <option value="15">Watchs</option>
                                                    <option value="16">Electronic</option>
                                                </select>
                                            </div>
                                            <div className="search_box">
                                                <input placeholder="Search product..." type="text" />
                                                <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header_account_area">
                                        <div className="header_account_list register">
                                            <ul>
                                                <li><a href="login.html">Register</a></li>
                                                <li><span>/</span></li>
                                                <li><a href="login.html">Login</a></li>
                                            </ul>
                                        </div>
                                        <div className="header_account_list header_wishlist">
                                            <a href="wishlist.html"><span className="lnr lnr-heart"></span> <span className="item_count">3</span> </a>
                                        </div>
                                        <div className="header_account_list  mini_cart_wrapper">
                                            <a href="#"><span className="lnr lnr-cart"></span><span className="item_count">2</span></a>
                                            <div className="mini_cart">
                                                <div className="cart_gallery">
                                                    <div className="cart_close">
                                                        <div className="cart_text">
                                                            <h3>cart</h3>
                                                        </div>
                                                        <div className="mini_cart_close">
                                                            <a href="#"><i className="icon-x"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="cart_item">
                                                        <div className="cart_img">
                                                            <a href="#"><img src="assets/img/s-product/product.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart_info">
                                                            <a href="#">Primis In Faucibus</a>
                                                            <p>1 x <span> $65.00 </span></p>
                                                        </div>
                                                        <div className="cart_remove">
                                                            <a href="#"><i className="icon-x"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="cart_item">
                                                        <div className="cart_img">
                                                            <a href="#"><img src="assets/img/s-product/product2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart_info">
                                                            <a href="#">Letraset Sheets</a>
                                                            <p>1 x <span> $60.00 </span></p>
                                                        </div>
                                                        <div className="cart_remove">
                                                            <a href="#"><i className="icon-x"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mini_cart_table">
                                                    <div className="cart_table_border">
                                                        <div className="cart_total">
                                                            <span>Sub total:</span>
                                                            <span className="price">$125.00</span>
                                                        </div>
                                                        <div className="cart_total mt-10">
                                                            <span>total:</span>
                                                            <span className="price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mini_cart_footer">
                                                    <div className="cart_button">
                                                        <a href="cart.html"><i className="fa fa-shopping-cart"></i> View cart</a>
                                                    </div>
                                                    <div className="cart_button">
                                                        <a href="checkout.html"><i className="fa fa-sign-in"></i> Checkout</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="header_bottom sticky-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 mobail_s_block">
                                <div className="search_container">
                                    <form action="#">
                                        <div className="hover_category">
                                            <select className="select_option" name="select" id="categori3" defaultValue="1">
                                                <option value="1">Select a categories</option>
                                                <option value="2">Accessories</option>
                                                <option value="3">Accessories & More</option>
                                                <option value="4">Butters & Eggs</option>
                                                <option value="5">Camera & Video </option>
                                                <option value="6">Mornitors</option>
                                                <option value="7">Tablets</option>
                                                <option value="8">Laptops</option>
                                                <option value="9">Handbags</option>
                                                <option value="10">Headphone & Speaker</option>
                                                <option value="11">Herbs & botanicals</option>
                                                <option value="12">Vegetables</option>
                                                <option value="13">Shop</option>
                                                <option value="14">Laptops & Desktops</option>
                                                <option value="15">Watchs</option>
                                                <option value="16">Electronic</option>
                                            </select>
                                        </div>
                                        <div className="search_box">
                                            <input placeholder="Search product..." type="text" />
                                            <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="categories_menu">
                                    <div className="categories_title">
                                        <h2 className="categori_toggle">All Cattegories</h2>
                                    </div>
                                    <div className="categories_menu_toggle">
                                        <ul>
                                            <li className="menu_item_children"><a href="#">Vegetables<i className="fa fa-angle-right"></i></a>
                                                <ul className="categories_mega_menu">
                                                    <li className="menu_item_children"><a href="#">Dresses</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Sweater</a></li>
                                                            <li><a href="">Evening</a></li>
                                                            <li><a href="">Day</a></li>
                                                            <li><a href="">Sports</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Handbags</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Shoulder</a></li>
                                                            <li><a href="">Satchels</a></li>
                                                            <li><a href="">kids</a></li>
                                                            <li><a href="">coats</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">shoes</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Ankle Boots</a></li>
                                                            <li><a href="">Clog sandals </a></li>
                                                            <li><a href="">run</a></li>
                                                            <li><a href="">Books</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Clothing</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Coats  Jackets </a></li>
                                                            <li><a href="">Raincoats</a></li>
                                                            <li><a href="">Jackets</a></li>
                                                            <li><a href="">T-shirts</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu_item_children"><a href="#">Fruits  <i className="fa fa-angle-right"></i></a>
                                                <ul className="categories_mega_menu column_3">
                                                    <li className="menu_item_children"><a href="#">Chair</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Dining room</a></li>
                                                            <li><a href="">bedroom</a></li>
                                                            <li><a href=""> Home & Office</a></li>
                                                            <li><a href="">living room</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Lighting</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Ceiling Lighting</a></li>
                                                            <li><a href="">Wall Lighting</a></li>
                                                            <li><a href="">Outdoor Lighting</a></li>
                                                            <li><a href="">Smart Lighting</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Sofa</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Fabric Sofas</a></li>
                                                            <li><a href="">Leather Sofas</a></li>
                                                            <li><a href="">Corner Sofas</a></li>
                                                            <li><a href="">Sofa Beds</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu_item_children"><a href="#"> Salads<i className="fa fa-angle-right"></i></a>
                                                <ul className="categories_mega_menu column_2">
                                                    <li className="menu_item_children"><a href="#">Brake Tools</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Driveshafts</a></li>
                                                            <li><a href="">Spools</a></li>
                                                            <li><a href="">Diesel </a></li>
                                                            <li><a href="">Gasoline</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Emergency Brake</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Dolls for Girls</a></li>
                                                            <li><a href="">Girls' Learning Toys</a></li>
                                                            <li><a href="">Arts and Crafts for Girls</a></li>
                                                            <li><a href="">Video Games for Girls</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu_item_children"><a href="#"> Fish & Seafood <i className="fa fa-angle-right"></i></a>
                                                <ul className="categories_mega_menu column_2">
                                                    <li className="menu_item_children"><a href="#">Check Trousers</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Building</a></li>
                                                            <li><a href="">Electronics</a></li>
                                                            <li><a href="">action figures </a></li>
                                                            <li><a href="">specialty & boutique toy</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_item_children"><a href="#">Calculators</a>
                                                        <ul className="categorie_sub_menu">
                                                            <li><a href="">Dolls for Girls</a></li>
                                                            <li><a href="">Girls' Learning Toys</a></li>
                                                            <li><a href="">Arts and Crafts for Girls</a></li>
                                                            <li><a href="">Video Games for Girls</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#"> Fresh Meat</a></li>
                                            <li><a href="#"> Butter & Eggs</a></li>
                                            <li><a href="#">Milk</a></li>
                                            <li><a href="#">Oil & Vinegars</a></li>
                                            <li><a href="#"> Bread</a></li>
                                            <li><a href="#"> Jam & Honey</a></li>
                                            <li><a href="#"> Frozen Food</a></li>
                                            <li className="hidden"><a href="shop.html">New Sofas</a></li>
                                            <li className="hidden"><a href="shop.html">Sleight Sofas</a></li>
                                            <li><a href="#" id="more-btn"><i className="fa fa-plus" aria-hidden="true"></i> More Categories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main_menu menu_position">
                                    <nav>
                                        <ul>
                                            <li><a className="active" href="index.html">home<i className="fa fa-angle-down"></i></a>
                                                <ul className="sub_menu home_sub_menu d-flex">
                                                    <li><span>Organic</span>
                                                        <ul>
                                                            <li><a href="index.html">Organic 01</a></li>
                                                            <li><a href="index-2.html">Organic 02</a></li>
                                                            <li><a href="index-3.html">Organic 03</a></li>
                                                            <li><a href="index-4.html">Organic 04</a></li>
                                                            <li><a href="index-5.html">Organic 05</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><span>Fashion</span>
                                                        <ul>
                                                            <li><a href="index-8.html">Fashion 01</a></li>
                                                            <li><a href="index-9.html">Fashion 02</a></li>
                                                            <li><a href="#">Fashion 03 <span>(Comming Soon)</span></a></li>
                                                            <li><a href="#">Fashion 04 <span>(Comming Soon)</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><span>Cosmetic</span>
                                                        <ul>
                                                            <li><a href="index-6.html">Cosmetic 01</a></li>
                                                            <li><a href="index-7.html">Cosmetic 02</a></li>
                                                            <li><a href="#">Cosmetic 03 <span>(Comming Soon)</span></a> </li>
                                                            <li><a href="#">Cosmetic 04 <span>(Comming Soon)</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mega_items"><a href="shop.html">shop<i className="fa fa-angle-down"></i></a>
                                                <div className="mega_menu">
                                                    <ul className="mega_menu_inner">
                                                        <li><a href="#">Shop Layouts</a>
                                                            <ul>
                                                                <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                                <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                                <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                                <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                                <li><a href="shop-list.html">List View</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">other Pages</a>
                                                            <ul>
                                                                <li><a href="cart.html">cart</a></li>
                                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                                <li><a href="my-account.html">my account</a></li>
                                                                <li><a href="404.html">Error 404</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Product Types</a>
                                                            <ul>
                                                                <li><a href="product-details.html">product details</a></li>
                                                                <li><a href="product-sidebar.html">product sidebar</a></li>
                                                                <li><a href="product-grouped.html">product grouped</a></li>
                                                                <li><a href="variable-product.html">product variable</a></li>

                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="blog.html">blog<i className="fa fa-angle-down"></i></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                    <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                    <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">pages <i className="fa fa-angle-down"></i></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="services.html">services</a></li>
                                                    <li><a href="faq.html">Frequently Questions</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="404.html">Error 404</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html"> Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="call-support">
                                    <p><a href="tel:(08)23456789">(08) 23 456 789</a> Customer Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header