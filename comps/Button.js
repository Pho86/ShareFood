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
    function FoodSelection() {
        var selfood = foody[food].food;
        return selfood;
    }
    function NameSelection() {
        var name = foody[food].name;
        return name;
    }
    if (food === undefined) {
        food = 0;
    }
    else if (food < "100") {
        return <ButtonCont onClick={
            (e) => {
                // ChangeFood([food], )
                ChangeFood(foody[food].name, foody[food].food)
                console.log(ChangeFood())
                // console.log(FoodSelection())
                // console.log(NameSelection())
                r.push({
                query: {
                    confirm: [food]
                }
            })
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
    return <ButtonCont onClick={
        () => r.back()
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
        return <ButtonCont onClick={
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