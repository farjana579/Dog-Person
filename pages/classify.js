import { useState } from 'react';
import style from '../styles/classify.module.css'
import * as tf from '@tensorflow/tfjs'
import { mod } from '@tensorflow/tfjs';
const Classify = () => {
    const [puppy, setPuppy] = useState(null)
    const handleImageUpload = (e) => {
        setPuppy(URL.createObjectURL(e.target.files[0]))
    }
    async function runmodel() {
        const model = await tf.loadLayersModel('https://raw.githubusercontent.com/farjana579/Dog-Person-Frontend/main/models/model.json')
        // console.log(model);
        // const pred = model.predict(puppy)
        // console.log(pred);
    }
    const handlePredict = () => {
        runmodel();
    }
    return (
        <div className={style.container}>

            <div className={style.imageContainer}>
                {
                    puppy &&
                    <img src={puppy} alt="Puppy" />
                }
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
                        <input type="file" src="" alt="image input" className={style.imageInput} accept="image/*" onChange={handleImageUpload} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>OR</div>
                    <button className={style.classifyButton}>Capture an Image</button>

                    <button className={style.predictButton} onClick={handlePredict}>Predict</button>
                </div>
            </div>
        </div>
    );
};

export default Classify;