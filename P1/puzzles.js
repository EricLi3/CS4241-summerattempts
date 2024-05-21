// INIT

let width = 8;  // Define the width of the grid
let height = 8; // Define the height of the grid
let board = "";

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        // Determine the character based on the sum of row and column indices
        if ((i + j) % 2 === 0) {
            board += " "; // Even positions get a space
        } else {
            board += "#"; // Odd positions get a "#"
        }
    }
    board += "\n"; // Add a newline character after each row
}

console.log(board);


//dddd
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
