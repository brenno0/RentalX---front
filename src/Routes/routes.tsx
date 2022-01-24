import { lazy } from "react";

const HomeContainer = lazy(() => import('../App'))

const AuthRoutes = [{}]

const DefaultRoutes = [
    {
        id:'home',
        name:"Home",
        route:'/',
    }
]
export default { AuthRoutes, DefaultRoutes }