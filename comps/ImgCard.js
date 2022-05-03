import styled from 'styled-components';
import {useRouter} from 'next/router';
import { DownUp } from '../data/animation';

const Cont = styled.div`
margin-bottom: 20px;
animation: ${DownUp} .4s;
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
`

export default function ImgCard({
    img = "/img1.png"

}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        img="/img1.png"
    }
    if (tut === '1') {
        img="/img2.png"
    }
    if (tut === '2') {
        img="/img3.png"
    }
    if (tut === '3') {
        img="/img4.png"
    }
    if (tut === '4') {
        img="/img5.png"
    }
    if (tut === '5') {
        return 
    }

    return <Cont>
        <DispImg src={img} />
    </Cont>
}
