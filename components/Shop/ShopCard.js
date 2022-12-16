// stylesheet
import { Rating } from '@mui/material';
import styles from '../../styles/shopCard.module.css'
const ShopCard = ({ image, name, price, avgrating, ratingcount, paragraph }) => {
    return (
        <div>
            <div className={styles.bestCard}>
                <img src={image}></img>
                <h3 title={name}>{name}</h3>
                <div className={styles.rating}>
                    <Rating value={avgrating} readOnly precision={0.1} />&nbsp;({ratingcount ? ratingcount : 0})
                </div>
                <div title={paragraph} className={styles.paragraph}>{paragraph}</div>
                <div className={styles.price}>৳ {price ? price : 0}</div>
                <button className={styles.btnStyle}>View</button>
            </div>
        </div>
    );
};

export default ShopCard;