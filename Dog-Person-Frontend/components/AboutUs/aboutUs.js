import React from 'react';
import Styles from '../../styles/aboutUs.module.css'
import image from "../../image/dgLover.jpg"
import im1 from "../../image/dogCommunity.png"
import im2 from "../../image/fbLogo.png"
import im3 from "../../image/instaLogo.png"
import im4 from "../../image/twitterLogo.png"
import im5 from "../../image/mission.png"
import im6 from "../../image/gmail.png"
const aboutUs = () => {
    return (
        <div>
            <div className={Styles.whole}>
            <div className={Styles.OurMission}>                  
                   <div className={Styles.missionDesc}>       
        <h1>Our Mission</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>      
      </div>
      <div className={Styles.missionImage}>
                    <img src={im5.src}></img>
                    </div>
                </div>
                <div className={Styles.dogCommunity}>
                    <div className={Styles.communityImage}>
                    <img src={im1.src}></img>
                    </div>
                    <div className={Styles.communityDesc}>
        
        <h1>Join The Community</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className={Styles.Logo}>
        <img src={im2.src}></img>
        <img src={im3.src}></img>
        <img src={im4.src}></img>  
        <img src={im6.src}></img>  
        </div>
        
      </div>
                </div>
      <div className={Styles.dogLover}>
        <div className={Styles.text}>
        
          <h1>The Dog Person Team</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          
        </div>
        <div className={Styles.dogImage}>
          <img src={image.src}></img>
        </div>
      </div>
    </div>   
                
             <div className={Styles.Map} >
                <div className={Styles.locate}>
                    <h1>Locate Us</h1>
                 
                     <h4>Headquartures in 89 Bir Uttam CR Dutta Road,</h4>
                    <h4>Banglamotor, Dhaka 1205</h4>
                     
                    <h5>Postal Code:1234</h5>

                </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33309.629363657106!2d91.8075600474392!3d22.363403667300567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1674125144844!5m2!1sen!2sbd"
                        width="600" height="450" frameborder='0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div> 

            </div>

        
    );
};

export default aboutUs;