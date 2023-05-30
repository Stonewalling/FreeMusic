import { ThemeData } from "../types"

const conf = {
  bilApi: "",
  bilBaseAPi: "",
}
if (typeof window.conf == "undefined") window.conf = conf

export default conf

export const APP_NAME = {
  normal: "React Console",
  abbreviation: "R C",
}

export const THEME: ThemeData = {
  light: {},
  dark: {
    colorBgBase: "#141414",
    colorTextBase: "#fff",
  },
}
