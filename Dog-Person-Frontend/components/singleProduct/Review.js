import { Rating } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react';
import styles from '../../styles/review.module.css'
import like_img from '../../image/like_white.png'
import dislike_img from '../../image/dislike.png'
const Review = ({ Name, headline, message, rating, like, dislike, id }) => {
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(like);
    const [dislikeCount, setDislikeCount] = useState(dislike);
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        const count = liked ? likeCount - 1 : likeCount + 1;
        setLikeCount(count);
        setLiked(!liked);
        let dislikeC = dislikeCount
        if (disliked) {
            dislikeC = dislikeCount - 1;
            setDislikeCount(dislikeC);
            setDisliked(false);
        }
        const data = {
            like: count,
            dislike: dislikeC,
        }
        axios.put(`http://localhost:4000/reviews/${id}`, data)
            .then(res => console.log(res.data))
    }
    const handleDislike = () => {
        const count = disliked ? dislikeCount - 1 : dislikeCount + 1;
        setDislikeCount(count);
        setDisliked(!disliked);
        let likeC = likeCount
        if (liked) {
            likeC = likeCount - 1;
            setLikeCount(likeC);
            setLiked(false);
        }
        const data = {
            dislike: count,
            like: likeC
        }
        axios.put(`http://localhost:4000/reviews/${id}`, data)
            .then(res => console.log(res.data))
    }

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
                        <img src={like_img.src} className={styles.like} onClick={handleLike} />
                    </div>
                    <div>(<span id='like_count'>{likeCount}</span>)</div>
                </div>
                <div className={styles.flexCenter}>

                    <div> <img src={dislike_img.src} className={styles.like} onClick={handleDislike} /> </div>
                    <div>(<span id='dislike_count'>{dislikeCount}</span>)</div>
                </div>
            </div>

        </div>
    );
};

export default Review;