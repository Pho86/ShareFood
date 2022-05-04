import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content'
import food from '../data/food_content.json';
import { DownUp } from '../data/animation';



const Cont = styled.div`
animation: ${DownUp} .4s;
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
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
