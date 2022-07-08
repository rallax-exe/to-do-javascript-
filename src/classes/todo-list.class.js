
import { Todo }  from './todo.class';

export class TodoList{

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStorage();

    }


    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for( const todo of this.todos ){


            console.log(id, todo.id)

            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.contarPendientes();
                break;

            }

        }

    }


    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
        this.contarPendientes();

    }

    guardarLocalStorage(){


        localStorage.setItem('todo', JSON.stringify(this.todos) );


    }



    cargarLocalStorage(){
        
        this.todos = (localStorage.getItem( 'todo' ) ) 
                   ? JSON.parse( localStorage.getItem( 'todo' ) ) 
                   : [];

        //Esta linea hace lo mismo que el de arriba
        this.todos = this.todos.map( Todo.fromJson ); 
        //this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); 



    }


    contarPendientes(){
   
        let contador = 0; 
        for (const todo of this.todos) {
            contador ++ ;
        }

        //console.log({contador});

        return contador;
   

    }


}




