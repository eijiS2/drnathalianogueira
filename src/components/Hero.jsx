import { about, address, contact, openingHoursShort, profile } from '../data/content.js'
import {
  ClockIcon,
  PinIcon,
  SignatureArc,
  SignatureStroke,
  WhatsAppIcon,
} from '../assets/icons/index.jsx'

/* Mensagem padrão do CTA de WhatsApp do hero. */
const heroMessage = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar uma consulta.',
)

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow hero__enter hero__enter--1">
              {profile.specialty} · {address.city} - {address.state}
            </p>

            <h1 className="hero__title hero__enter hero__enter--1">{profile.headline}</h1>

            <p className="hero__text hero__enter hero__enter--2">{profile.subheadline}</p>

            <p className="hero__name hero__enter hero__enter--2">
              <span className="hero__name-text">{profile.name}</span>
              {/* Elemento-assinatura (1/3): sublinhado do nome no hero */}
              <SignatureStroke />
              {/* TODO: substituir pelo dado real (CRO e registro de especialidade) */}
              <span className="hero__name-cro">
                {profile.cro} · {profile.specialtyRegistration}
              </span>
            </p>

            <div className="hero__actions hero__enter hero__enter--3">
              <a
                className="btn btn--gold"
                href={`https://wa.me/${contact.whatsapp}?text=${heroMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <a className="btn btn--on-dark" href="#servicos">
                Conhecer os serviços
              </a>
            </div>

            <div className="hero__facts hero__enter hero__enter--4">
              <p className="hero__fact">
                <PinIcon />
                <span>
                  <span className="hero__fact-label">Consultório</span>
                  <span className="hero__fact-value">
                    {address.street}
                    <br />
                    {address.short}
                  </span>
                </span>
              </p>
              <p className="hero__fact">
                <ClockIcon />
                <span>
                  <span className="hero__fact-label">Atendimento</span>
                  <span className="hero__fact-value">{openingHoursShort}</span>
                </span>
              </p>
            </div>
          </div>

          <div className="hero__media hero__enter hero__enter--3">
            {/* Elemento-assinatura (3/3): arco decorativo atrás da foto */}
            <SignatureArc className="hero__media-arc" />
            <img
              className="hero__photo"
              src={about.photo}
              width={about.photoWidth}
              height={about.photoHeight}
              alt={about.photoAlt}
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
