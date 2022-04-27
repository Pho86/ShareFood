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
    img = "/icons/camerabtn.svg"
}) {
    const r = useRouter();
    const { image } = r.query;

    return <CameraCont>
    <Btn src="/icons/flip_icon.svg"></Btn>
    <Btn src={img}></Btn>
    <Btn src="/icons/photos_icon.svg"></Btn> 
    </CameraCont>
}