'use client'
import TopBar from './TopBar'
import NavLinks from './NavLinks'
import { useWindowScroll } from 'react-use'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'
import Icon from '../Adapters/Icon'
import SearchForm from '../Forms/SearchForm'

export function Header() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-xl backdrop-blur transition-all ${y > 0 ? 'bg-black/70' : 'bg-black'} `}
    >
      <TopBar />
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/img/logo.png"
              alt=""
              className="cursor-pointer py-3 transition-all"
              style={{ height: y > 0 ? '3rem' : '4rem' }}
            />
          </Link>
          <SearchForm />
          <div className="hidden items-center gap-3 md:flex">
            <NavLinks />
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-3xl text-white" />
          </div>
        </div>
      </Container>
    </header>
  )
}
