import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content'


const Cont = styled.div`
// style the cont here
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
`


export default function FoodCard({
    img = "/cereal.png"
    // img = [foodImg[1].img]

}) {
    const r = useRouter();

    let { image } = r.query

    if (image === undefined) {
        image = 0;
    }




    return <Cont>
        <DispImg src={foodImg[image].img} />
    </Cont>
}