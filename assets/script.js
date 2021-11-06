// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})


{/* <button id="minus-banana">-</button>
<button id="add-banana">+</button> */}

document.getElementById("minus-banana").addEventListener('click', function() {
    // THIS CODE RUNS WHEN WE CLICK THE MINUS BUTTON!!!
    console.log('banana minus was clicked')
    const pTagThatWeMade = document.createElement('p');
    // <p>
    // </p>
    pTagThatWeMade.textContent = 'This is the p tag that we made!';
    // pTagThatWeMade.
    // <p>
    //  This is the p tag that we made!
    // </p>
    document.getElementById("food-summary").append(pTagThatWeMade);
})

// next, we need to add an event listener for the "plus banana button"


// TODO: Hook up event listeners for the rest of the buttons