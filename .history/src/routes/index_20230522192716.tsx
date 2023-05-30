import { useMemo } from "react"
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
    for (const route of routes) {
      if (
        route.auth === undefined ||
        route.auth.includes(userInfo.user.role!)
      ) {
        _routes.push({
          path: route.path,
          element: route.element,
          children: route.children ? formatRoute(route.children) : undefined,
        } as RouterType)
      }
    }
    return _routes
  }

  const appRoutes = useMemo(() => {
    const allRoutes = [mainRoute]
    console.log(mainRoute)

    return createBrowserRouter(formatRoute(allRoutes))
  }, [null])

  return <RouterProvider router={appRoutes} />
}
