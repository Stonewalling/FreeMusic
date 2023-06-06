/*
 * @Author: David
 * @Date: 2023-05-27 14:30:16
 * @LastEditTime: 2023-06-06 10:51:39
 * @LastEditors: David
 * @Description:
 * @FilePath: /FreeMusic/src/global.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
declare let conf: any
declare interface Window {
  conf: any
}

declare namespace JSX {
  interface IntrinsicElements {
    "music-player": any
  }
}
