import { useEffect, useRef, useState } from 'react'

import { gallery, sections } from '../data/content.js'
import { CloseIcon, ExpandIcon } from '../assets/icons/index.jsx'

export default function Gallery() {
  const [openItem, setOpenItem] = useState(null)
  const closeRef = useRef(null)
  const lastTriggerRef = useRef(null)

  const open = (item, event) => {
    lastTriggerRef.current = event.currentTarget
    setOpenItem(item)
  }

  const close = () => {
    setOpenItem(null)
    lastTriggerRef.current?.focus()
  }

  /* Esc fecha o lightbox; o foco vai para o botão de fechar ao abrir. */
  useEffect(() => {
    if (!openItem) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openItem])

  return (
    <section className="section section--mist" id="galeria">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <p className="eyebrow">{sections.gallery.eyebrow}</p>
          <h2>{sections.gallery.title}</h2>
          <p className="section__lead">{sections.gallery.lead}</p>
        </div>

        <ul className="gallery__grid reveal">
          {gallery.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="gallery__item"
                onClick={(event) => open(item, event)}
                aria-label={`Ampliar imagem: ${item.alt}`}
                aria-haspopup="dialog"
              >
                <span className="gallery__thumb">
                  <ExpandIcon />
                </span>
                <span className="gallery__caption">
                  <span>{item.caption}</span>
                  <ExpandIcon />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {openItem && (
        <div
          className="lightbox"
          role="presentation"
          onClick={(event) => {
            // clique fora do diálogo fecha
            if (event.target === event.currentTarget) close()
          }}
        >
          <div
            className="lightbox__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-titulo"
          >
            <button
              ref={closeRef}
              type="button"
              className="lightbox__close"
              onClick={close}
              aria-label="Fechar imagem ampliada"
            >
              <CloseIcon />
            </button>

            {/* Placeholder — trocar por <img src="..." alt={openItem.alt} /> */}
            <div className="lightbox__image">
              <span className="photo-placeholder__label">{openItem.caption}</span>
              <span className="photo-placeholder__hint">{openItem.alt}</span>
            </div>

            <div className="lightbox__caption">
              <h3 id="lightbox-titulo">{openItem.caption}</h3>
              <p>{openItem.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
