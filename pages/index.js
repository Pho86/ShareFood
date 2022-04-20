import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import NButton, { BButton } from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import NavBar from '../comps/NavBar'
import TutorialTitle, { TutorialSubTitle, TutorialTitleInfo, TutorialTitleInfoBold } from '../comps/TutorialText'


export default function Home() {
  const r = useRouter();
  const { route } = r.query

  return (
    <div className={styles.container}>
      <TutorialTitle/> 
      <TutorialTitleInfoBold></TutorialTitleInfoBold>
      <TutorialTitleInfo></TutorialTitleInfo>
      <Text>Skip</Text>
      <ImgCard />
      <TutorialSubTitle>With Share Food, you can prevent food from being wasted away for free!</TutorialSubTitle>
      
      <ProgressBar></ProgressBar>
      <div className={styles.buttongrid}>
        <BButton text="< Back" route="tut"></BButton>
        <NButton text="Next >" route="tut"></NButton>
      </div>
      <p></p>
    </div>
  )
}









