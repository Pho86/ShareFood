var selectedfood = [];

export function ChangeFood(n, food, name) {
   selectedfood[food] = n;
    console.log(selectedfood)
}

export function GetFood() {
    return selectedfood;
}
