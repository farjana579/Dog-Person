import React, { useState } from 'react';
import { Rating } from '@mui/material';
import writeStyles from '../../styles/writeReview.module.css';
import axios from 'axios';

const WriteReview = ({ id }) => {
  const [value, setValue] = useState(0)
  const username = localStorage.getItem("username")
  console.log(username);
  const handleAddReview = e => {
    // getting value from input.
    const title = document.getElementsByTagName('input')[1].value;
    const description = document.getElementsByTagName('textarea')[0].value;
    const rating = value;

    // gather them.
    const data = { title, description, rating, username };
    console.log(data);
    // axios post
    axios.post(`http://localhost:4000/reviews/${id}`, data)
      .then(res => console.log(res.data))
  }
  return (
    <div>
      <div className={writeStyles.write}>
        <div>
          <input type="text" placeholder="Title" className={writeStyles.title} />
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
  );
};

export default WriteReview;