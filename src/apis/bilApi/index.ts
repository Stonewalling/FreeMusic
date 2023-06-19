// import { BilSearchAll } from "@/types/bilAPi"
import request from "@/utils/myAxios"

const prefixWorld = "/baseAPi/"
export async function getBilCookies() {
  return request.get(`${prefixWorld}bilApi/getBilCookie`)
}

export async function getSearchMusic() {
  return request.get(`${prefixWorld}bilApi/getBilList`)
}

export async function getQQRecommendPlaylist() {
  return request.get(`${prefixWorld}qqApi/recommend/playlist`)
}
