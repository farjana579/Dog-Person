import React from 'react';
import styles from '../../styles/review.module.css'
const Review = ({ Name, headline, message }) => {
    return (
        <div className={styles.review}>
            <div className={styles.name}>{Name}</div>
            {/* <div>{props.rating}</div> */}
            <div className={styles.hl}>{headline}</div>
            <div className={styles.msg}>{message}</div>

        </div>
    );
};

export default Review;