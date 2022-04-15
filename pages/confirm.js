import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Text from '../comps/Text.js'
import ConfirmText from '../comps/ConfirmText';


export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <ConfirmText/>
    )
  }
  