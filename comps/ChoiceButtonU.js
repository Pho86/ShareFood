import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import food from '../data/food_content.json';

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
//undo button
export default function ChoiceButtonU({
    img = "/button_choices/undo_button.svg"
}) {
    const r = useRouter();
    var { image } = r.query;


    if (image === undefined ) {
        return <ChoiceCont onClick={
            () => r.push({
                query: {
                    image: food.length -1
                }
            })
        }>
            <Icon src={img}></Icon>
        </ChoiceCont>
    }

    if (image === '0') {
        return <ChoiceCont onClick={
            () => r.push({
                query: {
                    image: food.length -1
                }
            })
        }>
            <Icon src={img}></Icon>
        </ChoiceCont>
    }

    else {
        return <ChoiceCont onClick={
        () => r.push({
            query: {
                image: image === undefined ? image : Math.max(0, Number(image) - 1)
            }
        })
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
} }