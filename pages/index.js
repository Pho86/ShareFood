import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

import Button from '../comps/Button'
import ProgressBar from '../comps/Progress'
import Text from '../comps/Text.js'
import ImgCard from '../comps/ImgCard.js'
import NavBar from '../comps/NavBar'


export default function Home() {
  const r = useRouter();

  const {route} = r.query


  return (
    
    <div className={styles.container}>
    <Text>Skip</Text>
    <Button></Button>
    <ProgressBar></ProgressBar>
    <ImgCard/>
    <NavBar></NavBar>
    <p></p>
    </div>
  )



}
