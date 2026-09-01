import { about, profile } from '../data/content.js'
import { CheckIcon, SignatureArc } from '../assets/icons/index.jsx'

export default function About() {
  return (
    <section className="section section--mist" id="sobre">
      <div className="container">
        <div className="about__grid">
          <div className="about__media reveal">
            {/* Elemento-assinatura (3/3): arco decorativo atrás da foto */}
            <SignatureArc className="about__arc" />
            {/* Mesmo retrato do topo, em enquadramento fechado no rosto.
                Trocar por uma segunda foto quando houver. */}
            <img
              className="about__photo"
              src={about.photo}
              width={about.photoWidth}
              height={about.photoHeight}
              alt={about.photoAlt}
              loading="lazy"
            />
          </div>

          <div className="about__body reveal">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>{about.title}</h2>

            {/* TODO: substituir pelo dado real (CRO e registro de especialidade).
                A exibição do CRO é exigência legal; o número do registro de
                especialidade é exigido sempre que a palavra "especialista"
                aparecer na divulgação. */}
            <p className="about__cro">
              {profile.cro} · {profile.specialtyRegistration}
            </p>

            <div className="about__bio">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <ul className="about__list">
              {about.differentials.map((item) => (
                <li className="about__item" key={item.title}>
                  <span className="about__item-icon">
                    <CheckIcon />
                  </span>
                  <span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
