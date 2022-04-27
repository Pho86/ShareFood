import styled from 'styled-components';
import {useRouter} from 'next/router';

const Cont = styled.div`
margin-bottom: 20px;
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
opacity: 0;
animation: revealText 1s forwards;
animation-delay: .2s;
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

    return <Cont>
        <DispImg src={img} />
    </Cont>
}
