var selectedfood = [];

/*
import GetFood
const ___ = GetFood();
___[0] for name
___[1] for food
*/

export function ChangeFood(name, food) {
    selectedfood.push(name, food) 
    console.log(selectedfood)
}

export function GetFood() {
    return selectedfood;
}
