import { RouterType } from "@/types/index"
import Layout from "@/layouts/index"
import Home from "@/pages/home"

export const mainRoute: RouterType = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/home",
      label: "首页",
      element: <Home />,
    },
  ],
}
