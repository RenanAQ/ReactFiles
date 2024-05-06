//Level 1

let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log('Length: '+challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(11,15)) //Java
console.log(challenge.substring(3,30)) //Days of JavaScript
console.log(challenge.includes('Script')) //True
console.log(challenge.split()) //changes to an array
console.log(challenge.split(' ')) //split to an Array(5) [ "Var:", "30", "Days", "of", "JavaScript" ]
var companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(companies.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
/* I just did Level 1 until exercise 13 */

//Level 2
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
console.log(typeof('10') == 10)

const num = Math.floor(Math.random() * 101)
console.log('Random number from 0 to 100: '+ num)

/* Access the 'JavaScript' string characters using a random number. */
const string = 'JavaScript'
const randomKey = Math.floor(Math.random() * string.length)
console.log(string[randomKey])