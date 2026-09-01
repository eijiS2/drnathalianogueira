import { useState } from 'react'

import { sections, testimonials } from '../data/content.js'
import { ChevronIcon } from '../assets/icons/index.jsx'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const head = sections.testimonials

  const goTo = (next) => setIndex((next + total) % total)

  /* Setas do teclado navegam quando o carrossel está em foco. */
  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    }
  }

  return (
    <section className="section section--dark" id="depoimentos">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <p className="eyebrow">{head.eyebrow}</p>
          <h2>{head.title}</h2>
        </div>

        <div
          className="testimonials reveal"
          role="group"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de pacientes"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <div className="testimonials__viewport">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <figure
                  className="testimonial"
                  key={item.id}
                  aria-hidden={i !== index ? 'true' : undefined}
                >
                  <blockquote className="testimonial__quote">{item.quote}</blockquote>
                  <figcaption className="testimonial__author">
                    <span className="testimonial__name">{item.author}</span>
                    <span className="testimonial__context">{item.context}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="testimonials__controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={() => goTo(index - 1)}
              aria-label="Depoimento anterior"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Escolher depoimento">
              {testimonials.map((item, i) => (
                <button
                  type="button"
                  key={item.id}
                  className="testimonials__dot"
                  onClick={() => goTo(i)}
                  aria-current={i === index ? 'true' : undefined}
                  aria-label={`Ver depoimento ${i + 1} de ${total}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn"
              onClick={() => goTo(index + 1)}
              aria-label="Próximo depoimento"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <p className="visually-hidden" aria-live="polite">
            Depoimento {index + 1} de {total}
          </p>
        </div>

        <p className="testimonials__disclaimer">{head.disclaimer}</p>
      </div>
    </section>
  )
}
