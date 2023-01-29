import React, { useEffect, useState } from 'react';
import Review from '../singleProduct/Review'
import styles from '../../styles/review.module.css'
import axios from 'axios';
import writeStyles from '../../styles/writeReview.module.css';
import { Rating } from '@mui/material';
const ReviewContainer = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    const [value, setValue] = useState(0)
    const [writeReview, setWriteReview] = useState(false)
    useEffect(() => {
        if (id !== undefined) {
            axios.get(`http://localhost:4000/reviews/${id}`).then(res => {
                setReviews(res.data);
            })
        }
    }, [id])
    const handleAddReview = e => {
        // getting value from input.
        const titleCon = document.getElementById('review_title');
        const title = titleCon.value;
        const descriptionCon = document.getElementsByTagName('textarea')[0];
        const description = descriptionCon.value;
        const rating = value;

        // gather them.
        let data = { title, description, rating, user_name: "" };
        // console.log(data);
        // axios post
        axios.post(`http://localhost:4000/reviews/${id}`, data)
            .then(res => {
                if (res.data?.insertedId) {
                    data = { ...data, like: 0, dislike: 0 }
                    setReviews([...reviews, data]);
                    console.log(res.data);
                    titleCon.value = ""
                    descriptionCon.value = ""
                }
                else {
                    alert("failed")
                }
            })
    }
    return (
        <div className={styles.customer}>
            <h3 className={styles.headln}>Customer Review</h3>
            {
                reviews.map(review =>
                    <Review Name={review.user_name} headline={review.title}
                        message={review.description} rating={review.rating} like={review.like} dislike={review.dislike} id={review._id} />
                )
            }
            <div className={styles.cmnt}>
                <button onClick={() => setWriteReview(!writeReview)}>{writeReview ? "Hide" : "Add a Review"}</button>
            </div>
            {
                writeReview &&
                // write review
                <div>
                    <div className={writeStyles.write}>
                        <div>
                            <input
                                id='review_title'
                                type="text" placeholder="Title" className={writeStyles.title} />
                        </div>
                        <div className={writeStyles.rating}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div>
                            <textarea className={writeStyles.reviewDes} placeholder="Your Review" />
                        </div>
                    </div>
                    <button className={writeStyles.submit} onClick={handleAddReview} >Submit</button>

                </div>
            }

        </div>
    );
};

export default ReviewContainer;