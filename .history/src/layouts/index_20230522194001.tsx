import { Navigate, useNavigate } from "react-router-dom"

export default function Layout() {
  const navigate = useNavigate()
  const goHome = () => navigate("/home")

  return (
    <>
      <button onClick={goHome}>测试</button>
    </>
  )
}
