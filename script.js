// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. 
// There are a few different ways to do this - experiment with 
// what you think is the most efficient. Once you have solved the problem, 
// ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.

for (let i = 1; i<= 100; i++) {
    // not div by 3 or 5
    if  (i % 3 ==0 && i % 5 ==0 )
        console.log ('fizz buzz')
    // of a number is divisible by 3
    if (i % 3 == 0) {
        console.log ('fizz')
        // div by 5
    } else if (i % 5 == 0) {
        console.log ('buzz')
        // div by 3 and 5
    } else {
        console.log(i)
    }
    
}



// Part 2: Prime Time
// Context: A prime number is any whole number greater 
// than 1 that cannot be exactly divided by any whole number other
//  than itself and 1. For example, the number 5 is prime because it 
//  cannot be divided by 4, 3, or 2; it can only be divided by itself (5)
//   and 1. Similarly, the numbers 7 and 11 are prime. As numbers become
//    larger, determining whether or not they are prime is increasingly 
//    difficult, but loops make this process relatively easy!

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.


// Create a loop that searches for the next prime number, starting at 
// n and incrementing from there.

// As soon as you find the prime number, log that number and exit the loop.




//     while (i % 1 == 0);
    
//     if (i % 2 == 0) {
//         break;
//     }
//     console.log (i)
//  }


// Part 3: Feeling Loopy
// 
// what do we know?
        // cells are separated by commas
        // rows are separted by \n escape
        // 4 cells per row
        // no escape char except for \4
        // console.log(cell1, cell2, cell3, cell4);
let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let cell = ''

let row = ''



for (let char of str){ 
   if(char == ',') {
    row = row + cell + ' '
    cell = ''
   } else if ( char == '\n'){
    row+=cell
   console.log (row) 
   row = ''
   cell =''

   } else { 
    cell += char
   }
}