import styled from 'styled-components';
import { useRouter } from 'next/router';
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';

const IList = styled.div`
list-style: none;
display: block;
margin-left: auto;
margin-right: auto;
padding-bottom: 10em;
`
const TList = styled.div`
list-style: none;
line-height: 3em;
font-weight: bold;
display: block;
margin-left: auto;
margin-right: auto;
padding-bottom: 14em;
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
                            &nbsp;{nameoffood[4].text}&nbsp;
                        </Highlight> from
                        <Highlight>
                            &nbsp;{names[4].text}
                        </Highlight>
                    </SelectedItem>
                </ConfirmHeader>
                <TextCont>
                    <TList>
                        <div class="list">{categories1[0].title}</div>
                        <div class="list two">{categories1[1].title}</div>
                        <div class="list three">{categories1[2].title}</div>
                        <div class="list four">{categories1[3].title}</div>
                        <div class="list five">{categories1[4].title}</div>
                        <div class="list six">{categories1[5].title}:</div>
                    </TList>
                    <IList>
                        <div class="list">{nameoffood[4].text}</div>
                        <div class="list two">{weight[4].text}</div>
                        <div class="list three">{dop[4].text}</div>
                        <div class="list four">{bbd[4].text}</div>
                        <div class="list five">{location[4].text}</div>
                        <div class="list six">{details[4].text}</div>
                    </IList>
                </TextCont>
            </Text>
        )
    }
}
