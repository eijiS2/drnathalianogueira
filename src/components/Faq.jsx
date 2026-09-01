import { faq, sections } from '../data/content.js'
import { ChevronIcon } from '../assets/icons/index.jsx'

/* Dados estruturados de FAQ gerados a partir do próprio conteúdo, para não
   existir uma segunda cópia das perguntas no index.html correndo o risco de
   ficar desatualizada. */
function faqJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  })
}

export default function Faq() {
  const head = sections.faq

  return (
    <section className="section" id="duvidas">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <p className="eyebrow">{head.eyebrow}</p>
          <h2>{head.title}</h2>
          <p className="section__lead">{head.lead}</p>
        </div>

        {/* <details> traz sozinho o comportamento de teclado e o estado
            expandido/recolhido que leitores de tela anunciam. */}
        <div className="faq__list reveal">
          {faq.map((item) => (
            <details className="faq__item" key={item.id}>
              <summary className="faq__question">
                <span>{item.question}</span>
                <ChevronIcon className="faq__chevron" />
              </summary>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd() }} />
      </div>
    </section>
  )
}
