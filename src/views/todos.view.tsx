import React, { useEffect, useState } from 'react'
import { ITodo, IUser } from '../types/app.types'
import { RenderIf } from '../util/RenderIf'
import axios from 'axios'
import { Todo } from '../components/todo';
import { Navigate } from 'react-router-dom';

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const USER_URL = "https://jsonplaceholder.typicode.com/users"

export const TodosView = () => {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const getTodos = async () => {
    const _res = await axios.get<ITodo[]>(TODOS_URL); // <ITodo[]> is generic method of typecasting in ts.
    const todos = _res.data as ITodo[]; // this is explicit typecasting.
    setTodos(todos.slice(0,5))
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  const getSpecificUser = async (userId: number) => {
    const _res = await axios.get<IUser>(`${USER_URL}/${userId}`) // generic typecasting
    console.log(_res.data)
    setCurrentUser(_res.data)
  }

  return (
    <div className='container'>
      <h4 className='text-muted my-2'>
        Todiez
      </h4>


      <div className='row'>
        <div className={`${!!currentUser ? 'col-md-8' : 'col-md-12'}`}>
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
                    <Todo userClicked={getSpecificUser} key={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed} />
                  )
                })
              }
            </>
          } />
        </div>

        <div className={`col-md-4 px-3 ${!currentUser ? 'd-none' : 'd-block'}`}>
          <div className='card p-3 border-0 rounded-lg bg-light h-100'>
            <RenderIf condition={!currentUser} component={
              <div className='bg-white p-4 rounded-lg text-center'>
                <h4>No User selected</h4>
                <p className='text-muted'>Click on the user icon in todo list to fetch user information.</p>
              </div>
            } />

            <RenderIf condition={!!currentUser} component={
              <div>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4>{currentUser?.name}</h4>
                  <button onClick={() => setCurrentUser(null)} className='btn-outline btn bg-white rounded text-muted'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path>
                    </svg>
                  </button>
                </div>
                <p className='mb-2'>
                  <strong>Phone</strong> - {currentUser?.phone}
                </p>
                {/* baaki ka b design ho hi jana h... */}
              </div>
            } />
          </div>
        </div>

      </div>
      
    </div>
  )
}
