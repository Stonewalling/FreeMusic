/*
 * @Author: David
 * @Date: 2023-06-05 21:37:11
 * @LastEditTime: 2023-06-09 10:54:46
 * @LastEditors: David
 * @Description: 音乐播放器对象
 * @FilePath: /FreeMusic/src/components/musicPlay/player.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import MusicPlayerMain from "./template"

class MusicPlayer extends HTMLElement {
  audioElement: any
  shadowRoot: ShadowRoot | null

  constructor() {
    super()
    this.shadowRoot = this.attachShadow({ mode: "open" })
    this.shadowRoot.innerHTML = MusicPlayerMain({ src: "" })
    this.audioElement = this.shadowRoot.querySelector("#player")
    const playerButton = this.shadowRoot.querySelector("#playButton")
    playerButton?.addEventListener("click", () => {
      if (this.audioElement.paused) {
        this.audioElement.play()
      } else {
        this.audioElement.pause()
      }
    })
  }

  static get observedAttributes() {
    return ["src"]
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === "src") {
      // 数据发生改变，执行相应的操作
      this.render(newValue)
    }
  }

  render(data: any) {
    // 渲染组件，使用传递的数据
    const _audioElement = this.shadowRoot!.querySelector("#player")
    _audioElement?.setAttribute("src", data)
  }

  play() {
    this.audioElement.play()
  }

  pause() {
    this.audioElement.pause()
  }
}

customElements.define("music-player", MusicPlayer)
