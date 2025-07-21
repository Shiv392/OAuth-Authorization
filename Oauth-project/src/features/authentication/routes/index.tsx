import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Login = lazy(()=> import('../pages/login'));
const Signup = lazy(()=> import('../pages/signup'));

export const AuthRoutes : RouteObject[]= [
    {
        path:'/', element : <Login />
    },
    {
        path:'/signup', element : <Signup />
    }
]