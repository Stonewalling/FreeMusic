/*
 * @Author: David
 * @Date: 2023-06-06 14:51:43
 * @LastEditTime: 2023-06-06 16:47:31
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
    }
  </style>
  <audio id="player" controls src="${props.src}">
  </audio>
  <button id="play">播放</button>
  <button id="pause">暂停</button>
    `
}
