'use client'

import { useLayoutEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export default function Header() {
  const state = useHeaderScroll()

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full px-4 py-8 text-primary-foreground',
        'transition-all delay-100 duration-200 ease-in',
        state === 'hidden' && '-translate-y-full',
        state === 'transparent' && 'bg-transparent',
        state === 'solid' && 'bg-primary',
      )}
    >
      Navbar
    </header>
  )
}

type State = 'transparent' | 'solid' | 'hidden'
function useHeaderScroll() {
  const [state, setImpState] = useState<State>('transparent')

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)

    const minScrollTop = 96
    let lastScrollTop = 0
    let lastState = 'transparent'
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const isScrollingDown = scrollTop > lastScrollTop
      const isOnTop = scrollTop <= minScrollTop
      const setState = (newState: State) => {
        if (newState !== lastState) {
          setImpState(newState)
          lastState = newState
        }
      }

      if (!isOnTop && isScrollingDown) {
        setState('hidden')
      } else if (!isOnTop && !isScrollingDown) {
        setState('solid')
      } else if (isOnTop && !isScrollingDown) {
        setState('transparent')
      }

      lastScrollTop = scrollTop
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return state
}
