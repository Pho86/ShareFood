import styled from 'styled-components';
import { useRouter } from 'next/router'
import { foodImg } from '../data/img_content';


const ChoiceCont = styled.div`
display:flex;
justify-content:center;
width: 355px;
margin-left: 0;
margin-right: auto;
`;

const Icon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
padding-top: 17px;
opacity: 0;
animation: revealText 1s forwards;
animation-delay: .3s;

`
// x button
export default function ChoiceButtonX({
    img = "/button_choices/x_button.svg"
}) {
    const r = useRouter();
    var { image } = r.query;
    if (image === undefined) {
        image = 0;
    }

    return <ChoiceCont onClick={
        () => {
            r.push({
                query: {
                    image: Number(image) + 1 > foodImg.length - 1 ? 0 : Number(image) + 1
                }
            })
        }
    }>
        <Icon src={img}></Icon>
    </ChoiceCont>








}

