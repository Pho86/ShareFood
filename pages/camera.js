import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar from '../comps/NavBar';
import CameraBtn from '../comps/CameraIcons';

export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
        <div>
            <CameraBtn/>
        <NavBar/>
        </div>
    )
}