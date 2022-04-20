import styled from 'styled-components';
import { useRouter } from 'next/router';

const ButtonCont = styled.button`
text-align: center;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
`;

const BButtonCont = styled.button`
text-align: center;
background:#FAEAB3;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
`;


export default function NButton({
    text = "Next >"
}) {

    const r = useRouter();
    var { tut } = r.query;
    if (tut === undefined) {
        tut = 0;
    }
    if (Number(tut) === 4) {
        return <ButtonCont onClick={
            () => r.push({
                pathname:"/landing"
            })
        }>
            Done {'>'}
        </ButtonCont>
    }
    return <ButtonCont onClick={
        () => r.replace({
            query: {
                tut: tut === undefined ? tut : Math.min(4, Number(tut) + 1)
            }
        })
    }>
        {text}
    </ButtonCont>
}

export function BButton({
    text = "< Back"
}) {
    const r = useRouter();
    const { tut } = r.query;
    if (Number(tut) >= 1 ) {
        return <BButtonCont onClick={
            () => r.replace({
                query: {
                    tut: tut === undefined ? tut : Math.max(0, Number(tut) - 1)
                }
            })
        }>
            {text}
        </BButtonCont>
    }

    // return <BButtonCont onClick={
    //     () => r.replace({
    //         query: {
    //             tut: tut === undefined ? tut : Math.max(0, Number(tut) - 1)
    //         }
    //     })
    // }>
    //     {text}
    // </BButtonCont>
}

export function Browse({
    text="Start Browsing"
}) {
    const r = useRouter();
    return <ButtonCont onClick={
        () => r.push({
            pathname:"/home"
        })
    }>
        {text}
    </ButtonCont>
}

export function Cancel({
    text="Cancel"
}) {
    const r = useRouter();
    return <BButtonCont onClick={
        () => r.back()
    }>
        {text}
    </BButtonCont>
}




export function Confirm({
    text="Confirm"
}) {
    const r = useRouter();
    return <ButtonCont onClick={
        () => r.push({
            pathname:"/confirmed"
        })
    }>
        {text}
    </ButtonCont>
}


export function Message({
    name = "Jessica",
    text ="Message " + name
    
}) {
    const r = useRouter();
    return <ButtonCont onClick={
        () => r.push({
            pathname:"/messaging"
        })
    }>
        {text}
    </ButtonCont>
}