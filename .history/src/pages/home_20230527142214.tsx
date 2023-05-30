import { getMusicList } from "@/apis/app"
export default function Home() {
  const data = getMusicList()
  console.log(data)

  return (
    <>
      <div>http://localhost:5173/about</div>
    </>
  )
}
