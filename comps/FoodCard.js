import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content'
import food from '../data/food_content.json'


const Cont = styled.div`
// style the cont here
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
opacity: 0;
animation: revealText 1s forwards;
animation-delay: .2s;
`


export default function FoodCard({

}) {
    const r = useRouter();

    let { image } = r.query

    if (image === undefined) {
        image = 0;
    }




    return <Cont>
        <DispImg src={food[image].foodimg} />
    </Cont>
}