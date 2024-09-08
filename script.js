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
addTodo('Go to the gym');
addTodo('Go to the store');
deleteTodo(1);
showTodos();