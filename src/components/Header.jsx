import { useEffect, useRef, useState } from 'react'

import { navLinks, profile } from '../data/content.js'
import { MenuIcon, SignatureStroke } from '../assets/icons/index.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('inicio')
  const toggleRef = useRef(null)

  /* Sombra do header a partir de um pequeno deslocamento de rolagem. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Marca no menu a seção que está em tela (aria-current). */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  /* Esc fecha o menu mobile e devolve o foco ao botão que o abriu. */
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  /* Fecha o painel ao passar para o layout de desktop. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <a className="header__brand" href="#inicio" aria-label={`${profile.name}, ir para o início`}>
            <span className="header__brand-name">{profile.name}</span>
            {/* Elemento-assinatura (1/3): sublinhado do nome */}
            <SignatureStroke />
          </a>

          <nav className="header__nav" aria-label="Navegação principal">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} aria-current={activeId === link.id ? 'true' : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a className="btn btn--gold header__cta" href="#agendamento">
              Agendar consulta
            </a>

            <button
              ref={toggleRef}
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              onClick={() => setOpen((value) => !value)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" className="header__panel" aria-label="Navegação principal (mobile)">
            <ul className="header__panel-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={activeId === link.id ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--gold btn--block" href="#agendamento" onClick={() => setOpen(false)}>
              Agendar consulta
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
