import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { CameraNavbar } from '../comps/NavBar';
import CameraBtn, { GalleryBtn, FlipCamBtn } from '../comps/CameraIcons';


export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
        <div>
        <div className={styles.buttongrid}>
        <img src="/camplaceholder.png" width="400px" height="700px"/>
        </div>
        <div class="camicons">
        <GalleryBtn/>
        <CameraBtn/>
        <FlipCamBtn/>

        </div>
        <CameraNavbar/>
        </div>
    )
}
