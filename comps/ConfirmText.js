import styled from 'styled-components';
import { useRouter } from 'next/router'

const IList = styled.div`
list-style: none;
`
const TList = styled.div`
list-style: none;
line-height: 3em;
font-weight: bold;
`
const TextCont = styled.div`
display: flex;
line-height: 3em;
gap: 2em;
margin-left: auto;
margin-right: auto;
`

export default function ConfirmText() {
    const r = useRouter();
    const { route } = r.query

    return (
        <TextCont>
            <TList>
                <li>Name of Food:</li>
                <li>Weight:</li>
                <li>Date of Purchase:</li>
                <li>Best Before Date:</li>
                <li>Meeting Location:</li>
                <li>Additional Details:</li>
            </TList>
            <IList>
                <li>Peanut Butter</li>
                <li>0.5 lbs</li>
                <li>Mar 26, 2022</li>
                <li>May 22, 2022</li>
                <li>1251 Main St.</li>
                <li>"Brand new"</li>
            </IList>
        </TextCont>
    )
}