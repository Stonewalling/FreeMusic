import { ReactNode } from "react"
import { ThemeConfig } from "antd/es/config-provider/context"

export type RouterType = {
  // route props
  path?: string
  element?: ReactNode
  children?: RouterType[]
  loader?: () => void
  // menu props
  icon?: ReactNode
  name?: string
  label?: string
  hide?: boolean
  // auth props
  auth?: Roles[]
}

export enum Roles {
  ADMIN = 0,
  USER = 1,
}
export type ThemeType = "light" | "dark"
export enum Theme {
  light = "light",
  dark = "dark",
}
export interface ThemeData {
  light?: ThemeConfig["token"]
  dark?: ThemeConfig["token"]
}
