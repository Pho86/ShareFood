import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import NButton, { BButton, Browse} from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text, {TutButton} from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import Logo from '../comps/Logo.js'
import TutorialTitle, { TutorialSubTitle, TutorialTitleInfo, TutorialTitleInfoBold, TutorialSecondLine } from '../comps/TutorialText'


export default function Home() {
  const r = useRouter();
  var { tut } = r.query
  if (tut === undefined) {
    tut = 0
  }
  return (
    <div className={styles.container}>
      <Text>Skip</Text>
      <TutorialTitle/> 
      <TutorialTitleInfoBold></TutorialTitleInfoBold>
      <TutorialTitleInfo></TutorialTitleInfo>
      <ImgCard />
      <TutorialSubTitle></TutorialSubTitle>
      <TutorialSecondLine></TutorialSecondLine>
      
      <ProgressBar></ProgressBar>
      <div className={styles.buttongrid}>
        <BButton text="< Back" route="tut"></BButton>
        <NButton text="Next >" route="tut"></NButton>
      </div>
      
      <TutButton/>
      <Logo/>
      <div className={styles.buttongrid}><Browse /></div>
    </div>
  )
}









