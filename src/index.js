
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml, crearContadorHtml } from './js/componentes';



export const todoList = new TodoList();


todoList.todos.forEach( todo =>  crearTodoHtml( todo ));
crearContadorHtml();



//crearContadorHtml();


/*

todoList.todos.forEach( (todo) => {
    
    crearTodoHtml( todo ); 

});
/*







/*
const tarea = new Todo ('Aprender Javascript');
todoList.nuevoTodo( tarea );


console.log(todoList);
crearTodoHtml( tarea );

*/




//localStorage.setItem('mi-key', 'ABD123');
//sessionStorage.setItem('mi-key', 'ABD123');

/*
setTimeout( ()=>{

    localStorage.removeItem('mi-key');

}, 1500 );

*/