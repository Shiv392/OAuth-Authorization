import { Suspense } from "react";
import { AuthRoutes } from "../features/authentication/routes";
import { useRoutes } from "react-router-dom";

const routes = [...AuthRoutes];

const AppRoutes = ()=>{
const elements = useRoutes(routes);
return(
<Suspense>
{elements}
</Suspense>
)
}

export default AppRoutes;