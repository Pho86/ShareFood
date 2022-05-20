var selectedfood = [];
var messages = [];
var reader = [];

import foody from '../data/food_content.json'
import historia from '../data/history_content.json'
/*
import GetFood
const ___ = GetFood();
___[0] for name
___[1] for food
*/

export function ChangeFood(food
    //, type
    ) {
    food.confirm_date = `${(new Date(Date.now())).getHours()}` + `:${(new Date(Date.now())).getMinutes()}`;

    selectedfood.unshift(food) 

}

var selectedHist;
export function ChangeHistory(food, weight, img) {
    selectedHist = {food:food, date:"Today.", foodimg:img, weight:weight}
    historia.unshift(selectedHist)
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
    reader.length = 0;
    reader.unshift(data)
    return reader
}

export function GetData() {
    console.log(reader)
    return reader
}
export function EmptyData() {
    reader.length = 0;
    return reader;
}

var fooddetails;
export function GetAllDetails() {
    var name = document.querySelector('#name').value
    var weight = document.querySelector("#weight").value
    var datepur = document.querySelector('#datepur').value
    var datebbd = document.querySelector('#datebbd').value
    var pickup = document.querySelector('#pickup').value
    var description = document.querySelector('#description').value
    var foodimg = document.querySelector("#foodimg").src

    fooddetails = {food:name, weight:weight, date_purchase:datepur, date_bbd:datebbd, meeting_location:pickup, location:pickup, description:description, foodimg, name:"YOU", details:description}
    
    foody.push(fooddetails)
    console.log(foody)
}
