import {createBrowserRouter, Navigate} from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/login'/>
    },
    {
        path: '/login',
        element: 
        <AuthLayout mode="login">
            <Login/>
        </AuthLayout>
    },
    {
        path: '/register',
        element: 
        <AuthLayout mode="register">
            <Register/>
        </AuthLayout>
    }
]);

export default router;