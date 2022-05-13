import { CardSwiper } from "react-card-rotate-swiper";
import styled from 'styled-components';
import { useRouter } from 'next/router';
import foody from '../data/food_content.json';
import { DownUp } from '../data/animation';

const ImgCard = styled.div`
animation: ${DownUp} .4s;
display: block;
margin-left: auto;
margin-right: auto;
`
export function SwipeCard() {

    const handleSwipe = (d) => {
        r.replace({
            query: {
                food: Number(food) + 1 > foody.length - 1 ? 0 : Number(food) + 1
            }
        })
    };
    const r = useRouter();

    let { food } = r.query
    if (food === undefined) {
        food = 0;
    }

    return (
        <div class="tinder">
            <CardSwiper
                onSwipe={handleSwipe}
                class={"swiper"}
                contents={
                    //contents here
                    <ImgCard>
                        <img src={foody[food].foodimg} />
                    </ImgCard>
                }>
            </CardSwiper>
        </div>
    );
}