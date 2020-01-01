import React from 'react'
import './Footer.css'

const footer = props => (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-section contact-form">
            </div>
            <div className="footer-section links"></div>
            <div className="footer-section about">
                <h1 className="logo-text">امتحانات اونلاين</h1>
                <p>امتحانات اونلاين هو موقع يتيح لك كطالب الاجابة على الامتحانات المتاحة على المواقع بواسطة اساتذتك ويتيح لك كمدرس وضع الامتحانات واختبار طلابك ولك كولي امر متابعه درجات ابنك فى الامتحانات</p>
                <div className="contact">
                    <span><i className="fas fa-phone"></i>&nbsp; 0122-956-5721</span>
                    <span><i className="fas fa-envelope"></i>&nbsp; fadyattia11@gmail.com</span>
                </div>

                <div className="socials">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            &copy; BetterLearning Website | Designed by Fady Attia
        </div>
    </div>
)

export default footer