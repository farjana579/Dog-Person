import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AvgRating = ({ id }) => {
    // const [avgReview, setAvgReview] = useState(0);
    // const [reviewCount, setReviewCount] = useState(0);
    useEffect(() => {
        // axios.get(`http://localhost:4000/reviews/${id}`).then(res => {
        //     let avg = 0;
        //     setReviewCount(res.data?.length);
        //     for (const item of res.data) {
        //         avg += item.rating;
        //     }
        //     avg /= res.data?.length;
        //     // setAvgReview(avg)
        // })
    }, [])
    // console.log(reviews);
    return (
        <div>
            {/* <Rating readOnly value={avgReview} precision={0.1} /> */}
        </div>
    );
};

export default AvgRating;