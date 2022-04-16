import styled from 'styled-components';
import { useRouter } from 'next/router'

const IList = styled.div`
list-style: none;
display: block;
margin-left: auto;
margin-right: auto;
`
const TList = styled.div`
list-style: none;
line-height: 3em;
font-weight: bold;
display: block;
margin-left: auto;
margin-right: auto;
`
const TextCont = styled.div`
display: flex;
line-height: 3em;
gap: 4em;

`
const SelectedItem = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 32 px;
text-align: center;
position: block;
left :8%;
right: 8%;
// top: 17%;
// bottom: 74%;
`
const Highlight = styled.div`
display: inline-block;
color: #F08A4B;
`
const ConfirmHeader = styled.div`
`

const Text = styled.div`
`

export default function ConfirmText() {
    const r = useRouter();
    const { route } = r.query

    return (
        <Text>
            <ConfirmHeader>
                <SelectedItem>
                    You have selected
                    <Highlight>
                        &nbsp; Peanut Butter &nbsp;
                    </Highlight> from
                    <Highlight>
                        &nbsp;Jessica
                    </Highlight>
                </SelectedItem>
            </ConfirmHeader>
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
        </Text>
    )
}