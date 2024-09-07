# To-Do List Program

## Overview

This JavaScript program is a simple command-line to-do list application. It allows you to add, delete, and display to-do items.

## Code Overview

### `script.js`

- **`const todos = [];`**
  - Initializes an empty array to store to-do items.

- **`function showTodos()`**
  - Clears the console and displays the current list of to-do items.
  - Shows a message if there are no items in the list.

- **`function addTodo(todo)`**
  - Adds a new to-do item to the list if it's not empty.
  - Displays a message confirming the addition and then shows the updated list.

- **`function deleteTodo(index)`**
  - Deletes a to-do item from the list based on the provided index.
  - Displays a message confirming the removal and then shows the updated list.

- **`console.log("Commands:")`**
  - Lists available commands for the user to interact with the program.
  
- **`showTodos()`**
  - Calls the `showTodos` function to display the initial state of the to-do list.

## Running the Program

To run this program, follow these steps:

1. **Ensure Node.js is Installed**

   Check if Node.js is installed by running:

   ```bash
   node -v

2. **Open Visual Studio Code (VS Code)**

3. **Open the Integrated Terminal**

4. **Navigate to the Directory**
    cd path/to/your/project

5. **Run the Script**
    node script.js

6. **Modify the Script for Testing**
    addTodo('Example item');
    showTodos();
    deleteTodo(1);
    showTodos();
