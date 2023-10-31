import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>ホームページ</h1>
      <h2>コンテナに入りました</h2>
    </>
  )
}
