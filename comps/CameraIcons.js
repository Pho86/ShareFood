import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';

const BtnCont = styled.div`
display:flex;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .8s;
`
const CameraCont = styled.div`
display:flex;
justify-content: center;
gap: 3em;
animation: ${DownUp} .8s;
`
const GalleryCont = styled.div`
animation: ${DownUp} .8s;
`
const FlipCont = styled.div`
`
const Btn = styled.img`
`
export default function CameraBtn({
    img = "/icons/camerabtn.svg",

}) {
    const r = useRouter();
    const { image } = r.query;

    return <BtnCont>
        <CameraCont onClick={
            () => r.push({
                pathname: "/details"
            })}>
            <Btn src={img}></Btn>
        </CameraCont>
    </BtnCont>
}

export function GalleryBtn({
    img = "/icons/photos_icon.svg"
}) {
    const e = useRouter();
    const { image } = e.query;

    return <BtnCont>
        <GalleryCont>
            <Btn src={img}></Btn>
        </GalleryCont>
    </BtnCont>
}

export function FlipCamBtn({
    img = "/icons/flip_icon.svg"
}) {
    const w = useRouter();
    const { image } = w.query;

    return <BtnCont>
        <FlipCont>
            <Btn src={img}></Btn>
        </FlipCont>
    </BtnCont>
}