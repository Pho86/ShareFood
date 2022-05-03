import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';

const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .8s;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;

`
//undo button
export default function ChoiceButtonU({
    img = "/button_choices/undo_button.svg"
}) {
    const r = useRouter();
    const { image } = r.query;


    if (image === undefined || image === 0) {
        return <ChoiceCont>
            <Icon src={img}></Icon>
        </ChoiceCont>
    }

    else {return <ChoiceCont onClick={
        () => r.push({
            query: {
                image: image === undefined ? image : Math.max(0, Number(image) - 1)
            }
        })
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
} }