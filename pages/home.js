import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import Button from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import ChoiceButton from '../comps/ChoiceButton.js'
import FoodCard from '../comps/FoodCard.js'

export default function Home() {
    return (
        <div className={styles.container}>
            <FoodCard src="/peanutbutter.png"/>
            <ChoiceButton />

        </div>

    )
}  