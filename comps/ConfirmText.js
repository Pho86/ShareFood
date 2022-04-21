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
font-weight: 400;
font-size: 24px;
line-height: 32 px;
text-align: center;
position: block;
padding-top: 50px;
padding-bottom: 50px;
left :8%;
right: 8%;
// top: 17%;
// bottom: 74%;
`
const Highlight = styled.div`
display: inline-block;
font-weight: 500;
color: #F08A4B;
`
const ConfirmHeader = styled.div`
`

const H2 = styled.div`
font-weight: 400;
font-size 20px;
text-align: left;
margin-right: auto;
margin-left: auto;
padding-bottom: 20px
`
const Saved = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 20 px;
text-align: center;
position: block;
left :8%;
right: 8%;
`
const Text = styled.div`
`

export default function ConfirmText() {
    const r = useRouter();
    const { confirm } = r.query
    if (confirm === undefined) {

        return (
            <Text>
                <ConfirmHeader>
                    <SelectedItem>
                        You have selected
                        <Highlight>
                            &nbsp;Soy Sauce&nbsp;
                        </Highlight> from
                        <Highlight>
                            &nbsp;Jessica
                        </Highlight>
                    </SelectedItem>
                </ConfirmHeader>
                <TextCont>
                    <TList>
                        <li class="list">Name of Food:</li>
                        <li class="list two">Weight:</li>
                        <li class="list three">Date of Purchase:</li>
                        <li class="list four">Best Before Date:</li>
                        <li class="list five">Meeting Location:</li>
                        <li class="list six">Additional Details:</li>
                    </TList>
                    <IList>
                        <li class="list">Soy Sauce</li>
                        <li class="list two">0.6 lbs</li>
                        <li class="list three">Mar 26, 2022</li>
                        <li class="list four">May 22, 2022</li>
                        <li class="list five">1251 Main St.</li>
                        <li class="list six">"Opened."</li>
                    </IList>
                </TextCont>
            </Text>
        )
    }
}
