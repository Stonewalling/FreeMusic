/*
 * @Author: David
 * @Date: 2023-06-06 14:51:43
 * @LastEditTime: 2023-06-09 10:13:17
 * @LastEditors: David
 * @Description: 模版文件
 * @FilePath: /FreeMusic/src/components/musicPlay/template.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

export default function MusicPlayerMain(props: { src: string }): string {
  return `
    <style>
      /* 在这里添加样式 */
      #player{
        display:none;
      }
    </style>
    <audio id="player" controls src="${props.src}">
    </audio>
    <div class="music-player-wrapper">
      <div class="left-control">
        <div class="prev-song-button"></div>
        <div class="play-button"></div>
        <div class="next-button"></div>
      </div>
    </div>
    <button id="playButton">播放</button>
  `
}
