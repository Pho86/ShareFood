import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import Button from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import ChoiceButtonX from '../comps/ChoiceButtonX.js'
import ChoiceButtonU from '../comps/ChoiceButtonU.js'
import ChoiceButtonY from '../comps/ChoiceButtonY.js'
import FoodCard from '../comps/FoodCard.js'
import { foodImg } from '../data/img_content'
import Navbar from '../comps/NavBar'
import BackButton from '../comps/PreviousButton'

export default function Home() {

    const r = useRouter();
    var { image } = r.query
    console.log(image)
    if (image === 5) {
        image = 0;
    }


    return (
        <div className={styles.container}>
            <BackButton></BackButton>
            <FoodCard />
            <div class="choices">
                <ChoiceButtonX />
                <ChoiceButtonU />
                <ChoiceButtonY />
            </div>
            <Navbar></Navbar>
            



        </div>

    )
}  