import { useState } from 'react';
import style from '../styles/classify.module.css'
import * as tmImage from '@teachablemachine/image'
import paw from '../image/paw_animation.gif'
const Classify = () => {
    let model;
    const [puppy, setPuppy] = useState(null)
    const [predictions, setPredictions] = useState(null);
    const [predictBtn, setPredictBtn] = useState(false);
    const handleImageUpload = (e) => {
        if (e.target.files[0]) {
            setPuppy(URL.createObjectURL(e.target.files[0]))
            setPredictions(null)
            setPredictBtn(false)
        }
        else {
            setPuppy(null)
        }
    }
    async function runmodel() {
        const url = "https://teachablemachine.withgoogle.com/models/-vXfty1xE/";
        const modelUrl = url + "model.json"
        const metaDataUrl = url + "metadata.json"
        model = await tmImage.load(modelUrl, metaDataUrl);
        const classCount = model.getTotalClasses();

        const img = document.createElement("img");
        img.src = puppy;
        const prediction = await model.predict(img);
        setPredictions(prediction);
    }
    const handlePredict = () => {
        setPredictBtn(!predictBtn);
        runmodel();
    }
    return (
        <div className={style.container}>

            {predictBtn ?
                <div className={style.predict_section}>
                    <img src={puppy} alt='puppy' className={style.predict_img} />
                    <div className={style.predict_div}>
                        {
                            predictions == null ?
                                <div className={style.loading_spinner}>
                                    <img src={paw.src} />
                                </div>
                                :
                                <div>
                                    {
                                        predictions.map(predicts => <div className={style.predict_class}>{predicts.className}: <span>{predicts.probability.toFixed(2)}</span></div>)
                                    }
                                </div>
                        }
                    </div>
                </div> :
                <div className={style.imageContainer}>
                    {
                        puppy &&
                        <img src={puppy} alt="Puppy" />
                    }
                </div>

            }
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
                    {
                        puppy && <button className={style.predictButton} onClick={handlePredict}>Predict</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Classify;