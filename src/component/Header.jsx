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
                                        <li className="language"><a href="#"> ភាសា <i className="icon-right ion-ios-arrow-down"></i></a>
                                            <ul className="dropdown_language">
                                                <li><a href="#">អង់គ្លេស</a></li>
                                                <li><a href="#">ខ្មែរ</a></li>
                                            </ul>
                                        </li>
                                        <li className="currency"><a href="#"> ផ្ទៃខាងក្រោយ <i className="icon-right ion-ios-arrow-down"></i></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="#">ពណ៌ស</a></li>
                                                <li><a href="#">ពណ៌ខ្មៅ</a></li>
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
                                            {/* <div className="hover_category">
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
                                            </div> */}
                                            <div className="search_box">
                                                <input placeholder="ស្វែងរកអាហារ និងភេសជ្ជៈ" type="text" />
                                                <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header_account_area">
                                        <div className="header_account_list register">
                                            <ul>
                                                <li><a href="login.html">ចុះឈ្មោះ</a></li>
                                                <li><span>|</span></li>
                                                <li><a href="login.html">ចូល</a></li>
                                            </ul>
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
                            <div className="col-lg-3 col-md-6">
                                <div className="categories_menu">
                                    <div className="categories_title">
                                        <h2 className="categori_toggle">រៀនចម្អិនអាហារ និងភេសជ្ជៈ</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main_menu menu_position">
                                    <nav>
                                        <ul>
                                            <li><a className="active" href="index.html">ទំព័រដើម<i className="fa fa-angle-down"></i></a></li>
                                            <li className="mega_items"><a href="shop.html">អាហារ<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="blog.html">ភេសជ្ជៈ<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="contact.html">អំពី​ពួក​យើង</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="call-support">
                                    <p><a href="tel:069313251">(+855) 69 313 251</a><span>ទំនាក់ទំនងផ្សាយពាណិជ្ជកម្ម</span></p>
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