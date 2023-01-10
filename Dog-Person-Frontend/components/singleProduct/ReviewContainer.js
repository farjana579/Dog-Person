import React, { useEffect, useState } from 'react';
import Review from '../singleProduct/Review'
import styles from '../../styles/review.module.css'
import axios from 'axios';
const ReviewContainer = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        if (id !== undefined) {
            axios.get(`http://localhost:4000/reviews/${id}`).then(res => {
                setReviews(res.data);
            })
        }
    }, [id])
    return (
        <div className={styles.customer}>
            <h3 className={styles.headln}>Customer Review</h3>
            {
                reviews.map(review =>
                    <Review Name={review.user_name} headline={review.title}
                        message={review.description} rating={review.rating} like={review.like} dislike={review.dislike} />

                )
            }
            <div className={styles.cmnt}>
                <h3>View All Comments</h3>
                <h3>Add a Review</h3>
            </div>

        </div>
    );
};

export default ReviewContainer;