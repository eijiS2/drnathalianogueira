import { sections, treatmentGroups } from '../data/content.js'
import { ServiceIcon, SignatureStroke } from '../assets/icons/index.jsx'

/* Clicar em um tratamento leva ao formulário com ele já selecionado.
   O aviso é enviado por evento para o Booking, que escuta na janela. */
function selectService(id) {
  window.dispatchEvent(new CustomEvent('servico-selecionado', { detail: id }))
}

export default function Services() {
  const head = sections.services

  return (
    <section className="section" id="tratamentos">
      <div className="container">
        {/* Elemento-assinatura (2/3): divisor curvo no lugar de uma linha reta */}
        <div className="divider" aria-hidden="true">
          <SignatureStroke variant="divider" />
        </div>

        <div className="section__head section__head--center reveal">
          <p className="eyebrow">{head.eyebrow}</p>
          <h2>{head.title}</h2>
          <p className="section__lead">{head.lead}</p>
        </div>

        {/* Duas linhas de trabalho, cada uma com seu próprio subtítulo — elas
            compartilham a avaliação inicial, então convivem na mesma seção. */}
        {treatmentGroups.map((group) => (
          <div className="services__group reveal" key={group.id} id={`tratamentos-${group.id}`}>
            <div className="services__group-head">
              <h3 className="services__group-title">{group.label}</h3>
              <p className="services__group-text">{group.description}</p>
            </div>

            <ul className="services__grid">
              {group.items.map((service) => (
                <li key={service.id}>
                  <a
                    className="service-card"
                    href="#agendamento"
                    onClick={() => selectService(service.id)}
                  >
                    <span className="service-card__icon">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <span className="service-card__title">{service.name}</span>
                    {/* traço-assinatura revelado no hover/foco do card */}
                    <SignatureStroke className="service-card__underline" />
                    <span className="service-card__text">{service.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="services__note reveal">{head.note}</p>
      </div>
    </section>
  )
}
