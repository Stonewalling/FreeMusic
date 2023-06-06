/*
 * @Author: David
 * @Date: 2023-05-30 21:25:18
 * @LastEditTime: 2023-06-06 14:36:00
 * @LastEditors: David
 * @Description: 音乐播放器
 * @FilePath: /FreeMusic/src/components/musicPlay/index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import "./player"
export default function MusicPlayer(props: { src: string }) {
  return <music-player src={props.src}></music-player>
}
