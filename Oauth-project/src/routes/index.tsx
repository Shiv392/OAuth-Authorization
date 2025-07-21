import { Suspense } from "react";
import { AuthRoutes } from "../features/authentication/routes";
import { useRoutes } from "react-router-dom";
import LayoutRoutes from "../features/layout/routes";

const routes = [...AuthRoutes, ...LayoutRoutes];

const AppRoutes = ()=>{
const elements = useRoutes(routes);
return(
<Suspense>
{elements}
</Suspense>
)
}

export default AppRoutes;