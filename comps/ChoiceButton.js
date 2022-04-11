import styled from 'styled-components';

const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: auto;
margin-right: auto;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;

`

export default function ChoiceButton({
    img = "/button_choices/x_button.svg"
}) {
    return <ChoiceCont>
        <Icon src={img}></Icon>
        <Icon src="/button_choices/undo_button.svg"></Icon>
        <Icon src="/button_choices/check_button.svg"></Icon>   
    </ChoiceCont>
}