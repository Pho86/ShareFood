import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import NavBar, { CameraNavbar } from '../comps/NavBar';
import BackButton, { BackAPage } from '../comps/PreviousButton'
import Details from '../comps/EnterDetails';
import PrevImg, { SmallIcon } from '../comps/PreviewImg';
import NButton, { Confirm2, Cancel2 } from '../comps/Button';

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div className={styles.container}>
            <BackAPage />
            <PrevImg />
            <SmallIcon />
            <Details />
            <CameraNavbar />
            <div className={styles.buttongrid}>
                <Cancel2 />
                <Confirm2 />
            </div>
        </div>
    )
}