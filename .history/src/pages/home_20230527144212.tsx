import { getMusicList } from "@/apis/app"
export default function Home() {
  const data = getMusicList()
  console.log(window.conf)

  return (
    <>
      <div>http://localhost:5173/about</div>
    </>
  )
}
