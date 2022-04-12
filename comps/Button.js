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
    const { tut } = r.query;
    if (Number(tut) === 4) {
        return <ButtonCont onClick={
            () => r.replace({
                query: {
                    home: 0
                }
            })
        }>
            Done {'>'}
        </ButtonCont>
    }
    return <ButtonCont onClick={
        () => r.push({
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

