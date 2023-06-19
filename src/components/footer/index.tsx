/*
 * @Author: David
 * @Date: 2023-06-06 14:10:22
 * @LastEditTime: 2023-06-18 12:12:00
 * @LastEditors: David
 * @Description: 底部的组件
 * @FilePath: \music\src\components\footer\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { useEffect } from "react"
import { MusicPlayer } from "../musicPlay/player"

export default function FooterMusic() {
  useEffect(() => {
    const musicPlayerElement = document.createElement("music-player")
    const container = document.querySelector(".music-player-wrapper")
    container?.appendChild(musicPlayerElement)

    const musicPlay = new MusicPlayer({ container: musicPlayerElement })

    return () => {
      container?.removeChild(musicPlayerElement)
    }
  }, [])

  return <div className="music-player-wrapper"></div>
}
