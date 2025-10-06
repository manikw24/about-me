import { useEffect, useRef, useState } from 'react'

export function useTypewriter(texts: string[], speed = 40, pause = 1200) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<'typing' | 'deleting'>('typing')
  const timer = useRef<number | null>(null)

  useEffect(() => {
    function step() {
      const full = texts[index % texts.length]
      if (dir === 'typing') {
        const next = full.slice(0, display.length + 1)
        setDisplay(next)
        if (next === full) {
          if (timer.current) window.clearTimeout(timer.current)
          timer.current = window.setTimeout(() => setDir('deleting'), pause)
          return
        }
      } else {
        const next = full.slice(0, Math.max(0, display.length - 1))
        setDisplay(next)
        if (next.length === 0) {
          setDir('typing')
          setIndex(i => (i + 1) % texts.length)
        }
      }
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(step, dir === 'typing' ? speed : Math.max(20, speed / 2))
    }
    timer.current = window.setTimeout(step, speed)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [texts, speed, pause, display, dir, index])

  return display
}


