/*
 * @Author: David
 * @Date: 2023-06-18 15:15:11
 * @LastEditTime: 2023-06-25 21:34:07
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
    this.currentSong = musicList[0]
    this.container = document.createElement("div")
    this.container!.innerHTML = `
    <div class="left-control">
      <span id="prevButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
          <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"/>
        </svg>
      </span>
      <span id="playButton">
        <svg id="playSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg>

        <svg id="pauseSvg" style="display:none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
          <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
      </span>
      <span id="nextButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
          <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"/>
        </svg>
      </span>
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
    this.audioElement.style.display = "none"
    this.container.appendChild(this.audioElement)
    const prevDom = this.container.querySelector("#prevButton")
    prevDom?.addEventListener("click", (e) => {
      console.log("点击了上一张")
    })
    const playDom = this.container.querySelector("#playButton")
    playDom?.addEventListener("click", (e) => {
      if (this.audioElement.paused) {
        this.audioElement.play()
        playDom.querySelector("#playSvg")?.setAttribute("style", "display:none")
        playDom
          .querySelector("#pauseSvg")
          ?.setAttribute("style", "display:unset")
      } else {
        this.audioElement.pause()
        playDom
          .querySelector("#pauseSvg")
          ?.setAttribute("style", "display:none")
        playDom
          .querySelector("#playSvg")
          ?.setAttribute("style", "display:unset")
      }
    })
    const nextDom = this.container.querySelector("#nextButton")
    nextDom?.addEventListener("click", (e) => {
      console.log("下一个")
    })
  }
}
