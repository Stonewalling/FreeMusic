/*
 * @Author: David
 * @Date: 2023-06-06 14:10:22
 * @LastEditTime: 2023-06-06 14:36:10
 * @LastEditors: David
 * @Description: 底部的组件
 * @FilePath: /FreeMusic/src/components/footer/index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import MusicPlayer from "../musicPlay"
export default function FooterMusic() {
  return (
    <div className="music-player-wrapper">
      <MusicPlayer src="media/1.mp3"></MusicPlayer>
    </div>
  )
}
