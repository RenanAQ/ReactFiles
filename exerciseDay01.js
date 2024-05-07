//Arrays - Level 01
const arr = Array()
const countries = ['Brazil', 'Germany', 'China', 'India', 'Canada']
console.log('Length: '+countries.length)
console.log('First: '+countries[0])
console.log('Middle: '+countries[Math.floor(countries.length/2)])
console.log('Last: '+countries[countries.length-1])
const mixedArray = [1, 'Renan', 3.14159265, 'Lola', 'G', 'E']
console.log('Length: '+mixedArray.length)

//Arrays - Level 02 - Question 03
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log('Before: '+shoppingCart)

//Adding meat
shoppingCart.unshift('Meat')
//Adding Sugar
shoppingCart.unshift('Sugar')
//Remove Honey
shoppingCart.pop('Honey') //remove
//modify Tea to 'Green Tea'
shoppingCart[2]='Green Tea'

//shoppingCart.reverse() //reverse the order
//shoppingCart.sort() //sort in ascending order [A-Z]

console.log('After: '+shoppingCart)

//Condition - Level 01
/* Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive. */
let age = prompt('Enter your age: ')
if (age >= 18){
    console.log('You are old enough to drive.')
}
else {
    console.log('You are left with '+(18-age)+' years to drive..')
}
    