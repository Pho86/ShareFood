import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content';
import { DownUp } from '../data/animation';
import foody from '../data/food_content.json';


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: 0;
margin-right: auto;
animation: ${DownUp} .8s;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;

`
// x button
export default function ChoiceButtonX({
    img = "/button_choices/x_button.svg"
}) {
    const r = useRouter();
    var { food } = r.query;
    if (food === undefined) {
        food = 0;
    }

    return <ChoiceCont onClick={
        () => {
            r.push({
                query: {
                    food: Number(food) + 1 > foody.length - 1 ? 0 : Number(food) + 1
                }
            })
        }
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>








}

