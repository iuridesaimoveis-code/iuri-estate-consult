import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileCheck2,
  Handshake,
  Instagram,
  KeyRound,
  Mail,
  Menu,
  Scale,
  SearchCheck,
  ShieldCheck,
  UserRound,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
import heroImage from "@/assets/iuri-hero.jpg";
import interiorImage from "@/assets/iuri-interior.jpg";
import { ActionButton, ActionLink } from "@/components/Action";

const WHATSAPP = "5519999219768";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: SearchCheck, title: "Avaliação e estratégia", text: "Análise do imóvel, mercado e posicionamento para uma negociação mais eficiente." },
  { icon: WalletCards, title: "Suporte financeiro", text: "Orientação e acompanhamento nas etapas relacionadas a financiamento e condições de pagamento." },
  { icon: Scale, title: "Suporte jurídico", text: "Apoio e acompanhamento das questões jurídicas e contratuais envolvidas na negociação." },
  { icon: Handshake, title: "Acompanhamento completo", text: "Do primeiro atendimento à assinatura e conclusão do negócio." },
];

const process = [
  ["01", "Entendimento", "Entender o objetivo e o perfil do cliente."],
  ["02", "Análise", "Avaliar imóvel, valores, documentação e possibilidades."],
  ["03", "Negociação", "Conduzir propostas, condições e tratativas entre as partes."],
  ["04", "Suporte", "Acionar suporte financeiro, jurídico e documental quando necessário."],
  ["05", "Conclusão", "Acompanhar o processo até a finalização do negócio."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iuri Luiz | Corretor de Imóveis" },
      { name: "description", content: "Compra, venda e locação de imóveis com suporte financeiro, jurídico e documental em todas as etapas." },
      { property: "og:title", content: "Iuri Luiz | Corretor de Imóveis" },
      { property: "og:description", content: "Atendimento imobiliário personalizado e acompanhamento completo até a conclusão do negócio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${inverse ? "text-hero-foreground" : "text-foreground"}`} aria-label="Iuri Luiz — início">
      <span className="grid size-10 place-items-center border border-current font-display text-xl">IL</span>
      <span className="leading-tight"><strong className="block font-display text-lg font-normal">Iuri Luiz</strong><span className="block text-[10px] uppercase">Corretor de imóveis</span></span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState("");

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim().slice(0, 80);
    const phone = String(data.get("phone") ?? "").replace(/[^0-9()+\-\s]/g, "").trim().slice(0, 25);
    const interest = String(data.get("interest") ?? "").trim().slice(0, 40);
    const message = String(data.get("message") ?? "").trim().slice(0, 600);
    if (name.length < 2 || phone.length < 8 || !interest) {
      setError("Preencha seu nome, WhatsApp e o que você procura.");
      return;
    }
    setError("");
    const text = `Olá, Iuri! Meu nome é ${name}.\nMeu WhatsApp: ${phone}\nTenho interesse em: ${interest}.\n${message ? `Mensagem: ${message}` : "Gostaria de entender os próximos passos."}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="overflow-hidden bg-background">
      <section id="inicio" className="relative min-h-[760px] bg-hero text-hero-foreground lg:min-h-[820px]">
        <img src={heroImage} alt="Residência contemporânea de alto padrão ao pôr do sol" width={1920} height={1280} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[62%_center]" />
        <div className="hero-overlay absolute inset-0" />
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-hero-border px-5 py-5 sm:px-8 lg:px-12">
          <Brand inverse />
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-xs uppercase lg:flex">
            <a className="transition-colors hover:text-accent" href="#servicos">Atuação</a>
            <a className="transition-colors hover:text-accent" href="#processo">Como funciona</a>
            <a className="transition-colors hover:text-accent" href="#sobre">Sobre</a>
            <a className="transition-colors hover:text-accent" href="#contato">Contato</a>
          </nav>
          <a href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre um imóvel.")} target="_blank" rel="noreferrer" className="hidden border-b border-accent pb-1 text-xs font-semibold uppercase text-hero-foreground lg:block">Falar com Iuri</a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center border border-hero-border text-hero-foreground lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          {menuOpen ? <nav className="absolute left-5 right-5 top-24 flex flex-col border border-hero-border bg-hero p-6 text-sm uppercase lg:hidden"><a className="py-3" href="#servicos" onClick={() => setMenuOpen(false)}>Atuação</a><a className="py-3" href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a className="py-3" href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a className="py-3" href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></nav> : null}
        </header>
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-14 pt-24 sm:px-8 lg:min-h-[700px] lg:items-center lg:px-12 lg:pb-20 lg:pt-28">
          <div className="max-w-3xl animate-reveal">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-accent"><span className="h-px w-10 bg-accent" /> Consultoria imobiliária completa</p>
            <h1 className="max-w-3xl font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.98]">Seu imóvel merece uma negociação feita por quem entende de todo o processo.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">Compra, venda e locação de imóveis com acompanhamento completo, do primeiro contato à conclusão do negócio.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink variant="light" href={whatsappUrl("Olá, Iuri! Quero comprar ou alugar um imóvel.")} target="_blank" rel="noreferrer">Quero comprar ou alugar</ActionLink>
              <ActionLink variant="outline" className="border-hero-border text-hero-foreground hover:bg-hero-soft" href={whatsappUrl("Olá, Iuri! Quero vender ou colocar meu imóvel para locação.")} target="_blank" rel="noreferrer">Quero anunciar meu imóvel</ActionLink>
            </div>
            <p className="mt-7 max-w-2xl border-l border-accent pl-4 text-xs leading-5 text-hero-muted">Atendimento personalizado • Venda • Locação • Suporte financeiro e jurídico</p>
          </div>
        </div>
        <a href="#servicos" aria-label="Conheça os serviços" className="absolute bottom-7 right-7 z-10 hidden items-center gap-3 text-xs uppercase text-hero-muted lg:flex">Conheça a atuação <ArrowDown className="size-4" /></a>
      </section>

      <section id="servicos" className="section-space">
        <div className="content-wrap">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="eyebrow">Por que contar com um corretor?</p><h2 className="section-title">Muito mais do que apresentar um imóvel.</h2></div>
            <p className="section-lead lg:pt-10">Uma negociação imobiliária envolve análise, documentação, valores, financiamento, contratos e diversas etapas. Por isso, o atendimento não termina na visita ao imóvel. A proposta é oferecer acompanhamento completo para que cada decisão seja tomada com mais segurança e tranquilidade.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group min-h-72 border-b border-r border-border p-7 transition-colors hover:bg-secondary lg:p-8"><span className="mb-16 flex items-center justify-between text-accent"><Icon className="size-6" strokeWidth={1.5} /><span className="text-xs text-muted-foreground">0{index + 1}</span></span><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <article className="bg-primary px-6 py-16 text-primary-foreground sm:p-12 lg:p-20"><Building2 className="mb-20 size-8 text-accent" strokeWidth={1.4} /><p className="eyebrow text-accent">Venda</p><h2 className="font-display text-4xl sm:text-5xl">Quer vender seu imóvel?</h2><p className="mt-6 max-w-lg leading-7 text-primary-muted">Estratégia, divulgação, atendimento aos interessados, negociação e acompanhamento de toda a operação.</p><ActionLink variant="light" className="mt-9" href={whatsappUrl("Olá, Iuri! Quero falar sobre a venda do meu imóvel.")} target="_blank" rel="noreferrer">Falar sobre a venda</ActionLink></article>
        <article className="bg-secondary px-6 py-16 sm:p-12 lg:p-20"><KeyRound className="mb-20 size-8 text-accent" strokeWidth={1.4} /><p className="eyebrow">Locação</p><h2 className="font-display text-4xl sm:text-5xl">Quer alugar seu imóvel?</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Encontre o perfil adequado de locatário e conte com acompanhamento profissional durante o processo de locação.</p><ActionLink className="mt-9" href={whatsappUrl("Olá, Iuri! Quero falar sobre a locação do meu imóvel.")} target="_blank" rel="noreferrer">Falar sobre a locação</ActionLink></article>
      </section>
      <div className="bg-accent px-5 py-4 text-center text-xs font-semibold uppercase text-accent-foreground">Atendimento para proprietários, compradores e locatários</div>

      <section id="processo" className="section-space bg-primary text-primary-foreground">
        <div className="content-wrap"><div className="max-w-2xl"><p className="eyebrow text-accent">Atendimento completo</p><h2 className="section-title">Um único atendimento para cuidar de todas as etapas.</h2></div>
          <ol className="mt-16 border-t border-primary-border">{process.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-primary-border py-7 sm:grid-cols-[64px_0.7fr_1.3fr] sm:items-center lg:py-8"><span className="font-display text-xl text-accent">{number}</span><h3 className="font-display text-2xl lg:text-3xl">{title}</h3><p className="max-w-xl text-sm leading-6 text-primary-muted">{text}</p></li>)}</ol>
        </div>
      </section>

      <section id="sobre" className="section-space">
        <div className="content-wrap grid items-stretch gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative min-h-[500px] overflow-hidden bg-secondary lg:min-h-[680px]"><img src={interiorImage} alt="Interior contemporâneo com vista urbana" width={1024} height={1280} loading="lazy" className="size-full object-cover" /><div className="absolute bottom-0 left-0 bg-background px-7 py-6"><p className="font-display text-2xl">Iuri Luiz</p><p className="mt-1 text-xs uppercase text-muted-foreground">Corretor de Imóveis • CRECI 184010</p></div></div>
          <div className="flex flex-col justify-center"><p className="eyebrow">Autoridade que vem do cuidado</p><h2 className="section-title">Atendimento profissional, próximo e completo.</h2><p className="section-lead mt-8">Cada cliente possui uma necessidade diferente. O trabalho é entender o cenário, apresentar as melhores possibilidades e acompanhar cada etapa da negociação com transparência e profissionalismo.</p>
            <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2">{["Intermediação profissional e segura", "Apoio documental e burocrático", "Orientação financeira e jurídica", "Acompanhamento até a conclusão"].map(item => <p key={item} className="flex gap-3 border-t border-border py-4"><Check className="mt-0.5 size-4 shrink-0 text-accent" />{item}</p>)}</div>
            <ActionLink className="mt-8 self-start" href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre meu momento imobiliário.")} target="_blank" rel="noreferrer">Conversar com Iuri</ActionLink>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-secondary">
        <div className="content-wrap"><div className="max-w-xl"><p className="eyebrow">Para quem é o atendimento</p><h2 className="section-title">Orientação certa para cada momento.</h2></div>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{[[UserRound, "Compradores", "Para quem busca um imóvel para morar ou investir."], [BriefcaseBusiness, "Proprietários", "Para quem deseja vender ou colocar seu imóvel para locação."], [UsersRound, "Locatários", "Para quem busca um imóvel para alugar com segurança e orientação."]].map(([Icon, title, text]) => { const CardIcon = Icon as typeof UserRound; return <article key={String(title)} className="bg-background p-8 lg:min-h-72 lg:p-10"><CardIcon className="mb-16 size-7 text-accent" strokeWidth={1.5} /><h3 className="font-display text-3xl">{String(title)}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{String(text)}</p></article>})}</div>
        </div>
      </section>

      <section id="contato" className="section-space">
        <div className="content-wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div><p className="eyebrow">Próximos passos</p><h2 className="section-title">Vamos encontrar a melhor solução para o seu imóvel?</h2><p className="section-lead mt-7">Conte o que você procura ou fale sobre o seu imóvel. A partir disso, podemos entender o seu momento e definir os próximos passos.</p><div className="mt-10 flex items-center gap-4 border-t border-border pt-7"><ShieldCheck className="size-7 text-accent" /><p className="text-sm"><strong className="block">Conversa direta com Iuri</strong><span className="text-muted-foreground">Seus dados serão usados apenas para iniciar o atendimento.</span></p></div></div>
          <form onSubmit={submitLead} className="bg-secondary p-6 sm:p-10" noValidate><div className="grid gap-6 sm:grid-cols-2"><label className="form-label">Nome<input className="form-input" type="text" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Seu nome" /></label><label className="form-label">WhatsApp<input className="form-input" type="tel" name="phone" required minLength={8} maxLength={25} autoComplete="tel" placeholder="(00) 00000-0000" /></label></div><label className="form-label mt-6">O que procura?<select className="form-input" name="interest" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Comprar</option><option>Alugar</option><option>Vender</option><option>Colocar para locação</option></select></label><label className="form-label mt-6">Mensagem<textarea className="form-input min-h-32 resize-y" name="message" maxLength={600} placeholder="Conte brevemente como posso ajudar" /></label>{error ? <p role="alert" className="mt-4 text-sm text-destructive">{error}</p> : null}<ActionButton type="submit" className="mt-7 w-full sm:w-auto">Falar com Iuri</ActionButton></form>
        </div>
      </section>

      <footer className="bg-primary pb-24 pt-14 text-primary-foreground lg:pb-12"><div className="content-wrap"><div className="grid gap-10 border-b border-primary-border pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]"><div><Brand inverse /><p className="mt-6 max-w-sm text-sm leading-6 text-primary-muted">Compra, venda e locação com orientação profissional em todas as etapas.</p></div><div><p className="mb-4 text-xs uppercase text-accent">Profissional</p><p className="font-display text-xl">Iuri Luiz</p><p className="mt-2 text-sm text-primary-muted">Corretor de Imóveis<br />CRECI 184010</p></div><div><p className="mb-4 text-xs uppercase text-accent">Contato</p><div className="flex flex-col gap-3 text-sm"><a className="flex items-center gap-2 hover:text-accent" href={whatsappUrl("Olá, Iuri! Gostaria de conversar.")} target="_blank" rel="noreferrer"><BadgeCheck className="size-4" />19 99921-9768</a><a className="flex items-center gap-2 hover:text-accent" href="https://instagram.com/desa.imoveis" target="_blank" rel="noreferrer"><Instagram className="size-4" />@desa.imoveis</a><a className="flex items-center gap-2 break-all hover:text-accent" href="mailto:conato@iuridesa.com.br"><Mail className="size-4 shrink-0" />conato@iuridesa.com.br</a></div></div></div><p className="pt-7 text-xs text-primary-muted">© 2026 Iuri Luiz. Compra • Venda • Locação</p></div></footer>

      <a className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-3 bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-lg lg:hidden" href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre um imóvel.")} target="_blank" rel="noreferrer"><BadgeCheck className="size-5" />Falar com Iuri no WhatsApp</a>
    </main>
  );
}
