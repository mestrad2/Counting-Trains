let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

let x = 0;
let typeS1Count = 0;
let lorrieCount = 0;
let averageAge = 0;

/*while(x < newInventoryCarModels.length) {
    console.log(typeof newInventoryCarModels[x]);
    if(newInventoryCarModels[x] === 'S1') {
        typeS1Count++;
    }
    x++;
} */

for(let i = 0; i < newInventoryCarModels.length; i++) {
    if(newInventoryCarModels[i] === 'S1') {
        typeS1Count++;
    } 
    
    if(newInventoryCarTypes[i] === 'Lorrie') {
        lorrieCount++;
    }

    averageAge = averageAge + (new Date().getFullYear() - newInventoryYearBuilt[i]);
}
console.log("Number of S1 Cars is: " + typeS1Count);
console.log("Number of Lorrie Cars is: " + lorrieCount);
console.log("Average Age is: " + (averageAge / newInventoryYearBuilt.length))