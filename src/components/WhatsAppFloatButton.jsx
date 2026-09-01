import { contact } from '../data/content.js'
import { WhatsAppIcon } from '../assets/icons/index.jsx'

const message = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar uma consulta.',
)

export default function WhatsAppFloatButton() {
  return (
    // TODO: substituir pelo dado real (número de WhatsApp em src/data/content.js)
    <a
      className="whatsapp-float"
      href={`https://wa.me/${contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}
