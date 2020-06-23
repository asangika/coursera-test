var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:", numberArray );

function above5Filter(value){
    return value > 5;
}

var filterNumberArray = numberArray.filter (above5Filter);
 

console.log("Filtered Number Array:", filterNumberArray );

var ShoppingList = ["Milk", "Cookies", "Donuts", "Chocolate", "Peanut Butter", "Pepto Bismol", "Mountain Dew", "Pepto Bismol",
                            "Pepto Bismol(Chocolate Flavour)", "Pepto Bismol(Vanilla Flavour)"];

console.log("Shopping List:", ShoppingList);

var SearchValue = "Bismol";

function ContainerFilter(value){
    return value.indexOf(SearchValue) !== -1;
};

var SearchedShoppingList = ShoppingList.filter(ContainerFilter);

console.log("Searched Shopping List", SearchedShoppingList);