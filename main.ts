#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    ques_1: string;
    ques_2: string;
    ques_3: string;
    ques_4: string;

} = await inquirer.prompt([
    {
        name: "ques_1",
        type: "list",
        message: (chalk.red.bold("Q.1: which one is NOT a valid javascript data Type?")),
        choices: ['undefined', 'number', 'float', 'string']
    },

    {
        name: "ques_2",
        type: "list",
        message: (chalk.red.bold("Q.2:DOM stands for?")),
        choices: ['Document object model', 'Dynamic object model', 'Data object model', ]
    },

    {
        name: "ques_3",
        type: "list",
        message: (chalk.red.bold("Q.3: which statment can be used for exiting a loop prematurely?")),
        choices: ['end', 'break', 'continue', '']
    },

    {
        name: "ques_4",
        type: "list",
        message: (chalk.red.bold("Q.4:how many types are loops?")),
        choices: ['three','four','five']
    }
]);

let score: number = 0;

switch(quiz.ques_1){
    case 'float':
    console.log(chalk.green.bold("1. Your answer is correct!"));
    ++score;

    break;
    default:
        console.log(chalk.magenta.bold("1. Wrong answer!"));
}

switch(quiz.ques_2){
    case 'Document object model':
    console.log(chalk.green.bold("2. Your answer is correct!"));
    ++score;

    break;
    default:
        console.log(chalk.magenta.bold("2. Wrong answer!"));
}

switch(quiz.ques_3){
    case 'break':
    console.log(chalk.green.bold("3. Your answer is correct!"));
    ++score;

    break;
    default:
        console.log(chalk.magenta.bold("3. Wrong answer!"));
} 

switch(quiz.ques_4){
    case 'three':
    console.log(chalk.green.bold("4. Your answer is correct!"));
    ++score;

    break;
    default:
        console.log(chalk.magenta.bold("4. Wrong answer!"));
}

console.log(chalk.yellow.bold.italic((`Your Final Score is: ${score}`)))

