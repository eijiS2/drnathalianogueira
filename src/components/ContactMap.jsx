import { address, contact, openingHours, sections } from '../data/content.js'
import {
  ArrowIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SignatureStroke,
  WhatsAppIcon,
} from '../assets/icons/index.jsx'

export default function ContactMap() {
  return (
    <section className="section" id="contato">
      <div className="container">
        {/* Elemento-assinatura (2/3): divisor curvo entre seções */}
        <div className="divider" aria-hidden="true">
          <SignatureStroke variant="divider" />
        </div>

        <div className="section__head section__head--center reveal">
          <p className="eyebrow">{sections.contact.eyebrow}</p>
          <h2>{sections.contact.title}</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <div className="contact__block">
              <h3>Endereço</h3>
              <address className="contact__address">
                {address.street}
                <br />
                {address.district}, {address.city} - {address.state}
                <br />
                CEP {address.zip}
              </address>
            </div>

            <div className="contact__block">
              <h3>Horário de funcionamento</h3>
              <ul className="contact__hours">
                {openingHours.map((item) => (
                  <li
                    className={`contact__hours-row${item.closed ? ' contact__hours-row--closed' : ''}`}
                    key={item.days}
                  >
                    <span className="contact__hours-days">{item.days}</span>
                    <span className="contact__hours-time">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__block">
              <h3>Canais de atendimento</h3>
              <ul className="contact__links">
                <li>
                  {/* TODO: substituir pelo dado real (telefone) */}
                  <a
                    className="contact__link"
                    href={contact.phoneHref}
                    aria-label={`Ligar para o consultório no número ${contact.phone}`}
                  >
                    <PhoneIcon />
                    <span>
                      <span className="contact__link-label">Telefone</span>
                      {contact.phone}
                    </span>
                  </a>
                </li>
                <li>
                  {/* TODO: substituir pelo dado real (WhatsApp) */}
                  <a
                    className="contact__link"
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Conversar com o consultório pelo WhatsApp"
                  >
                    <WhatsAppIcon />
                    <span>
                      <span className="contact__link-label">WhatsApp</span>
                      {contact.whatsappLabel}
                    </span>
                  </a>
                </li>
                <li>
                  {/* TODO: substituir pelo dado real (Instagram) */}
                  <a
                    className="contact__link"
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir o perfil ${contact.instagram} no Instagram`}
                  >
                    <InstagramIcon />
                    <span>
                      <span className="contact__link-label">Instagram</span>
                      {contact.instagram}
                    </span>
                  </a>
                </li>
                <li>
                  {/* TODO: substituir pelo dado real (e-mail) */}
                  <a
                    className="contact__link"
                    href={`mailto:${contact.email}`}
                    aria-label={`Enviar e-mail para ${contact.email}`}
                  >
                    <MailIcon />
                    <span>
                      <span className="contact__link-label">E-mail</span>
                      {contact.email}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="reveal">
            <div className="contact__map">
              <iframe
                title={`Mapa com a localização do consultório: ${address.full}`}
                src={address.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="contact__map-link"
              href={address.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir rota no Google Maps
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
