/*import greet from './greet.js'

// call the function & print the result on the screen
console.log(greet('Xola'))

import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
*/
import chalk from "chalk";
import figlet from "figlet";

import greet from './greet.js'

const msg = chalk.red(figlet.textSync(greet('Xola')))
console.log(msg)