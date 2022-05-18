var selectedfood = [];
var messages = [];

/*
import GetFood
const ___ = GetFood();
___[0] for name
___[1] for food
*/

export function ChangeFood(food
    //, type
    ) {
    food.confirm_date = `
    ${(new Date(Date.now())).getHours} 
    `;

    // messages.push({
    //     name:food.name,
    //     msg:food.message
    // })
    
    //food.type = "getting"

    selectedfood.push(food) 
    console.log(selectedfood)
}

export function ChangeMessage(name, text){
    messages.push({
        name:name,
        msg:text
    })
}

export function GetFood() {
    return selectedfood;
}

export function GetMessages() {
    return message;
}
 {array.map((o, i) => <Send src={img} onClick={() => ChangeMessage(o, [food])}>{o}</Send>)} 
// 