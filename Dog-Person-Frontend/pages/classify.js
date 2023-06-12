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
        // const url = "https://teachablemachine.withgoogle.com/models/IerQIOPqD/"
        const modelUrl = url + "model.json"
        const metaDataUrl = url + "metadata.json"
        model = await tmImage.load(modelUrl, metaDataUrl);

        const img = document.createElement("img");
        img.src = puppy;
        console.log(img);

        const prediction = await model.predict(img);
        for (let i = 0; i < prediction.length; i++) {
            for (let j = i + 1; j < prediction.length; j++) {
                if (prediction[j].probability > prediction[i].probability) {
                    const swap = prediction[i];
                    prediction[i] = prediction[j]
                    prediction[j] = swap;
                }
            }
        }
        setPredictions(prediction);
        console.log(prediction);
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

            {/* Initial UI */}
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

                        {/* Accept image file only */}
                        <input type="file" src="" alt="image input" className={style.imageInput} accept="image/*" onChange={handleImageUpload} />
                    </div>
                    {
                        puppy && <button className={style.predictButton} onClick={handlePredict}>Predict</button>
                    }
                </div>
            </div>
            {/* End of initial ui */}
        </div>
    );
};

export default Classify;