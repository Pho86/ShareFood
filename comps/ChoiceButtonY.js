import styled from 'styled-components';
import { DownUp } from '../data/animation';
import {useRouter} from 'next/router'
import foody from '../data/food_content.json';


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .8s;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;

`
//check button
export default function ChoiceButtonY({
    img = "/button_choices/check_button.svg"
}) {
    const r = useRouter();
    var { food } = r.query;
    if (food === undefined ) {
        food = 0
    }
    return <ChoiceCont onClick={
        ()=>r.push({
            pathname: "/confirm",
            query: {
                food:[food]
            }
        })
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
}