import { address, contact, footerExtraLinks, navLinks, profile } from '../data/content.js'
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  SignatureStroke,
  WhatsAppIcon,
} from '../assets/icons/index.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__name">{profile.name}</p>
            {/* Elemento-assinatura: mesmo traço do header, fechando a página */}
            <SignatureStroke />
            {/* TODO: substituir pelo dado real (CRO e registro de especialidade).
                A exibição do CRO no rodapé é exigência legal; o registro de
                especialidade acompanha o uso da palavra "especialista". */}
            <p className="footer__cro">
              {profile.roleFull}
              <br />
              {profile.cro} · {profile.specialtyRegistration}
            </p>
            <address className="footer__address">
              {address.street}
              <br />
              {address.district}, {address.city} - {address.state}
              <br />
              CEP {address.zip}
            </address>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="footer__title">Navegação</p>
            <ul className="footer__nav-list">
              {/* o rodapé lista também as seções que não cabem no menu do topo */}
              {[...navLinks, ...footerExtraLinks].map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer__title">Contato</p>
            <ul className="footer__contact-list">
              <li>
                {/* TODO: substituir pelo dado real (telefone) */}
                <a href={contact.phoneHref} aria-label={`Ligar para ${contact.phone}`}>
                  <PhoneIcon />
                  {contact.phone}
                </a>
              </li>
              <li>
                {/* TODO: substituir pelo dado real (WhatsApp) */}
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar pelo WhatsApp"
                >
                  <WhatsAppIcon />
                  {contact.whatsappLabel}
                </a>
              </li>
              <li>
                {/* TODO: substituir pelo dado real (e-mail) */}
                <a href={`mailto:${contact.email}`} aria-label={`Enviar e-mail para ${contact.email}`}>
                  <MailIcon />
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="footer__social">
              {/* TODO: substituir pelo dado real (Instagram) */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${contact.instagram}`}
              >
                <InstagramIcon />
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do consultório"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {profile.name} · {profile.cro}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
