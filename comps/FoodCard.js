import styled from 'styled-components';
import {useRouter} from 'next/router'


const Cont = styled.div`
// style the cont here
`;

const DispImg= styled.img`
display:block;
margin-left: auto;
margin-right: auto;
`


export default function FoodCard({
    img = "/peanutbutter.png"

}) {
    const r = useRouter();

    const { image } = r.query

    if (image === '0') {
        img="/peanutbutter.png"
    }
    if (image === '1') {
        img="/cereal.png"
    } 
    if (image === '2') {
        img="/eggs.png"
    } 
    if (image === '3') {
        img="/ramen.png"
    } 
    if (image === '4') {
        img="/soysauce.png"
    } 

    return <Cont>
        <DispImg src={img} />
    </Cont>
}