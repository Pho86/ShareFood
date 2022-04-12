import styled from 'styled-components';
import {useRouter} from 'next/router'


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: 0;
margin-right: auto;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;

`
// x button 
export default function ChoiceButtonX({
    img = "/button_choices/x_button.svg"
}) {
    const r = useRouter();
    const { image } = r.query;
    return <ChoiceCont onClick={
        ()=>r.push({
            query:{
                image: image === undefined ? image : Number(image) + 1
            }
        })
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
}

