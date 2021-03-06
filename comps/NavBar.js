import styled from 'styled-components';
import {useRouter} from 'next/router';
import foody from '../data/food_content.json'

const BarCont = styled.div`
position:fixed;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
bottom:0px;
display:flex;
justify-content:center;
`

const Img = styled.img`
padding: 20px 40px 20px 40px;
width: 100%;
height: 90px;
background-color:${props => props.backgroundcolor || "#F1F1F1"};
`
function getRandomizedNum(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    return x
}

function changeBackground(e) {
    e.target.style.background = "#F3CA40";
  }

function removeBackground(e) {
    e.target.style.background ="#F1F1F1";
}


export default function HomeNavBar({
}){
    const r = useRouter();
    var {food} = r.query;    
    if(food === undefined) {
        food = 0;
    }
        return <BarCont>
        <Img src="/icons/w_home1.svg" backgroundcolor = "#F3CA40"  onClick={
            () => r.push({
                pathname: "/home",
                query: {
                    food: [food]
                }
              })
              
        } id="active"></Img>
        <Img src="/icons/history1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/messaging1",
              })
        }></Img>
    </BarCont>
    
}

export function HistoryNavbar({
}){
    const r = useRouter();
    var {food} = r.query;    
    if(food === undefined) {
        food = 0;
    }
        return <BarCont>
        <Img src="/icons/home1.svg"  onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/home",
                query: {
                    food: getRandomizedNum(0, foody.length - 1)
                }
              })
        } id="active"></Img>
        <Img src="/icons/w_history1.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/messaging1",
              })
        }></Img>
    </BarCont>

}

export function CameraNavbar({
}){
    const r = useRouter();
    var {food} = r.query;    
    if(food === undefined) {
        food = 0;
    }

        return <BarCont>
        <Img src="/icons/home1.svg"  onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/home",
                query: {
                    food: getRandomizedNum(0, foody.length - 1)
                }
              })
        } id="active"></Img>
        <Img src="/icons/history1.svg"  onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/w_camera1.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/messaging1",
              })
        }></Img>
    </BarCont>

}

export function ChatNavbar({
}){
    const r = useRouter();
    var {food} = r.query;    
    if(food === undefined) {
        food = 0;
    }

        return <BarCont>
        <Img src="/icons/home1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/home",
                query: {
                    food: getRandomizedNum(0, foody.length - 1)
                }
              })
        } id="active"></Img>
        <Img src="/icons/history1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera1.svg" onMouseEnter={changeBackground} onMouseLeave={removeBackground} onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/w_messages1.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/messaging1",
              })
        }></Img>
    </BarCont>
}