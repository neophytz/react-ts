import React from 'react'

import { Route, useRoutes, Routes } from "react-router-dom";
import { About, Blog, Contact, Home, Login, Signup, TodosView } from './views'

const _Routes = () => {
    const _routes = useRoutes([
        { path: '/about', element: <About /> },
        { path: '/blog', element: <Blog /> },
        { path: '/contact', element: <Contact /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/todo', element: <TodosView /> },
    ])
    
    return _routes;
};

  
export const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home theme='dark'/>} />
            </Routes>
            <_Routes />
        </div>
    )
}


/* 
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="blog" element={<Blog />} />
    <Route path="contact" element={<Contact />} />
    <Route path="singup" element={<Signup />} />
    <Route path="todo" element={<TodosView />} /> 
*/