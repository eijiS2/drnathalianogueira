import { useEffect, useRef, useState } from 'react'

import {
  booking,
  contact,
  openingHours,
  profile,
  services,
  treatmentGroups,
} from '../data/content.js'
import { CheckIcon, ClockIcon, PhoneIcon, WhatsAppIcon } from '../assets/icons/index.jsx'

const emptyForm = {
  nome: '',
  telefone: '',
  servico: '',
  data: '',
  mensagem: '',
}

/* Converte "2026-03-14" em "14/03/2026" sem depender de fuso horário. */
function formatDate(value) {
  if (!value) return ''
  const [year, month, day] = value.split('-')
  if (!year || !month || !day) return value
  return `${day}/${month}/${year}`
}

function validate(values) {
  const errors = {}

  if (!values.nome.trim()) {
    errors.nome = 'Informe seu nome completo.'
  } else if (values.nome.trim().length < 3) {
    errors.nome = 'O nome precisa ter pelo menos 3 caracteres.'
  }

  const digits = values.telefone.replace(/\D/g, '')
  if (!values.telefone.trim()) {
    errors.telefone = 'Informe um telefone com WhatsApp para o retorno.'
  } else if (digits.length < 10 || digits.length > 13) {
    errors.telefone = 'Informe o número com DDD, por exemplo (11) 99999-0000.'
  }

  return errors
}

export default function Booking() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  /* Um clique em um card de serviço já deixa o select preenchido. */
  useEffect(() => {
    const onSelect = (event) => {
      const service = services.find((item) => item.id === event.detail)
      if (service) setValues((current) => ({ ...current, servico: service.name }))
    }
    window.addEventListener('servico-selecionado', onSelect)
    return () => window.removeEventListener('servico-selecionado', onSelect)
  }, [])

  const update = (field) => (event) => {
    const { value } = event.target
    setValues((current) => ({ ...current, [field]: value }))
    // limpa o erro do campo assim que o paciente começa a corrigi-lo
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      formRef.current?.querySelector(`#campo-${firstError}`)?.focus()
      setSent(false)
      return
    }

    const lines = [
      `Olá, ${profile.name}! Gostaria de agendar uma consulta.`,
      '',
      `Nome: ${values.nome.trim()}`,
      `Telefone/WhatsApp: ${values.telefone.trim()}`,
    ]

    if (values.servico) lines.push(`Serviço de interesse: ${values.servico}`)
    if (values.data) lines.push(`Data preferida: ${formatDate(values.data)}`)
    if (values.mensagem.trim()) {
      lines.push('', `Mensagem: ${values.mensagem.trim()}`)
    }
    lines.push('', 'Mensagem enviada pelo site.')

    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const today = new Date().toISOString().slice(0, 10)

  return (
    <section className="section section--dark" id="agendamento">
      <div className="container">
        <div className="booking__grid">
          <div className="booking__aside reveal">
            <p className="eyebrow">{booking.eyebrow}</p>
            <h2>{booking.title}</h2>
            <p className="section__lead">{booking.text}</p>

            <ul className="booking__aside-list">
              <li className="booking__aside-item">
                <ClockIcon />
                <span>
                  {openingHours
                    .filter((item) => !item.closed)
                    .map((item) => `${item.days}: ${item.hours}`)
                    .join(' · ')}
                </span>
              </li>
              <li className="booking__aside-item">
                <PhoneIcon />
                <span>
                  {/* TODO: substituir pelo dado real (telefone) */}
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </span>
              </li>
              <li className="booking__aside-item">
                <WhatsAppIcon />
                <span>
                  {/* TODO: substituir pelo dado real (WhatsApp) */}
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsappLabel}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <form className="form reveal" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form__row">
              <div className="form__field">
                <label className="form__label" htmlFor="campo-nome">
                  Nome completo
                </label>
                <input
                  id="campo-nome"
                  name="nome"
                  type="text"
                  className="form__control"
                  autoComplete="name"
                  value={values.nome}
                  onChange={update('nome')}
                  aria-invalid={errors.nome ? 'true' : undefined}
                  aria-describedby={errors.nome ? 'erro-nome' : undefined}
                  required
                />
                {errors.nome && (
                  <p className="form__error" id="erro-nome">
                    {errors.nome}
                  </p>
                )}
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="campo-telefone">
                  Telefone / WhatsApp
                </label>
                <input
                  id="campo-telefone"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  className="form__control"
                  autoComplete="tel"
                  placeholder="(11) 99999-0000"
                  value={values.telefone}
                  onChange={update('telefone')}
                  aria-invalid={errors.telefone ? 'true' : undefined}
                  aria-describedby={errors.telefone ? 'erro-telefone' : undefined}
                  required
                />
                {errors.telefone && (
                  <p className="form__error" id="erro-telefone">
                    {errors.telefone}
                  </p>
                )}
              </div>
            </div>

            <div className="form__row">
              <div className="form__field">
                <label className="form__label" htmlFor="campo-servico">
                  Serviço de interesse{' '}
                  <span className="form__optional">(opcional)</span>
                </label>
                <select
                  id="campo-servico"
                  name="servico"
                  className="form__control"
                  value={values.servico}
                  onChange={update('servico')}
                >
                  <option value="">Ainda não sei / avaliação geral</option>
                  {/* agrupado pelas duas linhas de tratamento */}
                  {treatmentGroups.map((group) => (
                    <optgroup label={group.label} key={group.id}>
                      {group.items.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="campo-data">
                  Data preferida <span className="form__optional">(opcional)</span>
                </label>
                <input
                  id="campo-data"
                  name="data"
                  type="date"
                  className="form__control"
                  min={today}
                  value={values.data}
                  onChange={update('data')}
                  aria-describedby="ajuda-data"
                />
                <p className="form__hint" id="ajuda-data">
                  A confirmação depende da agenda do consultório.
                </p>
              </div>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="campo-mensagem">
                Mensagem <span className="form__optional">(opcional)</span>
              </label>
              <textarea
                id="campo-mensagem"
                name="mensagem"
                className="form__control"
                rows={4}
                value={values.mensagem}
                onChange={update('mensagem')}
              />
            </div>

            <div className="form__footer">
              <button type="submit" className="btn btn--primary btn--block">
                <WhatsAppIcon />
                Enviar pelo WhatsApp
              </button>

              <p className="form__note">{booking.note}</p>

              {/* região viva sempre montada, mas só ganha caixa quando há aviso */}
              <p className={sent ? 'form__status' : 'visually-hidden'} role="status">
                {sent && (
                  <>
                    <CheckIcon />
                    <span>
                      Mensagem aberta no WhatsApp. Se a aba não abrir, verifique o bloqueio de
                      pop-ups do navegador.
                    </span>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
