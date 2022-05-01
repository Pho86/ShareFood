import styled from 'styled-components';
import { useRouter } from 'next/router';
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';


const DetailsCont = styled.div`
// background-color: pink;
margin: 30px;
`

const DetailBox = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
`


export default function Details({
    
}) {
    const r = useRouter();
    return <DetailsCont>
        <DetailBox class="list">{categories1[0].title}</DetailBox>  
        <DetailBox class="list two">{categories1[1].title}</DetailBox>
        <DetailBox class="list three">{categories1[2].title}</DetailBox>
        <DetailBox class="list four">{categories1[3].title}</DetailBox>
        <DetailBox class="list five">{categories1[4].title}</DetailBox>
        <DetailBox class="list six">{categories1[5].title}:</DetailBox>
    </DetailsCont>
}

