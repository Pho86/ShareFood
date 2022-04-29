import styled from 'styled-components';
import { useRouter } from 'next/router';

const CameraCont = styled.div`
display:flex;
justify-content: center;
gap: 3em;
`
const GalleryCont = styled.div``
const FlipCont = styled.div`
`
const Btn = styled.img`
`
export default function CameraBtn({
    img = "/icons/camerabtn.svg",

}) {
    const r = useRouter();
    const { image } = r.query;

    return <CameraCont onClick={
        ()=>r.push({
            pathname: "/details"
        })}>
    <Btn src={img}></Btn>
    </CameraCont>
}

export function GalleryBtn({
    img = "/icons/photos_icon.svg"
}) {
    const e = useRouter();
    const  { image } = e.query;

    return <GalleryCont>
        <Btn src={img}></Btn>
    </GalleryCont>
}

export function FlipCamBtn({
    img = "/icons/flip_icon.svg"
}) {
    const w = useRouter();
    const { image } = w.query;

    return <FlipCont>
        <Btn src={img}></Btn>
    </FlipCont>
}