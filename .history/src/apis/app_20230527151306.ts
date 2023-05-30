/*
 * @Author: David
 * @Date: 2023-05-27 14:20:37
 * @LastEditTime: 2023-05-27 15:13:06
 * @LastEditors: David
 * @Description:
 * @FilePath: \music\src\apis\app.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import request from "@/utils/myAxios"

export function getMusicList() {
  return request.get(
    "bilApi/pgc/player/web/playurl?avid=2325306&cid=3629601&ep_id=85046"
  )
}

export function getBilibiliCookies() {
  return request.get("/bilBaseApi/")
}
