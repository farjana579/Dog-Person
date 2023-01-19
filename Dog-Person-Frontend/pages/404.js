import React, { useEffect } from 'react';
import styles from '../styles/404.module.css'
import gsap from 'gsap'
import CSSPlugin from 'gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)


const NotFound = () => {
    useEffect(()=>{
       
       const tl=new gsap.timeline();
        tl.from(".spandesign",{
          duration:.8,
          stagger:{
            amount: .7
          },
          y: 200,
          skewY:10,
          opacity: 0
        })
     
      tl.from(".homebtn",{
            scale:0,
            duration:.5,
            stagger:{
                amount:.6
            }
        },"-=.2")

    }
    ,[])
    return (
    <div className={styles.body}>
        <div className={styles.page_container}>
            <div className={styles.page_not_found}>
            <span className={styles.spandesign+" spandesign"}>
                    <div className={styles.span404}>
                        404
                    </div>              
                </span>
                <span className={styles.spandesign+" spandesign"}>
                PAGE NOT</span>             
                <span className={styles.spandesign+" spandesign"}>FOUND</span>

            </div>
           <div className={styles.homebtn+" homebtn"}>
            <button><a href="/">TAKE ME HOME</a></button>
           </div>
        </div>
        </div>
    );
};

