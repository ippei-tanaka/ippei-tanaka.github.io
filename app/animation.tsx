"use client"


import { Application, extend, PixiReactElementProps, useTick } from '@pixi/react'
import { Container, Sprite, Assets } from 'pixi.js'
import { useRef, useEffect, useState } from 'react'

extend({ Container, Sprite })


function SpinningBunny() {

  const spriteRef = useRef<Sprite | null>(null);
  const [DD, setDD] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      const texture = await Assets.load('/next.svg');
      setDD(texture);
    };

    loadAssets();
  }, []);

  useTick((ticker) => {
    if (spriteRef !== null && spriteRef.current) {
      spriteRef.current.rotation += 0.05 * ticker.deltaTime
    }
  })

  if (!DD) {
    return null; // or a loading indicator
  }

  

  return (
    <pixiSprite
      ref={spriteRef}
      texture={DD}
      anchor={0.5}
      x={200}
      y={200}
    />
  )
}

export default () => {
  return (
    <Application background="#ffffff" resizeTo={window}>
      <pixiContainer>
        <SpinningBunny />
      </pixiContainer>
    </Application>
  )
}