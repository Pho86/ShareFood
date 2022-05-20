import styled from 'styled-components';
import foody from '../data/food_content.json'
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import { ChangeFood, ChangeHistory } from '../data/order_content';
import ConfirmText from './Confirmed';
import { GetAllDetails } from '../data/order_content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../styles/Home.module.css';


const ButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`
const Btn = styled.img`
`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 8,
    borderRadius:5
};
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
    e.target.style.background = "#F3CA40";
}

//cancel button hover (lighter yellow)
function changeBackground2(e) {
    e.target.style.background = "#DFCB87";
}

function removeBackground2(e) {
    e.target.style.background = "#FAEAB3";
}

function getRandomizedNum(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    return x
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
                query: {
                    tut: tut = 5
                }
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
    var { tut } = r.query
    if (tut === '5') {
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/home",
                query: {
                    food: getRandomizedNum(0, foody.length - 1)
                }
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (food === undefined) {
        food = 0;
    }
    else if (food >= 41) {
        return <div>
            <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
                (e) => {
                    handleOpen()
                }
            }>
                {text}
            </ButtonCont>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <p>This is your food. Please find another food. 😟</p>
                </Box>
            </Modal>
        </div>
    }
    else if (food < "100") {
        return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            (e) => {
                ChangeFood(foody[food])
                ChangeHistory(foody[food].food, foody[food].weight, foody[food].foodimg)
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
    return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
        () => {
            GetAllDetails();
            r.push({
                pathname: "/home",
                query: {
                    food: foody.length - 1
                }
            })
        }
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
export function Home2({
    text = "Home2"
}) {
    const r = useRouter();
    var { food } = r.query
    food = Number(food)
    return <ButtonCont onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
        () => r.push({
            pathname: "/home",
            query: { food: Math.random(getRandomizedNum(0, foody.length - 1)) }
        })
    }>
        {text}
    </ButtonCont>
}