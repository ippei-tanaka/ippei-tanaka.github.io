"use client"

// import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";

// const Animation = dynamic(() => import('./components/Animation'), { ssr: false });

export default function Home() {
  return (
    <main className="font-mono">
      <header className="p-20 flex flex-col items-center justify-center ">
        <h1 className="font-bold text-4xl mb-10">Ippei Tanaka</h1>
        <p className="text-lg">is a creator creating things like <br /><span className="font-bold">websites</span>, <span className="font-bold">video games</span>, <span className="font-bold">art</span>, and <span className="font-bold">music</span></p>
        <ul className="flex gap-10 mt-10">
          <li><Link href="https://github.com/ippei-tanaka" target='_blank'><Image src="/github-icon.svg" alt="GitHub" width={40} height={40} /></Link></li>
          <li><Link href="https://www.instagram.com/natural.math" target='_blank'><Image src="/instagram-icon.svg" alt="Instagram" width={40} height={40} /></Link></li>
          <li><Link href="https://medium.com/@ippei.tanaka" target='_blank'><Image src="/medium-icon.svg" alt="Medium" width={40} height={40} /></Link></li>
          <li><Link href="https://soundcloud.com/red-tree-leaf" target='_blank'><Image src="/soundcloud-icon.svg" alt="SoundCloud" width={40} height={40} /></Link></li>
        </ul>
      </header>
      <section className="px-20 pb-20 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="border p-5 rounded-lg">
            <Link href="https://buyfromhere.ca/" target='_blank' ><Image src="/from-here.png" alt="From Here" width={300} height={216} className="rounded-lg" /></Link>
            <h3 className="font-bold text-xl mt-5"><Link href="https://buyfromhere.ca/" target='_blank' >From Here</Link></h3>
            <p className="mt-2 max-w-[300px] text-sm">Created reusable UI components by writing CSS and TypeScript.</p>
            <p className="mt-2 max-w-[300px] text-xs">2025</p>
          </section>
          <section className="border p-5 rounded-lg">
            <Link href="https://red-tree.itch.io/chill-maze" target='_blank' ><Image src="/chill-maze.png" alt="Chill Maze" width={300} height={216} className="rounded-lg" /></Link>
            <h3 className="font-bold text-xl mt-5"><Link href="https://red-tree.itch.io/chill-maze" target='_blank' >Chill Maze</Link></h3>
            <p className="mt-2 max-w-[300px] text-sm">A 3D maze game using TypeScript and PixiJS.</p>
            <p className="mt-2 max-w-[300px] text-xs">
              <span>2023</span>
            </p>
          </section>
          <section className="border p-5 rounded-lg">
            <Link href="https://ippei-tanaka.github.io/spider-solitaire/" target='_blank' ><Image src="/spider-solitaire.png" alt="Spider Solitaire" width={300} height={239} className="rounded-lg" /></Link>
            <h3 className="font-bold text-xl mt-5"><Link href="https://ippei-tanaka.github.io/spider-solitaire/" target='_blank' >Spider Solitaire</Link></h3>
            <p className="mt-2 max-w-[300px] text-sm">A digital version of the classic card game using React and TypeScript.</p>
            <p className="mt-2 max-w-[300px] text-xs">
              <span>2022</span>,
              <Link href="https://github.com/ippei-tanaka/spider-solitaire" target='_blank' className="ml-2 text-blue-500 hover:underline">Source on GitHub</Link>
            </p>
          </section>
        </div>
      </section>
      {/* <Animation /> */}
      <footer className="p-20 flex flex-col items-center justify-center">
        <p className="text-sm">© 2026 Ippei Tanaka. All rights reserved.</p>
      </footer>
    </main>
  );
};