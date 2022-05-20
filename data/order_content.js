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
    var month = `${(new Date(Date.now())).getMonth()}`.toLocaleString()
    month = Number(month)
    month = Number(month + 1)
    var day = `${(new Date(Date.now())).getDate()}`
    var year = `${(new Date(Date.now())).getFullYear()}`
    var date = month + '/' + day + '/' + year

    selectedHist = {food:food, date:date, foodimg:img, weight:weight}
    historia.unshift(selectedHist)
}
export function ChangeMessage(name, text){
    messages.push({
        name:name,
        msg:text
    })
    // console.log(messages)
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
    // console.log(reader)
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
    // console.log(foody)
}
