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



export default function BackButton({
    img = "/button_choices/back_button.svg"
}) {

    const r = useRouter();
    var { tut } = r.query;
    return <ChoiceCont onClick={
        ()=>r.push({
            pathname: "/",
            query: {tut: 5}
        },
        
        )
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>
}