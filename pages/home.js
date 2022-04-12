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


export default function Home() {

    const r = useRouter();
    const {route} = r.query
    
    return (
        <div className={styles.container}>
            <FoodCard/>

            <div class="choices">
                <ChoiceButtonX />
                <ChoiceButtonU />
                <ChoiceButtonY />
            </div>
            
            

        </div>

    )
}  