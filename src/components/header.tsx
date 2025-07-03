import Link from 'next/link'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { CardWidget } from './card-widget'
import { SearchForm } from './search-form'
import { Suspense } from 'react'

export function Header() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-5  justify-between md:justify-normal w-[100%] md:w-auto">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <CardWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>

          <Image
            src="https://github.com/nicolycunha.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
