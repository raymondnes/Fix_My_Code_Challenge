#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

if (process.argv.length <= 2) {
    console.error("Missing argument");
    console.error("Usage: ./1-print_square.js <size>");
    console.error("Example: ./1-print_square.js 8");
    process.exit(1);
}

const size = parseInt(process.argv[2], 10);

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}


/*
  There are a couple of issues with your code:

  The size argument is being parsed as a hexadecimal number instead of a decimal number. You should use parseInt(process.argv[2], 10) instead of parseInt(process.argv[2], 16).

  There is no need to use process.stderr.write() to print the error messages. You can use console.error() instead.
*/
