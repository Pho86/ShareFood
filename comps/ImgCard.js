import styled from 'styled-components';
import {useRouter} from 'next/router'
// <img src="/eggs.png"></img>
// <img src="/peanutbutter.png"></img>
// <img src="/ramen.png"></img>
// <img src="/soysauce.png"></img>

const Cont = styled.div`
// style the cont here
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

    return <Cont>
        <DispImg src={img} />
    </Cont>
}
