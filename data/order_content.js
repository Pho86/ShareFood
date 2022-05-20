import foody from '../data/food_content.json'
import historia from '../data/history_content.json'

var selectedfood = [];
var messages = [];
var reader = [];

// get the confirm date and convert the day to XX:XX and get the entire object of a certain food
export function ChangeFood(food) {
    food.confirm_date = `${(new Date(Date.now())).getHours()}` + `:${(new Date(Date.now())).getMinutes()}`;
    selectedfood.unshift(food) 
}

var selectedHist;

// get the time in MM/DD/YYYY format and data for the history content.
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
}


// get the data sent
export function GetFood() {
    return selectedfood;
}

export function GetMessages() {
    return message;
}


// reset the file reader data and send new data
export function SendData(data) {
    reader.length = 0;
    reader.unshift(data)
    return reader
}

export function GetData() {
    return reader
}


export function EmptyData() {
    reader.length = 0;
    return reader;
}

var fooddetails;

// get all the details filled out in detail sections
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
}
