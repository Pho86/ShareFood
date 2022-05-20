import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content'
import foody from '../data/food_content.json';
import { DownUp } from '../data/animation';



const Cont = styled.div`
animation: ${DownUp} .4s;
`;

const DispImg = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
width:356px;
height:552px;
`


export default function FoodCard({

}) {
    const r = useRouter();

    var { food } = r.query

    if (food === undefined) {
        food = 0;
    }




    return <Cont>
        <DispImg src={foody[food].foodimg} />
    </Cont>
}
