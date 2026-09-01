import { useEffect } from 'react'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import AgingSigns from './components/AgingSigns.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Gallery from './components/Gallery.jsx'
import Faq from './components/Faq.jsx'
import Booking from './components/Booking.jsx'
import ContactMap from './components/ContactMap.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloatButton from './components/WhatsAppFloatButton.jsx'

export default function App() {
  /* Reveal ao rolar: cada elemento .reveal aparece uma única vez.

     O conteúdo é visível por padrão no CSS; só depois que este efeito roda a
     classe "has-reveal" autoriza o estado inicial transparente. Assim, se o
     JavaScript falhar, o site continua legível em vez de ficar em branco.

     A verificação é por scroll com throttle de temporizador (e não por
     IntersectionObserver ou requestAnimationFrame) porque ambos dependem de
     o navegador estar de fato compondo quadros — em aba oculta, leitor ou
     ferramenta de captura, o conteúdo poderia nunca aparecer. */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = Array.from(document.querySelectorAll('.reveal'))

    if (prefersReduced || !targets.length) return

    const root = document.documentElement
    root.classList.add('has-reveal')

    let pending = targets
    let timer = 0

    const check = () => {
      timer = 0
      const limit = window.innerHeight * 0.92
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= limit) return true
        el.classList.add('is-visible')
        return false
      })
      if (!pending.length) stop()
    }

    const schedule = () => {
      if (!timer) timer = window.setTimeout(check, 100)
    }

    function stop() {
      window.clearTimeout(timer)
      timer = 0
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    // quem chega por um link direto de âncora já cai no meio da página
    window.addEventListener('load', schedule)
    check()
    const settle = window.setTimeout(check, 600)

    return () => {
      window.clearTimeout(settle)
      stop()
      root.classList.remove('has-reveal')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <AgingSigns />
        <Process />
        <Testimonials />
        <Gallery />
        <Faq />
        <Booking />
        <ContactMap />
      </main>

      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
