import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'

export default function Home() {
  return (
    <div className={styles.container}>
    <Text>Skip</Text>
    <ImgCard/>
    </div>
  )



}
