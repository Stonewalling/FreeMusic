/*
 * @Author: David
 * @Date: 2023-06-05 21:37:11
 * @LastEditTime: 2023-06-25 21:12:30
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
      musicList: [
        {
          name: "Viva La Vida",
          author: "Coldplay",
          cover:
            "https://y.gtimg.cn/music/photo_new/T002R300x300M000000NKvAG2DIbUg.jpg",
          url: "https://lq-sycdn.kuwo.cn/ecdf652116d82d5c9b0d631b28ab42e6/64983a0b/resource/n3/50/64/3897490288.mp3?from$unkown&plat$wapi",
        },
      ],
      container: this.container,
    })
    this.container?.appendChild(musicListDom.container)
  }
}
