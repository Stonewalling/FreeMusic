/*
 * @Author: David
 * @Date: 2023-05-27 14:20:37
 * @LastEditTime: 2023-05-27 14:52:04
 * @LastEditors: David
 * @Description:
 * @FilePath: \music\src\apis\app.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import request from "@/utils/myAxios"

export function getMusicList() {
  return request.get(
    "/pgc/player/web/playurl?avid=2325306&cid=3629601&ep_id=85046"
  )
}
