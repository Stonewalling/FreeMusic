/*
 * @Author: David
 * @Date: 2023-05-27 13:31:09
 * @LastEditTime: 2023-05-27 14:57:17
 * @LastEditors: David
 * @Description:
 * @FilePath: \music\src\utils\myAxios.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const instance = axios.create({
  baseURL: "",
  timeout: 20000,
  headers: {
    Cookie: `buvid3=951446BD-4EF3-65C2-EA76-2B41D946C2AF77688infoc; b_nut=1682073177; _uuid=D3949DD2-7CDC-95EF-5A44-BF246D37F55579497infoc; CURRENT_PID=bf3c4c60-e032-11ed-b5b2-934df47e0f7d; rpdid=|(um))l)R~|Y0J'uY)k|~RR|Y; CURRENT_FNVAL=4048; i-wanna-go-back=-1; FEED_LIVE_VERSION=V8; header_theme_version=CLOSE; buvid4=6E79BAC5-A110-C400-5BF6-949B0E2BB92778749-023042118-WLTsBylgqfnlud%2BU8jDKag%3D%3D; nostalgia_conf=-1; DedeUserID=332071075; DedeUserID__ckMd5=03e8055cd8546802; b_ut=5; hit-new-style-dyn=0; hit-dyn-v2=1; buvid_fp_plain=undefined; LIVE_BUVID=AUTO4916833725789841; is-2022-channel=1; home_feed_column=5; browser_resolution=1440-908; fingerprint=5483b4cc88712bced7ad3a1bf029dcd8; CURRENT_QUALITY=0; bp_video_offset_332071075=798888059327217700; b_lsid=A58EA924_1884D61FAA9; buvid_fp=5483b4cc88712bced7ad3a1bf029dcd8; innersign=1; SESSDATA=a5acd73d%2C1700477736%2Ca57cf%2A52; bili_jct=b394f872f173676bb797a93ad60d6e27; sid=6miaum0r; PVID=1`,
  },
})

instance.interceptors.request.use(
  (conf: AxiosRequestConfig): any => {
    return conf
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (
    response: AxiosResponse
  ): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
    const { data } = response
    return data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
