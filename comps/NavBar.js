import styled from 'styled-components';
import {useRouter} from 'next/router';

const BarCont = styled.div`
position:absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
bottom:0;
display:flex;
justify-content:center;
`

const Img = styled.img`
padding: 30px 40px 30px 40px;
background-color:${props => props.backgroundcolor || "#F1F1F1"};
`


export default function HomeNavBar({
}){
    const r = useRouter();
        return <BarCont>
        <Img src="/icons/w_home.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/home",
              })
        } id="active"></Img>
        <Img src="/icons/history.svg" onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera.svg" onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages.svg" onClick={
            () => r.push({
                pathname: "/messaging",
              })
        }></Img>
    </BarCont>
    
}

export function HistoryNavbar({
}){
    const r = useRouter();
    var {route} = r.query;    
        return <BarCont>
        <Img src="/icons/home.svg"  onClick={
            () => r.push({
                pathname: "/home",
              })
        } id="active"></Img>
        <Img src="/icons/w_history.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera.svg" onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages.svg" onClick={
            () => r.push({
                pathname: "/messaging",
              })
        }></Img>
    </BarCont>

}

export function CameraNavbar({
}){
    const r = useRouter();
    var {route} = r.query;    

        return <BarCont>
        <Img src="/icons/home.svg"  onClick={
            () => r.push({
                pathname: "/home",
              })
        } id="active"></Img>
        <Img src="/icons/history.svg"  onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/w_camera.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/messages.svg" onClick={
            () => r.push({
                pathname: "/messaging",
              })
        }></Img>
    </BarCont>

}

export function ChatNavbar({
}){
    const r = useRouter();
    var {route} = r.query;    

        return <BarCont>
        <Img src="/icons/home.svg"  onClick={
            () => r.push({
                pathname: "/home",
              })
        } id="active"></Img>
        <Img src="/icons/history.svg"  onClick={
            () => r.push({
                pathname: "/history",
              })
        }></Img>
        <Img src="/icons/camera.svg"  onClick={
            () => r.push({
                pathname: "/camera",
              })
        }></Img>
        <Img src="/icons/w_messages.svg" backgroundcolor = "#F3CA40" onClick={
            () => r.push({
                pathname: "/messaging",
              })
        }></Img>
    </BarCont>
}