/* ==========================================================================
   Fonte única de conteúdo do site.
   Toda troca de texto, contato, tratamento ou horário acontece AQUI —
   nenhum componente precisa ser editado para atualizar informação.

   Os itens marcados com "TODO: substituir pelo dado real" são placeholders
   e precisam ser trocados pelos dados definitivos antes de o site ir ao ar.

   Sobre a copy: o Código de Ética Odontológica proíbe superlativos,
   comparações, anúncio de preço como promoção e promessa de resultado —
   e veda imagens de "antes e depois" na divulgação. Os textos falam em
   avaliação, planejamento e acompanhamento, nunca em garantia. Ao editar,
   mantenha esse critério.
   ========================================================================== */

import portrait from '../assets/dra-kristina-guimaraes.webp'

export const profile = {
  name: 'Dra. Kristina Guimarães',
  brandTagline: 'Estética, saúde e beleza',
  role: 'Cirurgiã-dentista',
  /* TODO: confirmar as especialidades e a formação antes de publicar.
     Se alguma delas não tiver registro no CRO, troque "Especialista em X"
     por "Atuação em X" no campo abaixo — a palavra "especialista" só pode
     ser usada com o registro correspondente. */
  specialties: 'Implantodontia e Harmonização Orofacial',
  roleFull: 'Cirurgiã-dentista · Implantodontia e Harmonização Orofacial',
  // TODO: substituir pelo dado real
  cro: 'CRO-SP 00000',
  /* TODO: substituir pelo dado real.
     Anunciar-se como especialista exige registro da especialidade no CRO, e o
     número precisa aparecer junto ao CRO sempre que a palavra "especialista"
     for usada — inclusive no rodapé. */
  specialtyRegistration: 'Registro de especialidade CRO-SP 0000',
  headline: 'Implantes e harmonização orofacial com planejamento e acompanhamento',
  subheadline:
    'Atendimento em Mogi das Cruzes para quem quer repor dentes perdidos ou tratar os sinais do envelhecimento facial. Cada plano começa por avaliação e é apresentado por escrito, etapa por etapa.',
}

export const contact = {
  // TODO: substituir pelo dado real
  phone: '(11) 4444-0000',
  // TODO: substituir pelo dado real
  phoneHref: 'tel:+551144440000',
  // TODO: substituir pelo dado real (número no formato internacional, só dígitos)
  whatsapp: '5511999990000',
  // TODO: substituir pelo dado real
  whatsappLabel: '(11) 99999-0000',
  // TODO: substituir pelo dado real
  instagram: '@dra.kristinaguimaraes',
  // TODO: substituir pelo dado real
  instagramUrl: 'https://www.instagram.com/dra.kristinaguimaraes',
  // TODO: substituir pelo dado real
  email: 'contato@kristinaguimaraes.com.br',
}

/* TODO: confirmar o endereço.
   Este endereço foi informado no início do projeto, quando o site tinha
   outro titular. Confirmar se é o mesmo consultório antes de publicar. */
export const address = {
  street: 'R. Dr. Deodato Wertheimer, 1605',
  district: 'Centro',
  city: 'Mogi das Cruzes',
  state: 'SP',
  zip: '08710-430',
  full: 'R. Dr. Deodato Wertheimer, 1605 - Centro, Mogi das Cruzes - SP, 08710-430',
  short: 'Centro, Mogi das Cruzes - SP',
  mapEmbedUrl:
    'https://www.google.com/maps?q=R.+Dr.+Deodato+Wertheimer,+1605+-+Centro,+Mogi+das+Cruzes+-+SP,+08710-430&output=embed',
  mapLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Dr.+Deodato+Wertheimer,+1605+-+Centro,+Mogi+das+Cruzes+-+SP,+08710-430',
}

export const openingHours = [
  { days: 'Segunda a sexta', hours: '8h às 18h' },
  { days: 'Sábado', hours: '8h às 12h' },
  { days: 'Domingo e feriados', hours: 'Fechado', closed: true },
]

export const openingHoursShort = 'Seg a sex, 8h–18h · Sáb, 8h–12h'

/* O menu do topo fica em 6 itens de propósito: a partir de 7 ele não cabe
   na faixa de 768px sem encolher demais. As demais seções continuam
   acessíveis pela rolagem e pelo rodapé. */
export const navLinks = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'tratamentos', label: 'Tratamentos', href: '#tratamentos' },
  { id: 'sinais', label: 'Envelhecimento', href: '#sinais' },
  { id: 'etapas', label: 'Etapas', href: '#etapas' },
  { id: 'contato', label: 'Contato', href: '#contato' },
]

/* Links extras que só aparecem no rodapé. */
export const footerExtraLinks = [
  { id: 'depoimentos', label: 'Depoimentos', href: '#depoimentos' },
  { id: 'galeria', label: 'Galeria', href: '#galeria' },
  { id: 'duvidas', label: 'Dúvidas frequentes', href: '#duvidas' },
  { id: 'agendamento', label: 'Agendar avaliação', href: '#agendamento' },
]

export const about = {
  eyebrow: 'Sobre a profissional',
  title: 'Duas frentes de trabalho, o mesmo método de atendimento',
  paragraphs: [
    'Kristina Guimarães é cirurgiã-dentista com atuação em Implantodontia e Harmonização Orofacial. São duas frentes que se encontram no mesmo lugar: a boca e o terço inferior da face, onde a perda de dentes e a perda de sustentação dos tecidos aparecem juntas com frequência.',
    'O atendimento segue sempre a mesma sequência: avaliação clínica, exames de imagem quando o caso pede, e um plano por escrito com etapas, prazos estimados e os cuidados que ficam sob responsabilidade do paciente. Nada é iniciado antes dessa conversa.',
    'Quem chega com receio — de cirurgia, de agulha ou de um resultado que não pareça consigo mesmo — encontra um ritmo adaptado: explicação de cada passo antes de executá-lo, doses e etapas conservadoras, e retornos programados para avaliar como o tecido respondeu.',
  ],
  /* Retrato da profissional. As dimensões originais (622x886) ficam
     declaradas para o navegador reservar o espaço e não deslocar o layout. */
  photo: portrait,
  photoWidth: 622,
  photoHeight: 886,
  photoAlt: 'Dra. Kristina Guimarães, cirurgiã-dentista, sorrindo, de blazer claro',
  differentials: [
    {
      title: 'Avaliação antes do plano',
      text: 'Nenhum procedimento é indicado sem exame clínico e, quando o caso pede, exame de imagem.',
    },
    {
      title: 'Plano de tratamento por escrito',
      text: 'Etapas, prazos estimados e cuidados entregues em documento, para consulta a qualquer momento.',
    },
    {
      title: 'Condutas conservadoras',
      text: 'Doses e etapas dosadas com cautela, com reavaliação antes de qualquer complemento.',
    },
    {
      title: 'Acompanhamento programado',
      text: 'Retornos marcados e canal direto para dúvidas nos primeiros dias após o procedimento.',
    },
  ],
}

/* --------------------------------------------------------------------------
   Tratamentos, em dois grupos. O site atende duas linhas que compartilham a
   mesma avaliação inicial, então elas convivem na mesma seção em vez de
   disputarem espaço no menu.
   -------------------------------------------------------------------------- */
export const treatmentGroups = [
  {
    id: 'implantes',
    label: 'Implantes e reabilitação',
    description:
      'Reposição de dentes perdidos, com a posição de cada implante estudada em tomografia antes da cirurgia.',
    items: [
      {
        id: 'implante-unitario',
        icon: 'implant',
        name: 'Implante unitário',
        description: 'Reposição de um dente perdido sem desgastar os dentes vizinhos.',
      },
      {
        id: 'implantes-multiplos',
        icon: 'multi',
        name: 'Implantes múltiplos',
        description: 'Reabilitação de vários dentes ausentes na mesma arcada.',
      },
      {
        id: 'protocolo',
        icon: 'arch',
        name: 'Protocolo de arcada completa',
        description: 'Prótese fixa sobre implantes para quem perdeu todos os dentes de uma arcada.',
      },
      {
        id: 'carga-imediata',
        icon: 'fast',
        name: 'Carga imediata',
        description: 'Dente provisório instalado logo após a cirurgia, quando o caso permite.',
      },
      {
        id: 'enxerto',
        icon: 'bone',
        name: 'Enxerto ósseo e levantamento de seio',
        description: 'Preparo do osso quando o volume disponível ainda não comporta o implante.',
      },
      {
        id: 'protese-sobre-implante',
        icon: 'crown',
        name: 'Prótese sobre implante',
        description: 'Coroa ou prótese definitiva ajustada à mordida e ao contorno da gengiva.',
      },
      {
        id: 'planejamento-digital',
        icon: 'scan',
        name: 'Planejamento digital e tomografia',
        description: 'Estudo em imagem 3D da posição, do ângulo e do tamanho de cada implante.',
      },
      {
        id: 'manutencao',
        icon: 'shield',
        name: 'Manutenção peri-implantar',
        description: 'Limpeza e controle periódico da gengiva e do osso ao redor dos implantes.',
      },
    ],
  },
  {
    id: 'harmonizacao',
    label: 'Harmonização orofacial',
    description:
      'Tratamento dos sinais de envelhecimento e do equilíbrio das proporções da face, em etapas e com reavaliação.',
    items: [
      {
        id: 'toxina',
        icon: 'lines',
        name: 'Toxina botulínica',
        description: 'Suavização das linhas de expressão da testa, glabela e região dos olhos.',
      },
      {
        id: 'labial',
        icon: 'lips',
        name: 'Preenchimento labial',
        description: 'Reposição de volume e definição do contorno, respeitando a proporção do rosto.',
      },
      {
        id: 'sulcos',
        icon: 'eye',
        name: 'Preenchimento de sulcos e olheiras',
        description: 'Tratamento do sulco nasogeniano e da região abaixo dos olhos.',
      },
      {
        id: 'contorno',
        icon: 'jaw',
        name: 'Contorno facial e mandibular',
        description: 'Sustentação da maçã do rosto e definição da linha da mandíbula.',
      },
      {
        id: 'bioestimulador',
        icon: 'collagen',
        name: 'Bioestimulador de colágeno',
        description: 'Estímulo à produção de colágeno para melhorar a firmeza da pele ao longo do tempo.',
      },
      {
        id: 'planejamento-facial',
        icon: 'faceplan',
        name: 'Avaliação e planejamento facial',
        description: 'Análise das proporções da face e definição das etapas antes de qualquer aplicação.',
      },
    ],
  },
]

/* Lista plana, usada pelo select do formulário de agendamento. */
export const services = treatmentGroups.flatMap((group) => group.items)

/* --------------------------------------------------------------------------
   Sinais do envelhecimento facial. Substitui a imagem de "antes e depois" —
   vedada na divulgação odontológica — por conteúdo informativo com
   ilustração autoral, sem foto de paciente.
   -------------------------------------------------------------------------- */
export const agingSigns = [
  {
    id: 's1',
    name: 'Perda de volume temporal',
    text: 'A região das têmporas afunda e a testa perde o apoio lateral, o que estreita o terço superior.',
  },
  {
    id: 's2',
    name: 'Queda da pálpebra',
    text: 'A pele da pálpebra superior relaxa e o olhar passa a parecer mais pesado e cansado.',
  },
  {
    id: 's3',
    name: 'Queda da maçã do rosto',
    text: 'A gordura da bochecha desce, esvaziando o terço médio e acentuando a região abaixo dos olhos.',
  },
  {
    id: 's4',
    name: 'Perda do contorno facial',
    text: 'O contorno lateral perde definição à medida que os tecidos migram para baixo.',
  },
  {
    id: 's5',
    name: 'Aprofundamento do sulco nasogeniano',
    text: 'A dobra entre a asa do nariz e o canto da boca fica mais marcada.',
  },
  {
    id: 's6',
    name: 'Perda de volume dos lábios',
    text: 'Os lábios afinam, o contorno perde nitidez e os cantos da boca tendem a descer.',
  },
  {
    id: 's7',
    name: 'Queda do contorno mandibular',
    text: 'A linha da mandíbula perde definição e a flacidez se acumula no ângulo do maxilar.',
  },
]

/* --------------------------------------------------------------------------
   Etapas do atendimento. Aqui a numeração faz sentido: é uma sequência, e não
   uma grade de itens equivalentes como a de tratamentos. O texto cobre as
   duas linhas de trabalho.
   -------------------------------------------------------------------------- */
export const processSteps = [
  {
    id: 'e1',
    title: 'Avaliação e diagnóstico',
    text: 'Exame clínico, histórico de saúde e análise das proporções da face. Nos casos de implante, tomografia computadorizada para medir o osso disponível.',
    duration: '1 consulta',
  },
  {
    id: 'e2',
    title: 'Planejamento',
    text: 'O plano é apresentado por escrito, com etapas e prazos estimados. Nos implantes, a posição de cada um é definida sobre a imagem 3D.',
    duration: '1 consulta',
  },
  {
    id: 'e3',
    title: 'Procedimento',
    text: 'Cirurgia de implante ou sessão de harmonização, com anestesia local e orientações de cuidado entregues na saída.',
    duration: 'Sessão',
  },
  {
    id: 'e4',
    title: 'Cicatrização e retorno',
    text: 'Retornos programados para avaliar a resposta do tecido. Nos implantes, é o período de osseointegração, que varia conforme o caso.',
    duration: 'Dias a meses',
  },
  {
    id: 'e5',
    title: 'Conclusão',
    text: 'Instalação da prótese definitiva nos implantes; na harmonização, reavaliação do resultado e eventuais complementos.',
    duration: 'Algumas consultas',
  },
  {
    id: 'e6',
    title: 'Manutenção',
    text: 'Controles periódicos. Nos implantes, a saúde da gengiva e do osso; na harmonização, o intervalo de reaplicação de cada material.',
    duration: 'Contínua',
  },
]

/* --------------------------------------------------------------------------
   Dúvidas frequentes: as perguntas que mais aparecem antes da primeira
   consulta, nas duas linhas. As respostas não prometem resultado e sempre
   remetem à avaliação individual.
   -------------------------------------------------------------------------- */
export const faq = [
  {
    id: 'f1',
    question: 'A cirurgia de implante dói?',
    answer:
      'O procedimento é feito com anestesia local, então não há dor durante a cirurgia. No pós-operatório é comum haver desconforto e inchaço por alguns dias, controlados com a medicação prescrita e com as orientações entregues na consulta.',
  },
  {
    id: 'f2',
    question: 'Quanto tempo leva o tratamento com implante?',
    answer:
      'Depende do caso. Entre a cirurgia e a prótese definitiva há o período de osseointegração, que varia conforme a região da boca, a qualidade do osso e a necessidade de enxerto. A estimativa do seu caso é apresentada no plano, depois da tomografia.',
  },
  {
    id: 'f3',
    question: 'Tenho pouco osso. Ainda posso fazer implante?',
    answer:
      'Em muitos casos sim, com preparo prévio da região — enxerto ósseo ou levantamento de seio maxilar, por exemplo. A tomografia é o que mostra o volume disponível e indica se o preparo é necessário antes da instalação.',
  },
  {
    id: 'f4',
    question: 'Vou ficar sem dentes durante o tratamento?',
    answer:
      'Na maior parte dos casos é possível usar um provisório durante a cicatrização, fixo ou removível. Em situações específicas o dente provisório pode ser instalado logo após a cirurgia — é a carga imediata, avaliada caso a caso.',
  },
  {
    id: 'f5',
    question: 'A harmonização deixa o rosto com aparência artificial?',
    answer:
      'A conduta aqui é conservadora: etapas dosadas, reavaliação entre elas e complemento só quando necessário. O planejamento parte das proporções do seu próprio rosto, e não de um padrão pronto. Ainda assim, cada organismo responde de um jeito, e isso é conversado antes.',
  },
  {
    id: 'f6',
    question: 'Quanto tempo dura um preenchimento?',
    answer:
      'Varia conforme o material, a região aplicada e o metabolismo de cada pessoa. Na avaliação é informado o intervalo médio de manutenção do produto indicado para o seu caso, junto com o que costuma acelerar a absorção.',
  },
  {
    id: 'f7',
    question: 'Sou fumante ou tenho diabetes. Isso impede o tratamento?',
    answer:
      'Não impede automaticamente, mas são fatores que influenciam a cicatrização e entram na avaliação. Diabetes controlado e redução do tabagismo no período de cicatrização fazem diferença, e isso é conversado antes de o plano ser fechado.',
  },
  {
    id: 'f8',
    question: 'Quanto custa e como funciona o pagamento?',
    answer:
      'O valor depende do que a avaliação indicar — quantidade de implantes, necessidade de enxerto, tipo de prótese ou material de preenchimento. As condições de pagamento são apresentadas junto com o plano de tratamento, sem compromisso.',
  },
]

/* Depoimentos ilustrativos, com nome fictício e inicial — sem dados de
   pacientes reais. Substituir por depoimentos autorizados quando houver.
   Atenção: depoimento é permitido; imagem de "antes e depois", não. */
export const testimonials = [
  {
    id: 't1',
    quote:
      'Perdi um molar há anos e adiava por medo da cirurgia. A Dra. Kristina mostrou a tomografia na tela, explicou onde o implante entraria e o que eu sentiria em cada fase. Foi bem mais tranquilo do que eu imaginava.',
    author: 'Renata M.',
    context: 'Implante unitário',
  },
  {
    id: 't2',
    quote:
      'Usei prótese removível por doze anos. Recebi o plano por escrito, com as etapas e o prazo de cada uma, e soube exatamente o que esperar em cada consulta.',
    author: 'Carlos E.',
    context: 'Protocolo de arcada completa',
  },
  {
    id: 't3',
    quote:
      'Meu medo era sair com o rosto diferente do meu. Ela aplicou pouco de cada vez, me chamou para reavaliar e só complementou depois que eu me acostumei. O ritmo foi meu.',
    author: 'Juliana P.',
    context: 'Harmonização orofacial',
  },
  {
    id: 't4',
    quote:
      'Fui por causa das linhas da testa e saí entendendo o rosto inteiro. Recebi a explicação de cada região antes de decidir o que tratar agora e o que deixar para depois.',
    author: 'Marcos A.',
    context: 'Toxina botulínica',
  },
]

/* Galeria — placeholders. Substituir pelas fotos reais do consultório.
   Fotos de pacientes não entram aqui. */
export const gallery = [
  {
    id: 'g1',
    caption: 'Recepção',
    alt: 'Recepção do consultório, com balcão de atendimento e poltronas de espera',
  },
  {
    id: 'g2',
    caption: 'Sala de espera',
    alt: 'Sala de espera com iluminação natural e assentos confortáveis',
  },
  {
    id: 'g3',
    caption: 'Sala de procedimentos',
    alt: 'Sala preparada para procedimento, com cadeira e instrumental montados',
  },
  {
    id: 'g4',
    caption: 'Tomografia',
    alt: 'Equipamento de tomografia computadorizada usado no planejamento dos implantes',
  },
  {
    id: 'g5',
    caption: 'Esterilização',
    alt: 'Área de esterilização com autoclave e instrumental organizado',
  },
  { id: 'g6', caption: 'Fachada', alt: 'Fachada do consultório' },
]

/* --------------------------------------------------------------------------
   Cabeçalhos de seção, centralizados para edição sem mexer em JSX.
   -------------------------------------------------------------------------- */
export const sections = {
  services: {
    eyebrow: 'Tratamentos',
    title: 'O que é possível tratar no consultório',
    lead: 'A indicação de cada procedimento vem da avaliação clínica e, quando o caso pede, do exame de imagem. Nenhum plano é fechado antes disso.',
    note: 'Não sabe em qual caso você se encaixa? Descreva sua situação no agendamento — a avaliação define o caminho.',
  },
  aging: {
    eyebrow: 'Envelhecimento facial',
    title: 'Os sete sinais que a harmonização trata',
    lead: 'O envelhecimento da face não acontece em um ponto só: é uma perda de sustentação que aparece em regiões diferentes, em ritmos diferentes. Entender onde cada uma está ajuda a decidir o que tratar primeiro.',
    note: 'A ilustração é esquemática e serve para localizar as regiões. Quais sinais estão presentes no seu caso, e em que grau, só a avaliação presencial define.',
    diagramTitle: 'Ilustração esquemática de um rosto com as sete regiões numeradas',
  },
  process: {
    eyebrow: 'Como funciona',
    title: 'Da avaliação à manutenção',
    lead: 'Implante e harmonização seguem a mesma lógica de atendimento: avaliar, planejar por escrito, executar em etapas e acompanhar.',
  },
  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que os pacientes contam',
    disclaimer:
      'Depoimentos ilustrativos, publicados com nome abreviado. Cada caso é avaliado individualmente e a evolução varia conforme a condição de saúde de cada paciente.',
  },
  gallery: {
    eyebrow: 'Galeria',
    title: 'Conheça a estrutura antes da primeira visita',
    lead: 'Saber onde a avaliação e os procedimentos acontecem ajuda a chegar mais tranquilo no dia da consulta.',
  },
  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'O que as pessoas perguntam antes de começar',
    lead: 'Respostas gerais, para orientar. A conduta do seu caso depende da avaliação presencial.',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Onde fica e como falar com o consultório',
  },
}

export const booking = {
  eyebrow: 'Agendamento',
  title: 'Agende sua avaliação',
  text: 'Preencha os campos abaixo e a mensagem será aberta no WhatsApp já preenchida, pronta para enviar. O retorno acontece dentro do horário de funcionamento do consultório.',
  note: 'Este formulário não envia dados para nenhum servidor: ele apenas monta a mensagem no seu WhatsApp.',
}
