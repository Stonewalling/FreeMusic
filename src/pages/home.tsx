import {
  getSearchMusic,
  getBilCookies,
  getQQRecommendPlaylist,
} from "@/apis/bilApi/index"

export default function Home() {
  ;(async () => {
    await getBilCookies()
    let result = await getSearchMusic()
    console.log("返回的数据", result)
    await getQQRecommendPlaylist()
  })()

  // console.log(list)

  return (
    <>
      <div>http://localhost:5173/about</div>
    </>
  )
}
