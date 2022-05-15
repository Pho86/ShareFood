import styled from 'styled-components';
import { DownUp } from '../data/animation';
import {useRouter} from 'next/router'
import foody from '../data/food_content.json';


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
// width: 355px;
margin-left: auto;
margin-right: auto;
padding-top: 50px;
animation: ${DownUp} 1s;
`;

const Icon = styled.img`
display: block;
background-color: #FAEAB3;
border-radius: 50%;
margin-left: auto;
margin-right: auto;
`
const YIcon = styled.img`
display: block;
background-color: #7EC980;
border-radius: 50%;
margin-left: auto;
margin-right: auto;
`

//hover left and right button
function hover(e) {
    e.target.style.background = "#DFC887";
  }

function removeHover(e) {
    e.target.style.background ="#FAEAB3";
}
//hover check button
function hoverY(e) {
    e.target.style.background = "#429946";
  }

function removeHoverY(e) {
    e.target.style.background ="#7EC980";
}
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
        <YIcon onMouseEnter={hoverY} onMouseLeave={removeHoverY} src={img}></YIcon>
    </ChoiceCont>
}

export function ChoiceButtonL({
    img = "/button_choices/x_button.svg"
}) {
    const r = useRouter();
    var { food } = r.query;
    if (food === undefined) {
        food = 0;
    }

    return <ChoiceCont  onClick={
        () => {
            r.replace({
                query: {
                    food: Number(food) + 1 > foody.length - 1 ? 0 : Number(food) + 1
                }
            })
        }
    }>
        <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
    </ChoiceCont>
}

export function ChoiceButtonR({
    img = "/button_choices/undo_button.svg"
}) {
    const r = useRouter();
    var { food } = r.query;


    if (food === undefined ) {
        return <ChoiceCont onClick={
            () => r.replace({
                query: {
                    food: foody.length -1
                }
            })
        }>
            <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
        </ChoiceCont>
    }

    if (food === '0') {
        return <ChoiceCont onClick={
            () => r.replace({
                query: {
                    food: foody.length -1
                }
            })
        }>
            <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
        </ChoiceCont>
    }

    else {
        return <ChoiceCont onClick={
        () => r.replace({
            query: {
                food: food === undefined ? food : Math.max(0, Number(food) - 1)
            }
        })
    }>
        <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
    </ChoiceCont>
} }