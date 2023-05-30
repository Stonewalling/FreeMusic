import { ContextType } from "react"
const defaultTheme = {}
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
