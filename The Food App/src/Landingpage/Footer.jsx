import React from 'react'

function Footer() {
    return (

        <div className="footer">
            <div className="footer-logo">
                <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="company-logo" />
            </div>
            <div className="contact-info">
                <div className="company">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                    </ul>
                </div>
                <div className="contact-us">
                    <div class="contact-column">
                        <h3>Contact us</h3>
                        <ul>
                            <li>Help & Support</li>
                            <li>Partner With Us</li>
                            <li>Ride With Us</li>
                        </ul>
                    </div>
                    <div class="contact-column">
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="available">
                    <h3>Available in:</h3>
                    <ul>
                        <li>Bangalore</li>
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>
                <div className="life-at-swiggy">
                    <div class="footer-life-at-column">
                        <h3>Life at Swiggy</h3>
                        <ul>
                            <li>Explore With Swiggy</li>
                            <li>Swiggy News</li>
                            <li>Snackables</li>
                        </ul>
                    </div>

                    <div class="footer-column-social">
                        <h3>Social Links</h3>
                        <ul class="social-icons-list">
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-pinterest"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
