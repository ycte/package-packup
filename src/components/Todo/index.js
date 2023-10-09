import './index.scss'
const Todo = ({children}) => {
  return (
    <div>
      <span className='todo-main'>{'// '}</span>
      <span className="todo-sub">TODO: </span>
      <span className="todo-main">{children}</span>
    </div>
  )
}

export {Todo}