import React, { useEffect, useState } from 'react'
import { ITodo, Todo } from '../components/todo'
import { RenderIf } from '../util/RenderIf'
import axios from 'axios'

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

export const TodosView = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const getTodos = async () => {
    const _res = await axios.get<ITodo[]>(TODOS_URL); // <ITodo[]> is generic method of typecasting in ts.
    const todos = _res.data as ITodo[]; // this is explicit typecasting.
    setTodos(todos.slice(0,5))
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  return (
    <div className='container'>
      <h4 className='text-muted my-2'>
        Todiez
      </h4>

      <RenderIf condition={todos.length === 0} component={
        <div className='bg-light p-5 text-center rounded-lg mb-2'>
          <h5 className='text-dark'>Hurray!</h5>
          <p className='text-secondary'>
            You have already completed all your items.
          </p>
        </div>
      } />

      <RenderIf condition={todos.length > 0} component={
        <>
          {/* {todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed} />)} */}
          {
            todos.map(todo => {
              return (
                // <Todo {...todo} /> // this line is same as that of line below. 
                // <Todo title={todo.title} completed={todo.completed} id={todo.id} userId={todo.userId} />
                <Todo key={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed} />
              )
            })
          }
        </>
      } />
      
    </div>
  )
}
