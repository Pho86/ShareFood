import styled from 'styled-components';
import { useRouter } from 'next/router';

const CameraCont = styled.div`
display:flex;
justify-content: center;
gap: 3em;
`
const Btn = styled.img`
`
export default function CameraBtn({
    cam = "/icons/camerabtn.svg",
    pho = "/icons/photos_icon.svg",
    flip = "/icons/flip_icon.svg"
}) {
    const r = useRouter();
    const { image } = r.query;

    return <CameraCont>
    <Btn src={pho}></Btn> 
    <Btn src={cam}></Btn>
    <Btn src={flip}></Btn>
    </CameraCont>
}