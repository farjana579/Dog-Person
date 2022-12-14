import React from 'react';
import Review from './Review'
import styles from '../styles/review.module.css'
const ReviewContainer = () => {

    return (
        <div className={styles.customer}>
            <h3 className={styles.headln}>Customer Review</h3>
            <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
            <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
            <Review Name="Abid Al Hasan" headline="This Product is incredible. My dog loves it."
                message="I bought this food because it has a lower fat content and because the pieces are larger and makes my Cocker Spaniel and Boxer chew rather than swallow. I am very happy with this dog food because they both lost weight. The kibble is larger in shape and less dense. I am thrilled with it.
                "></Review>
            <div className={styles.cmnt}>
                <h3>View All Comments</h3>
                <h3>Write Review</h3>
            </div>
        </div>
    );
};

export default ReviewContainer;