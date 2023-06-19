/*
 * @Author: David
 * @Date: 2023-06-18 15:15:11
 * @LastEditTime: 2023-06-19 21:11:20
 * @LastEditors: David
 * @Description: 播放器
 * @FilePath: \music\src\components\musicPlay\MusicPlayer\MusicPlayerControl.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { Song } from "@/types/song"

interface MusicPlayerParams {
  musicList: Array<Song>
  container?: Element | null
}

export class MusicPlayerControl {
  container: Element | null | undefined
  musicList: Array<Song>
  currentSong: Song = { name: "", author: "", cover: "", url: "./" }
  audioElement: HTMLAudioElement = document.createElement("audio")
  prevDom: HTMLElement | undefined

  constructor({ musicList }: MusicPlayerParams) {
    this.musicList = musicList
    this.container = document.createElement("div")
    this.container!.innerHTML = `
    <div class="left-control">
      <span id="prevButton">prev song</span>
      <span id="playButton">play song</span>
      <span id="nextButton">next song</span>
    </div>
    <div class="main-info">
      <div class="cover">
        <img src=${this.currentSong.cover}></img>
      </div>
      <div class="detail">
        <div class="song-name-control">
          <span class="song-name">${this.currentSong.name}</span>
          <div class="control"></div>
        </div>
        <div class="more-info">
          <span class="current-time></span>
          <span class="single">${this.currentSong.author}</span>
          <span class="total-time"></span>
        </div>
      </div>
    </div>
    `

    this.audioElement.src = this.currentSong.url
    const prevDom = this.container.querySelector("#prevButton")
    prevDom?.addEventListener("click", (e) => {
      console.log("点击了上一张")
    })
  }
}
