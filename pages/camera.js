import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { CameraNavbar } from '../comps/NavBar';
import CameraBtn, { GalleryBtn, FlipCamBtn, FakeCamera } from '../comps/CameraIcons';


export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div>
            <div className={styles.buttongrid}>
                <FakeCamera />
                {/* <div className={styles.flip_card}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src="/fakecamera.png" height="600px"></img>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src="/fakecamera2.png" height="600px"></img>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className={styles.camicons}>
                <GalleryBtn />
                <CameraBtn />
                <FlipCamBtn />
            </div>
            <CameraNavbar />
        </div>
    )
}