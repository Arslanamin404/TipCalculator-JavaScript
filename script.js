/*APP: Tip Calculator.
We will use 3 functions to create this app.
calculateBill()
increasePeople()
decreasePeople()
*/

//It can also be done using calculate and clear button

const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotal = document.getElementById("perPersonTotal")

//get the number of people
let numberOfPeople = numberOfPeopleDiv.innerHTML
numberOfPeople = Number(numberOfPeople)

//Calculate total bill per person
const calculateBill = () => {
    
//get bill input from user
const bill = Number(billInput.value)

//get tip from user and convert it to %age.
const tipPercent = Number(tipInput.value)/100

//total tip Amount
const totalTip = bill * tipPercent

//Calculate total
const total = bill + totalTip

//Calculate the per person total
const perPersonBill = total/numberOfPeople

//Update the perPersonTotal on DOM & show it to user
perPersonTotal.innerHTML = "₹"+ Math.round(perPersonBill)
}


// ** Splits the bill between more people **
const increasePeople = () => {

// increment the amount of people
numberOfPeople+=1 
   
// update the DOM with the new number of people
numberOfPeopleDiv.innerHTML = numberOfPeople

// calculate the bill based on the new number of people
calculateBill()
  
  }

  // ** Splits the bill between fewer people **
const decreasePeople = () => {
// guard clause
// (you can't decrease the number of people to 0 or negative!)
if(numberOfPeople <= 1){
    return 0 
}
    
// decrement the amount of people
numberOfPeople-=1

// update the DOM with the new number of people
numberOfPeopleDiv.innerHTML = numberOfPeople  
  
// calculate the bill based on the new number of people
calculateBill()
}


//Now lets make clear button functional
let clearBtn = document.getElementById("clearBtn")
let inputs= document.querySelectorAll("input")
 

let clear = function() {
  inputs.forEach(input => input.value = "")
  numberOfPeopleDiv.innerHTML = 1
}

clearBtn.addEventListener("click",clear)