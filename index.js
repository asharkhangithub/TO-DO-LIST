#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition == true) {
    const addtask = await inquirer.prompt([
        { message: "What do you want to add in your todos? ", type: "input", name: "todo" },
        { message: " do you want to add more? ", type: "confirm", name: "addmore", default: "false" },
    ]);
    todo.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todo);
}
