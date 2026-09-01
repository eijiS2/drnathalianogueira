import { processSteps, sections } from '../data/content.js'
import { ClockIcon } from '../assets/icons/index.jsx'

export default function Process() {
  const head = sections.process

  return (
    <section className="section section--mist" id="etapas">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{head.eyebrow}</p>
          <h2>{head.title}</h2>
          <p className="section__lead">{head.lead}</p>
        </div>

        {/* Aqui a numeração é legítima: as etapas acontecem em ordem, uma
            depois da outra, e não são itens equivalentes de uma grade. */}
        <ol className="process__list reveal">
          {processSteps.map((step, index) => (
            <li className="process__step" key={step.id}>
              <span className="process__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
              <p className="process__duration">
                <ClockIcon />
                {step.duration}
              </p>
            </li>
          ))}
        </ol>

        <p className="process__note reveal">
          Os prazos variam conforme a região da boca, a qualidade do osso e a resposta de
          cicatrização de cada paciente. A estimativa do seu caso é apresentada no plano de
          tratamento.
        </p>
      </div>
    </section>
  )
}
