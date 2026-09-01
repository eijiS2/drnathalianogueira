import { agingSigns, sections } from '../data/content.js'

/* Coordenadas dos marcadores sobre a ilustração, na ordem de agingSigns.
   Mantêm a mesma numeração da lista ao lado. */
const markers = [
  { x: 108, y: 176 },
  { x: 142, y: 220 },
  { x: 120, y: 272 },
  { x: 96, y: 316 },
  { x: 152, y: 318 },
  { x: 180, y: 368 },
  { x: 124, y: 402 },
]

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/* Ilustração esquemática autoral — desenho de linha, sem foto de paciente e
   sem imagem de "antes e depois", que o Código de Ética Odontológica veda na
   divulgação. O conteúdo real está na lista numerada ao lado; por isso o
   desenho fica oculto para leitores de tela. */
function FaceDiagram() {
  return (
    <svg
      className="aging__svg"
      viewBox="0 0 360 470"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* cabelo */}
      <path
        {...line}
        d="M88 236c-6-86 30-162 92-162s98 76 92 162c-4-40-22-86-56-98-20 8-52 8-72 0-34 12-52 58-56 98z"
        strokeWidth="1.6"
        opacity="0.45"
      />

      {/* contorno do rosto */}
      <path
        {...line}
        d="M180 444c-42 0-76-34-86-88-6-32-8-70-6-106 2-84 38-146 92-146s90 62 92 146c2 36 0 74-6 106-10 54-44 88-86 88z"
        strokeWidth="2"
      />

      {/* orelhas */}
      <path {...line} d="M88 262c-10-4-12 24-2 34" strokeWidth="1.6" />
      <path {...line} d="M272 262c10-4 12 24 2 34" strokeWidth="1.6" />

      {/* sobrancelhas */}
      <path {...line} d="M118 214c12-11 38-13 50-6" strokeWidth="1.8" />
      <path {...line} d="M192 208c12-7 38-5 50 6" strokeWidth="1.8" />

      {/* olhos */}
      <path {...line} d="M120 238c8-14 36-14 44 0-8 13-36 13-44 0z" strokeWidth="1.6" />
      <path {...line} d="M196 238c8-14 36-14 44 0-8 13-36 13-44 0z" strokeWidth="1.6" />
      <circle cx="142" cy="238" r="6" fill="currentColor" opacity="0.75" />
      <circle cx="218" cy="238" r="6" fill="currentColor" opacity="0.75" />

      {/* nariz */}
      <path {...line} d="M180 258v38" strokeWidth="1.6" opacity="0.7" />
      <path {...line} d="M166 300c6 9 22 9 28 0" strokeWidth="1.6" />

      {/* lábios */}
      <path {...line} d="M152 340c12-9 20-3 28-3s16-6 28 3" strokeWidth="1.8" />
      <path {...line} d="M152 340c14 18 42 18 56 0" strokeWidth="1.8" />

      {/* sulco nasogeniano e linha da mandíbula, em traço fino de apoio */}
      <path {...line} d="M164 302c-10 16-14 30-13 42" strokeWidth="1.4" opacity="0.5" />
      <path {...line} d="M96 352c12 48 44 80 84 90" strokeWidth="1.4" opacity="0.35" />

      {/* marcadores numerados */}
      {markers.map((marker, index) => (
        <g key={agingSigns[index].id} className="aging__marker">
          <circle cx={marker.x} cy={marker.y} r="14" className="aging__marker-dot" />
          <text
            x={marker.x}
            y={marker.y + 4}
            textAnchor="middle"
            className="aging__marker-num"
          >
            {index + 1}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function AgingSigns() {
  const head = sections.aging

  return (
    <section className="section section--dark" id="sinais">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">{head.eyebrow}</p>
          <h2>{head.title}</h2>
          <p className="section__lead">{head.lead}</p>
        </div>

        <div className="aging__grid">
          <figure className="aging__figure reveal">
            <FaceDiagram />
            <figcaption className="aging__caption">{head.diagramTitle}</figcaption>
          </figure>

          <ol className="aging__list reveal">
            {agingSigns.map((sign, index) => (
              <li className="aging__item" key={sign.id}>
                <span className="aging__num" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3 className="aging__name">{sign.name}</h3>
                  <p className="aging__text">{sign.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="aging__note reveal">{head.note}</p>
      </div>
    </section>
  )
}
