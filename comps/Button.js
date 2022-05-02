import styled from 'styled-components';
import foody from '../data/food_content.json'
import { useRouter } from 'next/router';

const ButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// opacity: 0;
// animation: revealText 1s forwards;
// animation-delay: .2s;
`;

const BButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#FAEAB3;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
`;


export default function NButton({
    text = "Next >"
}) {

    const r = useRouter();
    var { tut } = r.query;
    if (tut === undefined) {
        tut = 0;
    }
    if (Number(tut) === 4) {
        return <ButtonCont onClick={
            () => r.push({
                query: {tut: tut = 5}
            })
        }>
            Done {'>'}
        </ButtonCont>
    }
    if (tut === '5') {
        return
    }
    return <ButtonCont onClick={
        () => r.replace({
            query: {
                tut: tut === undefined ? tut : Math.min(4, Number(tut) + 1)
            }
        })
    }>
        {text}
    </ButtonCont>
}

export function BButton({
    text = "< Back"
}) {
    const r = useRouter();
    var { tut } = r.query;
    if (tut === '5') {
        return 
    }
    if (Number(tut) >= 1) {
        return <BButtonCont onClick={
            () => r.replace({
                query: {
                    tut: tut === undefined ? tut : Math.max(0, Number(tut) - 1)
                }
            })
        }>
            {text}
        </BButtonCont>
    }
    

}

export function Browse({
    text = "Start Browsing"
}) {
    const r = useRouter();
    var {tut} = r.query
    if (tut === '5') {
        return <ButtonCont onClick={
            () => r.push({
                pathname: "/home"
            })
        }>
            {text}
        </ButtonCont>
    }
}

export function Cancel({
    text = "Cancel"
}) {
    const r = useRouter();
    var { food } = r.query
    food = Number(food)
    if (food === undefined) {
        food = 0;
    }
    else if (food < "100") {
        return <BButtonCont onClick={
            () => r.back()
        }>
            {text}
        </BButtonCont>
    }

}




export function Confirm({
    text = "Confirm"
}) {
    const r = useRouter();
    var { food } = r.query
    food = Number(food)
    if (food === undefined) {
        food = 0;
    }
    else if (food < "100") {
        return <ButtonCont onClick={
            () => r.push({
                query: {
                    confirm: [food]
                },

            })
        }>
            {text}
        </ButtonCont>
    }

}


export function Message({
}) {
    const r = useRouter();
    var { confirm } = r.query
    if (confirm === undefined) {
        return 
    }
    else if (confirm >= "0") {
        return <ButtonCont onClick={
            () => r.push({
                pathname: "/messaging",
                query: {
                    food: [confirm]
                }
            })
        }>
            Message {foody[confirm].name}
        </ButtonCont>
    }


}