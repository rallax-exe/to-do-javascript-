//Referecias en el HTML 

import { Todo, TodoList } from '../classes';
import { todoList } from '../index';

const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
//const divContador   = document.querySelector('.footer');
const divContador  = document.querySelector('.todo-count').innerHTML;
//const deleteCont    = document.getElementsByClassName('todo-count');


let contador = 0;
//const spanContador  = document.getElementsByClassName('todo-count');
//const spanContador  = document.querySelector('todo-count');

export const crearTodoHtml = ( todo ) => {



    const htmlTodo = `
    <li class="${ (todo.completado)? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado)? 'checked' : '' }>
            <label>${ todo.tarea  }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    `;

    const div = document.createElement('div');

    div.innerHTML =  htmlTodo;


    divTodoList.append( div.firstElementChild );

    

    return div.firstElementChild;

}


export const crearContadorHtml = ( ) => {

    
        contador = todoList.contarPendientes();
        document.querySelector('.todo-count').innerHTML = `<strong>${ contador }</strong> pendiente(s)`;


}


txtInput.addEventListener('keyup', ( event ) =>{

    if( event.keyCode === 13 && txtInput.value.length > 0) {

        //console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
        contador = todoList.contarPendientes();
        crearContadorHtml();
        
        
    }

});


divTodoList.addEventListener('click', (event) =>{

    
   const nombreElemento = event.target.localName; //input, label, button
   const todoElemento   = event.target.parentElement.parentElement;
   const todoId         = todoElemento.getAttribute('data-id');

   
   //console.log({todoElemento});

   
   if( nombreElemento.includes('input')) { //click en el check

        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
        

   } else if (nombreElemento.includes('button')) {

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );
        contador = todoList.contarPendientes();
        crearContadorHtml();
        

   }


});

btnBorrar.addEventListener('click', ()=> {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1; i>=0; i--){

        const elemento = divTodoList.children[i];

        //console.log( elemento );

        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
            contador = todoList.contarPendientes();
            crearContadorHtml();
            
        }

    }

    
});


ulFiltros.addEventListener( 'click', ( event ) => {

    const filtro = event.target.text;
    if( !filtro ) { return; }

    anchorFiltros.forEach( elem => elem.classList.remove( 'selected' ) );
    event.target.classList.add( 'selected' );

    for( const elemento of divTodoList.children ) {

        elemento.classList.remove( 'hidden' );
        const completado = elemento.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add( 'hidden' );
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add( 'hidden' );
                }
            break;


        }

    }

} );





