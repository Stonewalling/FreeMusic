/*
 * @Author: David
 * @Date: 2023-06-05 21:37:11
 * @LastEditTime: 2023-06-05 21:43:05
 * @LastEditors: David
 * @Description: 音乐播放器对象
 * @FilePath: \music\src\components\musicPlay\player.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

class MusicPlayer {
  playlist: any[] // 播放列表
  currentSongIndex: number // 当前歌曲索引
  isPlaying: boolean
  lyrics: any[]
  currentLyricIndex: number

  constructor() {
    this.playlist = []
    this.currentSongIndex = 0
    this.isPlaying = false // 是否正在播放
    this.lyrics = [] // 歌词
    this.currentLyricIndex = 0 // 当前歌词索引
  }

  addSong(song: any) {
    this.playlist.push(song)
  }

  removeSong(index: number) {
    this.playlist.splice(index, 1)
  }

  play() {
    this.isPlaying = true
    // 在此处实现播放逻辑，例如播放当前歌曲
  }

  pause() {
    this.isPlaying = false
    // 在此处实现暂停逻辑
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length
    // 在此处实现切换到下一首歌曲的逻辑
  }

  previousSong() {
    this.currentSongIndex =
      (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length
    // 在此处实现切换到上一首歌曲的逻辑
  }

  moveSong(fromIndex: number, toIndex: number) {
    const song = this.playlist[fromIndex]
    this.playlist.splice(fromIndex, 1)
    this.playlist.splice(toIndex, 0, song)
  }

  loadLyrics(lyrics: never[]) {
    this.lyrics = lyrics
  }

  updateLyricIndex() {
    // 在此处根据播放时间更新当前歌词索引的逻辑
  }

  correctLyric(index: number, newLyric: any) {
    this.lyrics[index] = newLyric
  }
}
