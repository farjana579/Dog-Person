import React,{useState} from 'react';
import { Rating } from '@mui/material';
import styles from '../../styles/writeReview.module.css';



const WriteReview = () => {
  const [value, setValue] = useState(0)
    return (   
               <div>   
               <div className={styles.write}>                                
                   <div> <input type="text"  placeholder="Title" className={styles.title}>                      
                    </input> </div>    
                    <div className={styles.rating}>             
                <div> <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
                </div>
                </div>                      
                   <div> <textarea className={styles.reviewDes} placeholder="Your Review">                      
                    </textarea>  </div>                
                </div>              
                <button className={styles.submit}>Submit</button>
       
        </div>
    );
};

export default WriteReview;