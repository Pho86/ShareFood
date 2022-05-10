import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

const CamCont = styled.div`
display: flex;
align-items: center;
`
const CamPlaceholder = styled.div`
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
        <CamPlaceholder class="flip-card">
            <CamInner class="flip-card-inner">
                <CamFake class="flip-card-front">
                    <CamImg src="/fakecamera.png"></CamImg>
                </CamFake>
            </CamInner>
            <CamBack class="flip-card-back">
                <CamImg2 src="/ramen.png"></CamImg2>
            </CamBack>
        </CamPlaceholder>
    </CamCont>
}
