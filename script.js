const todos = [];

// Display of the to do list
function showTodos(){
    console.clear();
    console.log('Your To-Do list:');

    if (todos.length === 0){
        console.log('No to-dos yet');
    } else {
        todos.forEach((todo, index) =>{
            console.log(`${index + 1}. ${todo}`)
        });
    }
}
// Adds stuff to the to do list
function addTodo(todo){
    if (todo.trim() !== ''){
        todos.push(todo);
        console.log(`Added: "${todo}"`);
    } else {
        console.log('Please enter a vaild To do item.');
    }
    showTodos();
}
// Delete from the to do list
function deleteTodo(index){
    if (index > 0 && index <= todos.length){
        const removedTodo = todos.splice(index - 1, 1);
        console.log(`Removed: "${removedTodo}"`);
    } else {
        console.log('Invalid Index. Please try again');
    }
    showTodos();
}
// Example commands for the user to interact
console.log("Commands:");
console.log("1. addTodo('Buy groceries') - To add a to-do item");
console.log("2. deleteTodo(1) - To remove a to-do by its number");
console.log("3. showTodos() - To display the current list");

showTodos();