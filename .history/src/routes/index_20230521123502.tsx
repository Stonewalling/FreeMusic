import { useContext, useMemo } from "react"
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"

import { RouterType } from "../types"
import { mainRoute } from "./main"

export function AppRouter() {
  const formatRoute = (routes: RouterType[]): RouteObject[] => {
    const _routes: RouteObject[] = []

    return _routes
  }

  const appRoutes = useMemo(() => {
    const allRoutes = [mainRoute]
    return createBrowserRouter(formatRoute(allRoutes))
  }, [])

  return <RouterProvider router={appRoutes} />
}
