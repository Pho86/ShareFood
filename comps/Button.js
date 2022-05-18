import styled from 'styled-components';
import foody from '../data/food_content.json'
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import { ChangeFood } from '../data/order_content';
import ConfirmText from './Confirmed';


const ButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`

const BButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#FAEAB3;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`
//yellow button hover
function changeBackground(e) {
    e.target.style.background = "#C89E12";
  }

function removeBackground(e) {
    e.target.style.background ="#F3CA40";
}

//cancel button hover (lighter yellow)
function changeBackground2(e) {
    e.target.style.background = "#DFCB87";
  }

function removeBackground2(e) {
    e.target.style.background ="#FAEAB3";
}

export default function NButton({
    text = "Next >"
}) {

    const r = useRouter();
    var { tut } = r.query;
    if (tut === undefined) {
        tut = 0;
    }
    if (Number(tut) === 4) {
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
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
    return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
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
        return <BButtonCont onMouseEnter={changeBackground2} onMouseLeave={removeBackground2} onClick={
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
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
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
        return <BButtonCont onMouseEnter={changeBackground2} onMouseLeave={removeBackground2} onClick={
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
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            (e) => {
                ChangeFood(foody[food].name, foody[food].food, [food])
            //     r.push({
            //     query: {
            //         confirm: [food]
            //     }
            // })
        }
        }>
            {text}
        </ButtonCont>
    }
}
export function Confirm2({
    text = "Confirm"
}) {
    const r = useRouter();
    var { food } = r.query
    food = Number(food)
    return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
        () => r.back()
    }>
        {text}
    </ButtonCont>
}
export function CamConfirm({
    text = "Confirm"
}) {
    const r = useRouter();
    return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
        () => r.push({
                pathname: "/details"
        })
    }>
        {text}
    </ButtonCont>
}
export function Cancel2({
    text = "Cancel"
}) {
    const r = useRouter();
    return <BButtonCont onClick={
        () => r.back()
    }>
        {text}
    </BButtonCont>
}


export function Message({
}) {
    const r = useRouter();
    var { confirm } = r.query
    if (confirm === undefined) {
        return 
    }
    else if (confirm >= "0") {
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/messaging",
                query: {
                    food: [confirm]
                },
                
                
            })
        }>
            Message {foody[confirm].name}
        </ButtonCont>
    }


}