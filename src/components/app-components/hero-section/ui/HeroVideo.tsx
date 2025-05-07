'use client'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function HeroVideo() {
  return (
    <div suppressHydrationWarning>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        height='300px'
        width='100%'
      />
    </div>
  )
}