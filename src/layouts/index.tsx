// import { Outlet, useNavigate } from "react-router-dom"

import LeftMenu from "@/components/leftMenu"
import Main from "@/components/main"
import MusicPlayer from "@/components/musicPlay"

import "./index.css"

export default function Layout() {
  // const navigate = useNavigate()
  // const goHome = () => navigate("/home")

  return (
    <div className="free-music-wrapper">
      <div className="top-main">
        <LeftMenu></LeftMenu>
        <Main></Main>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  )
}
