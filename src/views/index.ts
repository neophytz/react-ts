import { lazy } from 'react'

export const About = lazy(() => import('./about.view'))
export const TodosView = lazy(() => import('./todos.view'))
export * from './home.view'
export * from './blog.view'
export * from './singup.view'
export * from './login.view'
export * from './contact.view'
