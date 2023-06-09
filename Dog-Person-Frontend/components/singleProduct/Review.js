import { Rating } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/review.module.css'
import like_active_img from '../../image/like_active.png'
import like_inactive_img from '../../image/like_inactive.png'
import dislike_active_img from '../../image/dislike_active.png'
import dislike_inactive_img from '../../image/dislike_inactive.png'
const Review = ({ Name, headline, message, rating, like, dislike, id, react, username }) => {
    const [likeCount, setLikeCount] = useState(like);
    const [dislikeCount, setDislikeCount] = useState(dislike);
    const [liked, setLiked] = useState(react != null ? react[username] == null ? 0 : react[username] : 0);
    const handleLike = () => {
        let data = {
        }
        if (liked == 1) {
            data["like"] = likeCount - 1;
            data["dislike"] = dislikeCount;
            react[username] = 0;
            data["react"] = react;
            setLikeCount(likeCount - 1);
            setLiked(0);
        }
        else if (liked == -1) {
            setLiked(1);
            data["like"] = likeCount + 1;
            data["dislike"] = dislikeCount - 1;
            react[username] = 1;
            data["react"] = react;
            setLikeCount(likeCount + 1)
            setDislikeCount(dislikeCount - 1);
        }
        else {
            setLiked(1);
            data["like"] = likeCount + 1;
            data["dislike"] = dislikeCount;
            react[username] = 1;
            data["react"] = react;
            setLikeCount(likeCount + 1);
        }

        // console.log(data);
        axios.put(`http://localhost:4000/reviews/${id}`, data)
            .then(res => console.log(res.data))
    }
    const handleDislike = () => {
        let data = {
        }
        if (liked == 1) {
            data["like"] = likeCount - 1;
            data["dislike"] = dislikeCount + 1;
            react[username] = -1;
            data["react"] = react;
            setLikeCount(likeCount - 1);
            setDislikeCount(dislikeCount + 1);
            setLiked(-1);
        }
        else if (liked == -1) {
            setLiked(0);
            data["like"] = likeCount;
            data["dislike"] = dislikeCount - 1;
            react[username] = 0;
            data["react"] = react;
            setDislikeCount(dislikeCount - 1);
        }
        else {
            setLiked(-1);
            data["like"] = likeCount;
            data["dislike"] = dislikeCount + 1;
            react[username] = -1;
            data["react"] = react;
            setDislikeCount(dislikeCount + 1);
        }
        // console.log(data);
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
                        {
                            liked == 1 ? <img src={like_active_img.src} className={styles.like} onClick={handleLike} /> : <img src={like_inactive_img.src} className={styles.like} onClick={handleLike} />
                        }
                    </div>
                    <div>(<span id='like_count'>{likeCount}</span>)</div>
                </div>
                <div className={styles.flexCenter}>

                    <div> {liked == -1 ? <img src={dislike_active_img.src} className={styles.like} onClick={handleDislike} /> : <img src={dislike_inactive_img.src} className={styles.like} onClick={handleDislike} />} </div>
                    <div>(<span id='dislike_count'>{dislikeCount}</span>)</div>
                </div>
            </div>

        </div>
    );
};

export default Review;