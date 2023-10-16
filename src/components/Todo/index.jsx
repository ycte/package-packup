import './index.scss'
// eslint-disable-next-line react/prop-types
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