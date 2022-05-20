import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import Button from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import ChoiceButtonY, {ChoiceButtonL, ChoiceButtonR} from '../comps/ChoiceButtonY.js'
import FoodCard from '../comps/FoodCard.js';
import { foodImg } from '../data/img_content'
import Navbar from '../comps/NavBar'
import SlogonHeader from '../comps/slogon';
import BackButton, { BackAPage } from '../comps/PreviousButton';
import { ImageText, ImageTextInfo, ImageTextComment, TextBackground } from '../comps/hometext';
import { SwipeCard } from '../comps/Swipe.js';

export default function Home() {

    const r = useRouter();
    var { food } = r.query
    


    return (
        <div className={styles.container}>
            <BackButton></BackButton>
            <FoodCard></FoodCard>
            <div className={styles.buttongrid}>
                <ImageText></ImageText>
                <ImageTextInfo></ImageTextInfo>
                <ImageTextComment></ImageTextComment>
            </div>
            <div className={styles.choices}>
                <ChoiceButtonL />
                <ChoiceButtonY />
                <ChoiceButtonR />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Navbar></Navbar>




        </div>

    )
}  