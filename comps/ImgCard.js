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

    const { route } = r.query
    if (route === 'tut2') {
        img="/img2.png"
    }

    return <Cont>
        <DispImg src={img} />
    </Cont>
}