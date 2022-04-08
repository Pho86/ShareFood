import styled from 'styled-components';
import {useRouter} from 'next/router';
  
const BarCont = styled.div`
display:flex;
justify-content:center;
`

const Img = styled.img`
padding: 40px 50px 40px 50px;
background-color:#F1F1F1;
`



export default function NavBar({

}){
    const r = useRouter();
    const {route} = r.query;

    return <BarCont>
        <Img src="/icons/home.svg" onClick={
            () => r.push({
                //pathname: "/home",
                query: {
                  type: "test1"
                }})
        } id="active"></Img>
        <Img src="/icons/history.svg" onClick={
            () => r.push({
                //pathname: "/history",
                query: {
                  type: "test2"
                }})
        }></Img>
        <Img src="/icons/camera.svg" onClick={
            () => r.push({
                //pathname: "/camera",
                query: {
                  type: "test3"
                }})
        }></Img>
        <Img src="/icons/messages.svg" onClick={
            () => r.push({
                //pathname: "/messaging",
                query: {
                  type: "test4"
                }})
        }></Img>
    </BarCont>
}

