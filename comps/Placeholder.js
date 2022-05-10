import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

const CamCont = styled.div`
display: flex;
align-items: center;
`

const CamPlaceholder = styled.div`
transform:${props => props.transform || 'rotateY(180deg'}
`
const CamInner = styled.div`
`
const CamFake = styled.div`
`
const CamImg = styled.img`
height: 600px;
`
const CamImg2 = styled.img`
`
const CamBack = styled.div`

`
export default function FakeCamera({ }) {
    return <CamCont>
        <CamPlaceholder className={styles.flip_card}>
            <CamInner className={styles.flip_card_inner}>
                <CamFake className={styles.flip_card_front}>
                    <CamImg src="/fakecamera.png"></CamImg>
                </CamFake>
            </CamInner>
            <CamBack className={styles.flip_card_back}>
                <CamImg2 src="/ramen.png"></CamImg2>
            </CamBack>
        </CamPlaceholder>
    </CamCont>
}
