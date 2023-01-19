import React from 'react';
import Styles from '../styles/aboutUs.module.css'

const aboutUs = () => {
    return (
        <div className={Styles.wholeout}>

            <div className={Styles.whole}>

                <div className={Styles.section}>
                    <div className={Styles.container} >
                        <div className={Styles.ContentSection} >
                            <div className={Styles.title}>
                                <h1>ABOUT US</h1>
                            </div>
                            <div className={Styles.content}>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className={Styles.button}>
                                    <a href=''> Read More</a>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                <div className={Styles.Map} >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33309.629363657106!2d91.8075600474392!3d22.363403667300567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1674125144844!5m2!1sen!2sbd"
                        width="600" height="450" frameborder='0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

            </div>

        </div>
    );
};

export default aboutUs;