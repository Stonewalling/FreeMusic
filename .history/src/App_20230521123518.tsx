import { AppRouter } from "@/routes"
import "./App.css"
import { ThemeProvider } from "@/providers/theme"

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
