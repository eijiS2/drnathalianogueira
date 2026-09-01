/* ==========================================================================
   Ícones em SVG inline, expostos como componentes React.
   Todos são decorativos por padrão (aria-hidden) — o significado sempre vem
   do texto ou do aria-label do elemento que os contém.
   ========================================================================== */

const base = {
  'aria-hidden': 'true',
  focusable: 'false',
  xmlns: 'http://www.w3.org/2000/svg',
}

/* --------------------------------------------------------------------------
   Elemento-assinatura: traço curvo fino inspirado no arco de um sorriso.
   Usado em três pontos do site (nome no header/hero, divisor entre seções e
   ornamento atrás da foto da seção Sobre). Não é um ícone de dente — é a
   única marca gráfica autoral do layout.
   -------------------------------------------------------------------------- */
export function SignatureStroke({ className = '', variant = 'line' }) {
  // "line": arco simples sob o nome. "divider": arco mais largo e raso.
  const d =
    variant === 'divider'
      ? 'M2 10C60 26 180 26 238 10'
      : 'M2 8C30 20 90 20 118 8'
  const viewBox = variant === 'divider' ? '0 0 240 28' : '0 0 120 24'

  return (
    <svg {...base} className={`signature ${className}`} viewBox={viewBox} preserveAspectRatio="none">
      <path
        className="signature__path"
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={variant === 'divider' ? 2 : 2.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Arco decorativo, em escala maior, usado atrás da foto na seção Sobre. */
export function SignatureArc({ className = '' }) {
  return (
    <svg {...base} className={className} viewBox="0 0 320 320">
      <path
        d="M18 176C50 268 270 268 302 176"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M52 118C86 44 234 44 268 118"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

/* --------------------------------------------------------------------------
   Ícones de serviços
   -------------------------------------------------------------------------- */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function ClinicIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M16 27c-3.2-2.4-5-6-5.4-10.2" />
      <path {...stroke} d="M16 27c3.2-2.4 5-6 5.4-10.2" />
      <path {...stroke} d="M5 15.5C5 9.7 8.6 6 13 6c1.4 0 2.3.5 3 .9.7-.4 1.6-.9 3-.9 4.4 0 8 3.7 8 9.5" />
      <path {...stroke} d="M13 12.5h6M16 9.5v6" />
    </svg>
  )
}

function SparkleIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M13 4.5l1.9 5.6 5.6 1.9-5.6 1.9L13 19.5l-1.9-5.6L5.5 12l5.6-1.9z" />
      <path {...stroke} d="M23 17l1.1 3.1 3.1 1.1-3.1 1.1L23 25.4l-1.1-3.1-3.1-1.1 3.1-1.1z" />
    </svg>
  )
}

function AlignIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M4 16h24" />
      <rect {...stroke} x="6" y="9" width="6" height="7" rx="1.6" />
      <rect {...stroke} x="14" y="7" width="6" height="9" rx="1.6" />
      <rect {...stroke} x="22" y="10" width="5" height="6" rx="1.6" />
      <rect {...stroke} x="9" y="16" width="6" height="7" rx="1.6" />
      <rect {...stroke} x="17" y="16" width="7" height="8" rx="1.6" />
    </svg>
  )
}

function ImplantIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M10 11.5C10 8 12.7 5.5 16 5.5S22 8 22 11.5c0 1.6-.7 2.8-1.6 3.5h-8.8c-.9-.7-1.6-1.9-1.6-3.5z" />
      <path {...stroke} d="M16 15v11.5" />
      <path {...stroke} d="M12.6 17.5h6.8M12.9 20.5h6.2M13.4 23.5h5.2" />
    </svg>
  )
}

function CrownIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M6 20l-1.5-9 5 3.5L16 6l6.5 8.5 5-3.5L26 20z" />
      <path {...stroke} d="M6.6 24h18.8" />
    </svg>
  )
}

function ChildIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <circle {...stroke} cx="16" cy="13" r="8" />
      <path {...stroke} d="M12.5 15.5c1.6 2.6 5.4 2.6 7 0" />
      <path {...stroke} d="M13 10.5h.01M19 10.5h.01" />
      <path {...stroke} d="M9 24.5c1.8 1.6 4.3 2.5 7 2.5s5.2-.9 7-2.5" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M16 4.5l9 3.2v8c0 5.4-3.7 9.6-9 11.8-5.3-2.2-9-6.4-9-11.8v-8z" />
      <path {...stroke} d="M11.8 15.6l3 3 5.4-5.6" />
    </svg>
  )
}

function RootIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M7.5 12.5C7.5 8.4 11 5.5 16 5.5s8.5 2.9 8.5 7c0 2-.6 3.3-1.4 4.2" />
      <path {...stroke} d="M12.6 16.5L11 26.5M19.4 16.5L21 26.5" />
      <path {...stroke} d="M16 11v9" />
    </svg>
  )
}

/* Dois implantes lado a lado: reabilitação de mais de um dente. */
function MultiIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M5.5 11.5c0-2.6 2-4.6 4.5-4.6s4.5 2 4.5 4.6c0 1.2-.5 2.1-1.2 2.6H6.7c-.7-.5-1.2-1.4-1.2-2.6z" />
      <path {...stroke} d="M10 14.1v11M7.6 17.4h4.8M7.9 20.4h4.2M8.3 23.4h3.4" />
      <path {...stroke} d="M17.5 11.5c0-2.6 2-4.6 4.5-4.6s4.5 2 4.5 4.6c0 1.2-.5 2.1-1.2 2.6h-6.6c-.7-.5-1.2-1.4-1.2-2.6z" />
      <path {...stroke} d="M22 14.1v11M19.6 17.4h4.8M19.9 20.4h4.2M20.3 23.4h3.4" />
    </svg>
  )
}

/* Arcada completa apoiada sobre implantes. */
function ArchIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M4.5 12.5c0-4.4 5.1-7.5 11.5-7.5s11.5 3.1 11.5 7.5c0 2-1 3.4-2.2 4.2H6.7c-1.2-.8-2.2-2.2-2.2-4.2z" />
      <path {...stroke} d="M10.5 17.2v8.3M16 17.2v9.3M21.5 17.2v8.3" />
      <path {...stroke} d="M8.7 21h3.6M14.2 21h3.6M19.7 21h3.6" />
    </svg>
  )
}

/* Carga imediata: o provisório no mesmo dia. */
function FastIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <circle {...stroke} cx="16" cy="16" r="10.5" />
      <path {...stroke} d="M16 9.5V16l4.4 2.6" />
      <path {...stroke} d="M25.5 6.5L28 4M6.5 25.5L4 28" />
    </svg>
  )
}

/* Enxerto: preparo do volume ósseo. */
function BoneIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path
        {...stroke}
        d="M9.6 22.4l12.8-12.8M8.4 17.6a3.2 3.2 0 1 1 4.5-4.5l6.1 6.1a3.2 3.2 0 1 1-4.5 4.5z"
      />
      <path {...stroke} d="M19.1 8.6a3 3 0 1 1 4.3 4.3" />
      <path {...stroke} d="M23.4 12.9a3 3 0 1 1-4.3-4.3" />
    </svg>
  )
}

/* Tomografia e planejamento digital. */
function ScanIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M4.5 10.5v-3a3 3 0 0 1 3-3h3M27.5 10.5v-3a3 3 0 0 0-3-3h-3M4.5 21.5v3a3 3 0 0 0 3 3h3M27.5 21.5v3a3 3 0 0 1-3 3h-3" />
      <path {...stroke} d="M10 19.5c-.6-1.7-1-3.4-1-5C9 11.5 12 9 16 9s7 2.5 7 5.5c0 1.6-.4 3.3-1 5" />
      <path {...stroke} d="M13 21.5l.6-3.5M19 21.5l-.6-3.5M16 12.5v6" />
    </svg>
  )
}

/* --- Harmonização orofacial -------------------------------------------- */

/* Linhas de expressão. */
function LinesIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M7 9.5c2.6-1.2 5.4-1.2 8 0M7 14c2.6-1.2 5.4-1.2 8 0" />
      <path {...stroke} d="M19.5 11.8c2.4-.9 4.6-.6 6.5.7" />
      <path {...stroke} d="M6.5 21.5c4.6-2.2 14.4-2.2 19 0" opacity="0.5" />
      <path {...stroke} d="M9 26c3.4-1.4 10.6-1.4 14 0" opacity="0.35" />
    </svg>
  )
}

/* Lábios. */
function LipsIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M4 16c3-4.6 6.2-6.4 8.4-5.2 1.5.8 2.6 1.9 3.6 1.9s2.1-1.1 3.6-1.9C21.8 9.6 25 11.4 28 16" />
      <path {...stroke} d="M4 16c3 4.8 8 7.2 12 7.2S25 20.8 28 16" />
      <path {...stroke} d="M4 16h24" opacity="0.55" />
    </svg>
  )
}

/* Região dos olhos e sulcos. */
function EyeIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M3.5 14.5C7 10 11.4 7.8 16 7.8s9 2.2 12.5 6.7c-3.5 4.5-7.9 6.7-12.5 6.7S7 19 3.5 14.5z" />
      <circle {...stroke} cx="16" cy="14.5" r="3.6" />
      <path {...stroke} d="M9 25.5c4.2-1.6 9.8-1.6 14 0" opacity="0.5" />
    </svg>
  )
}

/* Contorno mandibular. */
function JawIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M7 6.5v8.8c0 5.2 4 9.4 9 9.4s9-4.2 9-9.4V6.5" />
      <path {...stroke} d="M7 12.5c2.4-1.4 5.4-2.1 9-2.1s6.6.7 9 2.1" opacity="0.5" />
      <path {...stroke} d="M12.5 27.5h7" />
    </svg>
  )
}

/* Bioestimulador: malha de colágeno. */
function CollagenIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M6 11.5l10-5.5 10 5.5v9L16 26 6 20.5z" />
      <path {...stroke} d="M16 6v20M6 11.5l10 5.5 10-5.5" opacity="0.55" />
    </svg>
  )
}

/* Planejamento facial: proporções da face. */
function FacePlanIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 32 32">
      <path {...stroke} d="M8 9c0-2.8 3.6-4.8 8-4.8s8 2 8 4.8v6.6c0 6-3.6 11.4-8 11.4S8 21.6 8 15.6z" />
      <path {...stroke} d="M4 11.5h4M24 11.5h4M4 18.5h4M24 18.5h4" opacity="0.6" />
      <path {...stroke} d="M16 4.2v22.8" opacity="0.45" strokeDasharray="2 3" />
    </svg>
  )
}

const serviceIcons = {
  clinic: ClinicIcon,
  sparkle: SparkleIcon,
  align: AlignIcon,
  implant: ImplantIcon,
  crown: CrownIcon,
  child: ChildIcon,
  shield: ShieldIcon,
  root: RootIcon,
  multi: MultiIcon,
  arch: ArchIcon,
  fast: FastIcon,
  bone: BoneIcon,
  scan: ScanIcon,
  lines: LinesIcon,
  lips: LipsIcon,
  eye: EyeIcon,
  jaw: JawIcon,
  collagen: CollagenIcon,
  faceplan: FacePlanIcon,
}

export function ServiceIcon({ name, ...props }) {
  const Component = serviceIcons[name] || ClinicIcon
  return <Component {...props} />
}

/* --------------------------------------------------------------------------
   Ícones de interface e contato
   -------------------------------------------------------------------------- */

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2m0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.26-4.32c0-4.46 3.63-8.1 8.09-8.1m-3.5 4.3c-.16 0-.42.06-.65.3-.22.25-.85.84-.85 2.03s.87 2.35.99 2.51c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.25-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.19-.46-.39-.4-.54-.41z"
      />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <rect {...stroke} x="3" y="3" width="18" height="18" rx="5" />
      <circle {...stroke} cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path
        {...stroke}
        d="M6.6 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"
      />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" />
      <path {...stroke} d="M3.8 6.8L12 12.6l8.2-5.8" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} d="M12 21.5c4-4.3 6.5-7.5 6.5-11a6.5 6.5 0 1 0-13 0c0 3.5 2.5 6.7 6.5 11z" />
      <circle {...stroke} cx="12" cy="10.3" r="2.5" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <circle {...stroke} cx="12" cy="12" r="8.5" />
      <path {...stroke} d="M12 7.2V12l3.2 2" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  )
}

export function ChevronIcon({ direction = 'right', ...props }) {
  const d = direction === 'left' ? 'M15 5.5L8.5 12l6.5 6.5' : 'M9 5.5l6.5 6.5L9 18.5'
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} strokeWidth="2" d={d} />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function MenuIcon({ open = false, ...props }) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      {open ? (
        <path {...stroke} strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path {...stroke} strokeWidth="2" d="M4 8h16M4 16h16" />
      )}
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} strokeWidth="2" d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function ExpandIcon(props) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24">
      <path {...stroke} strokeWidth="1.8" d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
    </svg>
  )
}
