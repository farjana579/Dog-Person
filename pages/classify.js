import style from '../styles/classify.module.css'
import puppy from '../image/classifyDog.png'
const Classify = () => {
    return (
        <div className={style.container}>

            <div className={style.imageContainer}>
                <img src={puppy.src} alt="Puppy" />
            </div>
            <div className={style.classifyContainer}>
                <div>
                    <div className={style.pageTitle}>
                        Predict the breed of your <span>pet</span>
                    </div>
                    <div className={style.message}>
                        In this playground competition, you are provided a strictly canine subset of ImageNet in order to practice fine-grained image categorization. How well you can tell your Norfolk Terriers from your Norwich Terriers? With 120 breeds of dogs and a limited number training images per class, you might find the problem more, err, ruff than you anticipated.
                    </div>
                    <div className={style.uploadImage}>
                        <button className={style.classifyButton}>Upload an Image</button>
                        <input type="file" src="" alt="image input" className={style.imageInput} accept="image/*" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>OR</div>
                    <button className={style.classifyButton}>Capture an Image</button>

                    <button className={style.predictButton}>Predict</button>
                </div>
            </div>
        </div>
    );
};

export default Classify;