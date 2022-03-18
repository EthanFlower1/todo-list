

export default function Todo (props) {
  return (
    <div className='todo' >
      {props.text}
      <button onClick={ props.delete }> Delete </button>
    </div>
  )
}