import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos}) => {
  return (
    <div>
        {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />
        })}
      <h1>This is Todos component</h1>
    </div>
  )
}

export default Todos