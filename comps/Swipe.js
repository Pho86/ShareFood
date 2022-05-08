import { CardSwiper } from "react-card-rotate-swiper";
import styled from 'styled-components';
import { useRouter } from 'next/router';
import food from '../data/food_content.json';
import { DownUp } from '../data/animation';

const ImgCard = styled.div`
animation: ${DownUp} .4s;
display: block;
margin-left: auto;
margin-right: auto;
`
//https://reactjsexample.com/a-react-component-to-swipe-element-using-rotate/
export function SwipeCard() {

    const handleSwipe = (d) => {
        r.replace({
            query: {
                image: Number(image) + 1 > food.length - 1 ? 0 : Number(image) + 1
            }
        })
    };
    const r = useRouter();

    let { image } = r.query
    if (image === undefined) {
        image = 0;
    }

    return (
        <div class="tinder">
            <CardSwiper
                onSwipe={handleSwipe}
                class={"swiper"}
                contents={
                    //contents here
                    <ImgCard>
                        <img src={food[image].foodimg} />
                    </ImgCard>
                }>
            </CardSwiper>
        </div>
    );
}