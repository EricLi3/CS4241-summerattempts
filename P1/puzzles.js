// let size = 8;
// let board = "";

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         // Check if the sum of row and column indices is even
//         if ((i + j) % 2 === 0) {
//             // Add space for even positions
//             board += " ";
//         } else {
//             // Add "#" for odd positions
//             board += "#";
//         }
//     }
//     // Add newline character after each row
//     board += "\n";
// }

// console.log(board);


 let size = 8;
 let board = "";

 for(let i = 0; i < size; i++) {
     for(let j = 0; j < size; j++) {
        if((i + j) % 2 === 0) {
             board += " ";
         }
         else{
             board += "#";
         }
     }
     board += "\n";
 }
 console.log(board);


let max = 8;
let canvas = "";

for(let i = 1; i <= max; i++) {
    for(let j = max; j >= i; j--){ // use the row counter for determining the number of @ to print for columns
                                    //as the count for row goes up, we have less '@' characters upside down triangle
        canvas += "@";
    }
    // for(let j = 1; j <= i; j++){ // use the row counter for determining the number of @ to print for columns
    //     canvas += "@";
    // }

    canvas += "\n";
}
console.log(canvas);
