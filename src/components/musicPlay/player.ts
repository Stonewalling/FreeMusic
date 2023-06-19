/*
 * @Author: David
 * @Date: 2023-06-05 21:37:11
 * @LastEditTime: 2023-06-19 20:33:29
 * @LastEditors: David
 * @Description: 音乐播放器对象
 * @FilePath: \music\src\components\musicPlay\player.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { MusicPlayerControl } from "./MusicPlayer/MusicPlayerControl"
export class MusicPlayer {
  container: any
  constructor({ container }: { container: Element | null }) {
    this.container = container
    const musicListDom = new MusicPlayerControl({
      musicList: [],
      container: this.container,
    })
    this.container?.appendChild(musicListDom.container)
  }
}
