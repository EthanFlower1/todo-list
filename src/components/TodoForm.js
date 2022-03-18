

export default function TodoForm (props) {
  return (
    <div>
      <form>
      <input value={ props.newTodo } onChange={ props.onChange } placeholder='Add a new To-do'></input>
      <button onClick={ props.onClick }> Add </button>
      </form>
    </div>
  )
}