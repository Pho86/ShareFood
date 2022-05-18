import styled from 'styled-components';
import { DownUp } from '../data/animation';
import { useRouter } from 'next/router'
import foody from '../data/food_content.json';
import { FormHelperText } from '@mui/material';
import { unstable_detectScrollType } from '@mui/utils';
import { areArraysEqual } from '@mui/base';


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
// width: 355px;
margin-left: auto;
margin-right: auto;
padding-top: 50px;
opacity:${props => props.opacity || "100"};
animation: ${DownUp} 1s;
`;

const UnanimatedChoice = styled.div`
display:flex;
justify-content:center;
// width: 355px;
margin-left: auto;
margin-right: auto;
padding-top: 50px;
opacity:${props => props.opacity || "100"};
animation: ${DownUp} 0s;
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
    e.target.style.background = "#FAEAB3";
}
//hover check button
function hoverY(e) {
    e.target.style.background = "#429946";
}

function removeHoverY(e) {
    e.target.style.background = "#7EC980";
}

var x = 0
var undoArray = [];
function getRandomizedNum(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    undoArray.unshift(x)
    return x
}

function undoButton() {
    var latest = undoArray[0]
    undoArray.shift()
    return latest
}

export default function ChoiceButtonY({
    img = "/button_choices/check_button.svg"
}) {
    const r = useRouter();
    var { food } = r.query;
    if (food === undefined) {
        food = 0
    }
    return <ChoiceCont onClick={
        () => r.push({
            pathname: "/confirm",
            query: {
                food: [food]
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


    return <ChoiceCont onClick={
        () => {
            r.replace({
                query: {
                    food: getRandomizedNum(0, foody.length - 1)
                    // food: Number(food) + 1 > foody.length - 1 ? 0 : Number(food) + 1
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

    if (undoArray.length === undefined) {
        return
    }

    if (undoArray.length === 0) {
        return <UnanimatedChoice opacity="0" onClick={
            () => console.log("I'm an invisible button.")
            
        }>
            <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
        </UnanimatedChoice>
    }

    else {
        return <ChoiceCont onClick={
            () => r.replace({
                query: {
                    food: undoButton()
                }
            })
        }>
            <Icon onMouseEnter={hover} onMouseLeave={removeHover} src={img}></Icon>
        </ChoiceCont>

    }
} 