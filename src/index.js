import './styles.css';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender Js!');
// todoList.nuevoTodo(tarea);

// tarea.completado = true;
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mikey','ABC');
// sessionStorage.setItem('mikey','ABC');

// setTimeout( ()=>{

//     localStorage.removeItem('mikey');
// },1500);

todoList.todos.forEach(crearTodoHtml);