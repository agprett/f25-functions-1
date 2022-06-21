let kenobiHealth = 100

// let stringHealth = String(kenobiHealth)
// let boolHealth = Boolean(kenobiHealth)

// console.log(boolHealth)

let theWinnerIs = 'Kenobi is the winner'

let newWinner = theWinnerIs.replace('kenobi', 'Anakin')

// newWinner = newWinner.toUpperCase()
let newWinnerSplit = newWinner.split('k')
let newWinnerKebab = newWinnerSplit.join('~')

// console.log(newWinnerSplit)

function isKenobiAlive() {
  if(kenobiHealth > 0){
    console.log('Obi-wan is alive')
  } else {
    console.log('RIP Kenobi')
  }
}

// isKenobiAlive()

function supriseAttack(attack) {
  kenobiHealth -= attack
  isKenobiAlive()
}

let kenobiDefense = 15

function readyAttack(attack) {
  kenobiHealth -= (attack - kenobiDefense)
  isKenobiAlive()
}

// supriseAttack(20)

// readyAttack(30)

//FUNCTION DECLARATION
// function greeting(person1, person2) {
//    return `${person1} greets ${person2}`
// }

//FUNCTION EXPRESSION
// const greeting = function(person1, person2){
//   return `${person1} greets ${person2}`
// }

//ARROW FUNCTION
//IMPLICIT RETURN  
// const greeting = (person1, person2) => `${person1} greets ${person2}`

//EXPLICIT RETURN
const greeting = (person1, person2) => {
  return `${person1} greets ${person2}`
}

console.log(greeting('Alec', 'Jeddy'))