import { Rating } from '@mui/material';
import React from 'react';
import styles from '../../styles/review.module.css'
import like_img from '../../image/like_white.png'
import dislike_img from '../../image/dislike.png'
const Review = ({ Name, headline, message, rating, like, dislike }) => {
    return (
        <div className={styles.review}>
            <div className={styles.name}>{Name}</div>
            <div> <Rating
                name="read-only"
                value={rating}
                readOnly
            />
            </div>
            <div className={styles.hl}>{headline}</div>
            <div className={styles.msg}>{message}</div>
            <div className={styles.likeDislike}>
                <div className={styles.flexCenter}>
                    <div>
                        <img src={like_img.src} className={styles.like} />
                    </div>
                    <div>({like})</div>
                </div>
                <div className={styles.flexCenter}>

                    <div> <img src={dislike_img.src} className={styles.like} /> </div>
                    <div>({dislike})</div>
                </div>
            </div>

        </div>
    );
};

export default Review;