import { Song } from "@/types/song"

export class MusicList {
  list: Array<Song> = [] // 歌单
  lastSong: Song | null = null // 最近播放的一首歌
  listContainer: HTMLElement | null // 歌单dom外层元素

  constructor({ list }: { list: Array<Song> }) {
    this.list = list

    // ToDo 生成一个歌单外层元素挂载在需要挂载的dom元素上
    this.listContainer = document.createElement("div")
    this.listContainer.innerHTML = `<div style='color:red;font-size:15px;'>123</div>`
  }
}
