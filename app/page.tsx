"use client"

import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";

const PixiScene = dynamic(() => import('./comp'), { ssr: false })
const PixiScene2 = dynamic(() => import('./animation'), { ssr: false })

export default function Home() {
  return (
    <main className="font-mono relative"> 
      <header className="p-20 flex flex-col items-center justify-center ">
        <h1 className="font-bold text-4xl mb-10">Ippei Tanaka</h1>
        <p className="text-lg">is a <span className="font-bold">creator</span> dedicated to creating <span className="font-bold">things</span> that have never existed before.</p>
      </header>
      <section className="p-20 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl mb-10">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link href="/works/1" className="border p-5 rounded-lg hover:shadow-lg transition-shadow">
            <Image src="/images/work1.jpg" alt="Work 1" width={300} height={200} className="rounded-lg" />
            <h3 className="font-bold text-xl mt-5">Work 1</h3>
            <p className="mt-2">Description of Work 1.</p>
          </Link>
        </div>
      </section>
      <div className="absolute top-0 left-0 min-w-full min-h-full -z-1">
        <PixiScene2 />
      </div>
    </main>
  );
}
