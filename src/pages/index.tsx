import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Click Here to go on the pages section</h1>
      <Link href="/profile/profile">
        <Button className='' onClick={()=> console.log("Hello world")}>C</Button>
      </Link>      
    
    </main>
  )
}
