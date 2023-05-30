import { ThemeType, Theme } from "@/types"
import { ThemeConfig } from "antd/es/config-provider/context"
import { THEME } from "@/config"
import { ContextType, useState } from "react"
const defaultTheme = {}

export const ThemeContext = createContext<{
  themeType: ThemeType
  updateThemeType: any
  setThemeToken: any
}>({ themeType: "light", updateThemeType: () => {}, setThemeToken: () => {} })

export function ThemeProvider(props: ContextType) {
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
