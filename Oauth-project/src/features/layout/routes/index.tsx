import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Layout = lazy(()=> import('../pages/layout'));

const LayoutRoutes  : RouteObject[] = [
    {
        path : '/app', element : <Layout />
    }
]

export default LayoutRoutes;