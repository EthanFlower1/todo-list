import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'


function App() {

  const [ newTodo, setNewTodo ] = useState(''); // used for creating a new todo
  const [ todos, setTodos ] = useState([]); //should contain all todos
  const [ textData, setTextData ] = useState(''); // used for editing a todo

// get a reference to my collection:
    const todosCollectionRef = collection(db, 'todos')
// CREATE a new todo to my collection:
    const createTodo = async () => {
      await addDoc( todosCollectionRef, { text: newTodo } )
    }
// READ /grab data from DB, runs after dom is loaded, or a change in collection
    useEffect( (e) => {
      const getTodos = async () => {
        const response = await getDocs( todosCollectionRef );
        const data = response.docs.map( (doc) => ({...doc.data(), id: doc.id }));
        setTodos(data);
      }
      getTodos();
    }, [todosCollectionRef])
// UPDATE data in my database :
    const updateTodo = async ( id, todo ) => {
      const todoDoc = doc( db, 'todos', id );
      const newText = textData;
      await updateDoc( todoDoc, newText);
    }
// DELETE data from my database :
    const deleteTodo = async ( id ) => {
      const todoDoc = doc(db, 'todos', id);
      await deleteDoc(todoDoc);
    }
// custom functions :

    function clickHandler (e){
       e.preventDefault();
        setNewTodo('');
        createTodo();
       }

return (
    <div className="App">
      <main className="todoList">
        <TodoForm newTodo={newTodo} onClick={ clickHandler  } onChange={ (e) => setNewTodo(e.target.value) } />
         { todos.map( todo => <Todo delete={(e) =>  deleteTodo(todo.id)} key={todo.id} text={todo.text} />) }
      </main>
    </div>
)
}

export default App;
