import React, { useEffect, useState } from 'react';
import Review from '../singleProduct/Review'
import styles from '../../styles/review.module.css'
import axios from 'axios';
import writeStyles from '../../styles/writeReview.module.css';
import { Rating } from '@mui/material';
import { useRouter } from 'next/router';
const ReviewContainer = ({ id, setRating, setCount }) => {
    const [reviews, setReviews] = useState([]);
    const [value, setValue] = useState(0)
    const [writeReview, setWriteReview] = useState(false);
    const [username, setUsername] = useState(null);
    const router = useRouter();
    useEffect(() => {
        if (id !== undefined) {
            axios.get(`http://localhost:4000/reviews/${id}`).then(res => {
                let sum = 0;
                for (const item of res.data) {
                    sum += item.rating;
                }
                sum /= res.data.length;
                setReviews(res.data);
                // setCount(res.data)
                // setRating(sum)
                // console.log(res.data);
            })
            if (username == null)
                setUsername(localStorage.getItem("username"))
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
        let data = { title, description, rating, username };
        // console.log(data);
        // axios post
        axios.post(`http://localhost:4000/reviews/${id}`, data)
            .then(res => {
                if (res.data?.insertedId) {
                    data = { ...data, like: 0, dislike: 0 }
                    setReviews([...reviews, data]);
                    // console.log(res.data);
                    titleCon.value = ""
                    descriptionCon.value = ""
                }
                else {
                    alert("failed")
                }
            })
    }
    const loggedIn = () => {
        if (localStorage.getItem("username") == null) {
            router.push("/login")
            return false;
        }
        return true;
    }
    return (
        <div className={styles.customer}>
            <h3 className={styles.headln}>Customer Review</h3>
            {
                reviews.map(review => <Review Name={review.username} headline={review.title}
                    message={review.description} rating={review.rating} like={review.like} dislike={review.dislike} id={review._id} react={review.react} username={username} />
                )
            }
            <div className={styles.cmnt}>
                <button onClick={() => setWriteReview(!writeReview)}>{writeReview ? "Hide" : "Add a Review"}</button>
            </div>
            {
                writeReview && loggedIn() &&
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