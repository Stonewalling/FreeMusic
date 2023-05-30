import { ThemeType, Theme, ContextProps } from "@/types"
import { ConfigProvider } from "antd"
import { ThemeConfig } from "antd/es/config-provider/context"
import { THEME } from "@/config"
import { createContext, useState } from "react"
const defaultTheme = {}

export const ThemeContext = createContext<{
  themeType: ThemeType
  updateThemeType: any
  setThemeToken: any
}>({ themeType: "light", updateThemeType: () => {}, setThemeToken: () => {} })

export function ThemeProvider(props: ContextProps) {
  const [themeType, setThemeType] = useState<ThemeType>("dark")
  const [themeToken, setThemeToken] =
    useState<ThemeConfig["token"]>(defaultTheme)

  const updateThemeType = (themeType: Theme) => {
    setThemeType(themeType)
    if (themeType === Theme.dark) {
      setThemeToken(THEME.dark)
    } else {
      setThemeToken(THEME.light)
    }
  }

  return (
    <ThemeContext.Provider
      value={{ themeType, updateThemeType, setThemeToken }}>
      <ConfigProvider theme={{ token: themeToken }}>
        {props.children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}
