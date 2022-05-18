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
    ${(new Date(Date.now())).getHours()} 
    `;

    // messages.push({
    //     name:food.name,
    //     msg:food.message
    // })
    
    //food.type = "getting"
    ChangeMessage(food.name, food.)
    selectedfood.push(food) 
    console.log(selectedfood)
}

export function ChangeMessage(name, text){
    messages.push({
        name:name,
        msg:text
    })
    console.log(messages)
}

export function GetFood() {
    return selectedfood;
}

export function GetMessages() {
    return message;
}
export function SendData(data) {
    console.log(data)
    return data
}

export function GetData() {
    return data
}

//  {array.map((o, i) => <Send src={img} onClick={() => ChangeMessage(o, [food])}>{o.name}</Send>)} 
// 