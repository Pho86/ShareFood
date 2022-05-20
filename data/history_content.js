var historyfood = [];
var historybox = [];

export function ChangeHistory(history){
    historyfood.unshift(history)
    // console.log(historyfood)
} 

export function GetFood() {
    return historyfood;
}