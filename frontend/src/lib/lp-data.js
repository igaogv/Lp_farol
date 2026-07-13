// Content constants for the Farol Novo Pro landing page.
// Text is in Brazilian Portuguese and reviewed for correctness.

export const BRAND = {
  name: "Curso de Restauração de Faróis",
  short: "Restauração de Faróis",
  tagline: "Do farol amarelado ao acabamento profissional.",
  price: "R$ 69,90",
  priceFrom: "R$ 197",
  currency: "R$",
  phoneDisplay: "+55 (19) 99954-4387",
};

const WHATSAPP_NUMBER = "5519999544387";

const buildWppLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_CHECKOUT = buildWppLink(
  "Olá! Vi a página do Curso de Restauração de Faróis e quero garantir minha vaga por R$ 69,90 com a garantia de 7 dias. Pode me passar o link do pagamento? 🚗✨"
);

export const WHATSAPP_SUPPORT = buildWppLink(
  "Olá! Preciso de suporte 24h sobre o Curso de Restauração de Faróis."
);

export const IMAGES = {
  heroGlow:
    "https://images.unsplash.com/photo-1578245600656-e8fe67a2b5f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxjYXIlMjBoZWFkbGlnaHQlMjBnbG93aW5nJTIwbmlnaHR8ZW58MHx8fHwxNzgzMzQyODM5fDA&ixlib=rb-4.1.0&q=85",
  sportsCar:
    "https://images.unsplash.com/photo-1730742298439-6d82f9edc3c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxzcG9ydHMlMjBjYXIlMjBoZWFkbGlnaHR8ZW58MHx8fHwxNzgzMzQyODM5fDA&ixlib=rb-4.1.0&q=85",
  polishing:
    "https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxhdXRvJTIwZGV0YWlsaW5nJTIwcG9saXNoaW5nfGVufDB8fHx8MTc4MzM0MjgzOXww&ixlib=rb-4.1.0&q=85",
  materials:
    "https://images.unsplash.com/photo-1599256630445-67b5772b1204?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxtZWNoYW5pYyUyMHdvcmtzaG9wfGVufDB8fHx8MTc4MzM0MjgzOXww&ixlib=rb-4.1.0&q=85",
};

export const PROBLEM_CARDS = [
  {
    title: "Visual envelhecido",
    text: "Farol opaco entrega a idade do carro em segundos. O olhar do cliente vai direto para lá.",
  },
  {
    title: "Perda de transparência",
    text: "Sol, chuva e lavagens agressivas deixam a lente amarelada, com aparência de plástico gasto.",
  },
  {
    title: "Antes e depois na hora",
    text: "É um serviço em que o resultado é visível de imediato — perfeito para vender com prova visual.",
  },
];

export const LEARN_ITEMS = [
  "Diagnóstico de faróis leves, médios e pesados",
  "Preparação e proteção correta da área antes do serviço",
  "Sequência de lixamento progressivo passo a passo",
  "Polimento técnico sem marcar a lente",
  "Aplicação da proteção final para valorizar a entrega",
  "Escolha inteligente de materiais sem gastar demais",
  "Precificação e apresentação do serviço",
  "Erros comuns que estragam o acabamento — e como evitar",
];

export const MODULES = [
  {
    n: "01",
    title: "Fundamentos e diagnóstico do farol",
    text:
      "Entenda a estrutura da lente, tipos de dano e como classificar cada farol antes de tocar em qualquer material.",
  },
  {
    n: "02",
    title: "Materiais, EPIs e preparação",
    text:
      "Enxoval mínimo do detailer iniciante, EPIs essenciais e como preparar carro, cliente e área de trabalho.",
  },
  {
    n: "03",
    title: "Lixamento progressivo passo a passo",
    text:
      "A sequência exata das gramaturas, movimentos, tempo em cada etapa e como saber quando avançar.",
  },
  {
    n: "04",
    title: "Polimento, refino e acabamento",
    text:
      "Técnica de polimento controlado, refino da lente e leitura da superfície até chegar ao brilho profissional.",
  },
  {
    n: "05",
    title: "Proteção final e cuidados pós-serviço",
    text:
      "Como selar o resultado para durar mais tempo e o que orientar ao cliente na semana seguinte ao serviço.",
  },
  {
    n: "06",
    title: "Precificação, atendimento e abordagem",
    text:
      "Como montar seu orçamento, apresentar o serviço, fechar o primeiro cliente e criar seus antes/depois.",
  },
];

export const BONUSES = [
  {
    title: "Checklist de execução profissional",
    text: "Fluxo passo a passo para você não esquecer nenhuma etapa em serviço real.",
  },
  {
    title: "Guia de materiais para iniciantes",
    text: "O que comprar primeiro, o que dá para adiar e como não gastar dinheiro à toa.",
  },
  {
    title: "Modelo de orçamento para WhatsApp",
    text: "Um texto pronto e editável para enviar orçamento com aparência profissional.",
  },
  {
    title: "Script do primeiro cliente",
    text: "Como abordar amigos, vizinhos e clientes de estética para conseguir seu primeiro serviço.",
  },
  {
    title: "Aula de precificação",
    text: "Como definir seu preço em faróis leves, médios e pesados sem se queimar no mercado.",
  },
  {
    title: "Certificado de conclusão",
    text: "Emissão digital após finalizar o curso — pronto para anexar em portfólio e redes sociais.",
  },
];

export const OFFER_INCLUDES = [
  "Curso completo do zero, com linguagem simples e direta",
  "6 módulos com passo a passo prático e didático",
  "Acesso imediato após a confirmação do pagamento",
  "Todos os bônus liberados junto com o curso",
  "Certificado de conclusão incluso",
  "Suporte 24 horas via WhatsApp",
  "Garantia incondicional de 7 dias — reembolso total",
];

export const FOR_WHOM = [
  "Quem está começando na estética automotiva",
  "Lavadores e detailers que querem oferecer mais um serviço",
  "Quem quer aprender uma técnica prática e visual",
  "Quem quer vender serviço com antes e depois",
  "Quem quer começar com um investimento baixo",
];

export const NOT_FOR_WHOM = [
  "Quem procura dinheiro fácil sem praticar",
  "Quem não quer seguir um processo passo a passo",
  "Quem quer resultado garantido em farol quebrado, trincado ou com dano interno",
  "Quem não quer estudar segurança e materiais",
];

export const FAQ = [
  {
    q: "Preciso ter experiência?",
    a: "Não. O curso foi pensado para começar do zero, com linguagem simples e um processo passo a passo. Se você nunca encostou em uma lixa, vai conseguir seguir junto.",
  },
  {
    q: "Preciso comprar muitos materiais?",
    a: "Não. Dentro do curso mostramos o kit essencial para iniciar e o que pode ficar para depois, sem que você gaste dinheiro à toa antes de vender o primeiro serviço.",
  },
  {
    q: "O farol fica como novo?",
    a: "Depende do estado. Faróis com dano superficial têm ganho visual altíssimo. Faróis com trincas, infiltração ou dano interno exigem avaliação — o curso ensina exatamente como diagnosticar cada caso.",
  },
  {
    q: "Consigo vender esse serviço depois?",
    a: "Sim. Você aprende a técnica, precificação e abordagem. O resultado financeiro depende da sua prática, divulgação, região e qualidade de atendimento — não prometemos ganhos garantidos.",
  },
  {
    q: "Tem certificado?",
    a: "Sim. Emitimos um certificado digital de conclusão que você pode usar em portfólio, redes sociais e apresentações para clientes.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim. Após a confirmação do pagamento, o acesso ao curso e a todos os bônus é liberado imediatamente.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Se entender que o curso não faz sentido para você, é só solicitar o reembolso dentro desse prazo — devolvemos 100% do valor pago, sem enrolação.",
  },
  {
    q: "Como funciona o suporte 24h?",
    a: "Nosso suporte fica disponível 24 horas por dia via WhatsApp para tirar dúvidas técnicas do curso, sobre materiais e sobre a execução do serviço. Basta chamar no número que fica visível na página.",
  },
];
