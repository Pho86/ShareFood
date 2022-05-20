import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { CameraNavbar } from '../comps/NavBar';
import CameraBtn, { GalleryBtn, FlipCamBtn, FakeCamera} from '../comps/CameraIcons';


export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div>
            <div className={styles.buttongrid}>
                <FakeCamera />
            </div>
            <div className={styles.camicons}>
                <GalleryBtn />
                <CameraBtn />
                <FlipCamBtn />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <CameraNavbar />
        </div>
    )
}