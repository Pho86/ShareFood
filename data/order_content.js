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
    console.log(messages)
    
    //food.type = "getting"

    selectedfood.push({
        food
    }) 
    console.log(selectedfood);
    return selectedfood
}

export function ChangeMessage(name, text){
    messages.push({
        name:name,
        msg:text
    })
}

export function GetMessages() {
    return message;
}


export function GetFood() {
    return selectedfood;
}



export function SendData(data) {
    console.log(data)
    return data
}

export function GetData() {
    return data
}

