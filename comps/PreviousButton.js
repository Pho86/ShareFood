import styled from "styled-components";
import { useRouter } from "next/router";

const ChoiceCont = styled.div`
display:flex;
width: 45px;
left: 100px;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;
`


//back to the landing page
export default function BackButton({
    img = "/button_choices/back_button.svg",
}) {

    const r = useRouter();
    const { image } = r.query;
    return <ChoiceCont onClick={
        () => r.push({
            pathname: "/landing"
        })
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
}

//back to previous page
export function BackAPage({
    img = "/button_choices/back_button.svg",
}) {
    const r = useRouter()

    return <ChoiceCont onClick={
        () => r.back()}>
        <Icon src={img}></Icon>
    </ChoiceCont>
}