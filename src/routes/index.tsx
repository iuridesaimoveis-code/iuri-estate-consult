import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  BadgeCheck,
  FileCheck2,
  Handshake,
  Instagram,
  Landmark,
  Mail,
  Menu,
  Scale,
  SearchCheck,
  WalletCards,
  X,
} from "lucide-react";
import heroImage from "@/assets/iuri-hero.jpg";
import portraitAsset from "@/assets/iuri-de-sa-retrato.jpg.asset.json";
import { ActionLink } from "@/components/Action";

const WHATSAPP = "5519999219768";
const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { number: "01", title: "Comprar", text: "Seleção de imóveis, análise das opções e orientação para uma escolha bem fundamentada." },
  { number: "02", title: "Vender", text: "Avaliação, posicionamento, divulgação e condução das tratativas com os interessados." },
  { number: "03", title: "Alugar", text: "Intermediação da locação, análise das condições e condução do processo até a conclusão." },
];

const stages = [
  { icon: SearchCheck, title: "Análise e estratégia", text: "Leitura de mercado e posicionamento do imóvel." },
  { icon: WalletCards, title: "Financeiro", text: "Orientação sobre crédito, financiamento e condições de pagamento." },
  { icon: Scale, title: "Jurídico", text: "Orientação sobre questões contratuais e conexão com profissionais habilitados." },
  { icon: FileCheck2, title: "Documentação", text: "Organização e conferência dos documentos necessários." },
  { icon: Landmark, title: "Cartório", text: "Orientação e acompanhamento nas etapas de escritura, registro e documentação do imóvel." },
  { icon: Handshake, title: "Negociação", text: "Intermediação profissional entre as partes." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iuri de Sá | Compra, Venda e Locação de Imóveis" },
      { name: "description", content: "Iuri de Sá, corretor de imóveis em Campinas e região, atua na compra, venda e locação com orientação financeira, jurídica e documental." },
      { property: "og:title", content: "Iuri de Sá | Corretor de Imóveis" },
      { property: "og:description", content: "Compra, venda e locação em Campinas e região com atendimento próximo e estrutura profissional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${inverse ? "text-hero-foreground" : "text-foreground"}`} aria-label="Iuri de Sá — início">
      <span className="grid size-10 place-items-center border border-current font-display text-lg">IS</span>
      <span className="leading-tight"><strong className="block font-display text-lg font-normal">Iuri de Sá</strong><span className="block text-[10px] uppercase">Corretor de imóveis</span></span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-background">
      <section id="inicio" className="relative min-h-[760px] bg-hero text-hero-foreground lg:min-h-[820px]">
        <img src={heroImage} alt="Residência contemporânea de alto padrão ao pôr do sol" width={1920} height={1280} fetchPriority="high" className="absolute inset-0 size-full object-cover object-[62%_center]" />
        <div className="hero-overlay absolute inset-0" />
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-hero-border px-5 py-5 sm:px-8 lg:px-12">
          <Brand inverse />
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-xs uppercase lg:flex">
            <a className="transition-colors hover:text-accent" href="#atuacao">Atuação</a>
            <a className="transition-colors hover:text-accent" href="#etapas">Etapas</a>
            <a className="transition-colors hover:text-accent" href="#sobre">Sobre</a>
            <a className="transition-colors hover:text-accent" href="#contato">Contato</a>
          </nav>
          <a href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre um imóvel.")} target="_blank" rel="noreferrer" className="hidden border-b border-accent pb-1 text-xs font-semibold uppercase lg:block">Falar com Iuri</a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center border border-hero-border lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          {menuOpen ? <nav className="absolute left-5 right-5 top-24 flex flex-col border border-hero-border bg-hero p-6 text-sm uppercase lg:hidden"><a className="py-3" href="#atuacao" onClick={() => setMenuOpen(false)}>Atuação</a><a className="py-3" href="#etapas" onClick={() => setMenuOpen(false)}>Etapas</a><a className="py-3" href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a className="py-3" href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></nav> : null}
        </header>
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-14 pt-24 sm:px-8 lg:min-h-[700px] lg:items-center lg:px-12 lg:pb-20 lg:pt-28">
          <div className="max-w-4xl animate-reveal">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-accent"><span className="h-px w-10 bg-accent" /> Consultoria imobiliária completa</p>
            <h1 className="max-w-4xl font-display text-[clamp(2.65rem,5.8vw,5.4rem)] leading-[1.01]">Seu imóvel merece uma negociação feita por quem entende de todo o processo.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">Compra, venda e locação de imóveis com orientação próxima, do primeiro contato à conclusão do negócio.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink variant="light" href={whatsappUrl("Olá, Iuri! Quero comprar ou alugar um imóvel.")} target="_blank" rel="noreferrer">Quero comprar ou alugar</ActionLink>
              <ActionLink variant="outline" className="border-hero-border text-hero-foreground hover:bg-hero-soft" href={whatsappUrl("Olá, Iuri! Quero vender ou alugar meu imóvel.")} target="_blank" rel="noreferrer">Quero vender ou alugar meu imóvel</ActionLink>
            </div>
            <p className="mt-7 border-l border-accent pl-4 text-xs leading-5 text-hero-muted">Compra • Venda • Locação • Campinas e região</p>
          </div>
        </div>
        <a href="#atuacao" aria-label="Conheça a atuação" className="absolute bottom-7 right-7 z-10 hidden items-center gap-3 text-xs uppercase text-hero-muted lg:flex">Conheça a atuação <ArrowDown className="size-4" /></a>
      </section>

      <section id="atuacao" className="section-space">
        <div className="content-wrap">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div><p className="eyebrow">O que eu faço</p><h2 className="section-title">Compra, venda e locação conduzidas de perto.</h2></div>
            <p className="section-lead lg:pt-10">Cada objetivo pede uma leitura cuidadosa do imóvel, do mercado e das condições envolvidas. Meu papel é organizar o caminho, antecipar decisões e aproximar as pessoas certas para cada necessidade.</p>
          </div>
          <div className="mt-16 grid border-t border-border lg:grid-cols-3">
            {services.map((service, index) => <article key={service.title} className={`group py-10 lg:min-h-96 lg:px-10 lg:py-12 ${index ? "border-t border-border lg:border-l lg:border-t-0" : ""}`}><span className="text-xs text-accent">{service.number}</span><h3 className="mt-20 font-display text-5xl">{service.title}</h3><p className="mt-6 max-w-sm leading-7 text-muted-foreground">{service.text}</p><div className="mt-10 h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" /></article>)}
          </div>
        </div>
      </section>

      <section id="etapas" className="section-space bg-primary text-primary-foreground">
        <div className="content-wrap relative">
          <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-28 hidden select-none font-display text-[18rem] text-primary-foreground/[0.025] lg:block">IS</span>
           <div className="relative grid gap-12 lg:grid-cols-12"><div className="lg:col-span-7"><p className="eyebrow text-accent">Estrutura para negociar</p><h2 className="section-title max-w-3xl">Um atendimento.<br /><em className="font-normal text-accent">Todas as etapas.</em></h2></div><p className="max-w-md self-end border-l border-primary-border pl-6 leading-7 text-primary-muted lg:col-span-4 lg:col-start-9">Da análise inicial ao fechamento, cada frente é conduzida com organização e, quando necessário, profissionais habilitados.</p></div>
          <div className="relative mt-16 grid border-t border-primary-border sm:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex items-start gap-4 border-b border-primary-border py-7 lg:px-8">
                <Icon className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.4} />
                <div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-muted">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section-space">
        <div className="content-wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:col-start-2">
            <div className="aspect-[4/5] overflow-hidden bg-secondary"><img src={portraitAsset.url} alt="Iuri de Sá, corretor de imóveis em Campinas e região" width={800} height={800} loading="lazy" className="size-full object-cover object-top grayscale-[10%] contrast-[1.03]" /></div>
            <div className="flex items-center justify-between border-b border-border py-4 text-[10px] font-semibold uppercase text-muted-foreground"><span>Iuri de Sá</span><span>CRECI 184010</span></div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Sobre Iuri</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl">Iuri de Sá</h2>
            <p className="mt-3 text-xs font-semibold uppercase text-accent">Corretor de Imóveis | CRECI 184010</p>
            <p className="mt-3 text-xs uppercase text-muted-foreground">Campinas e região</p>
            <blockquote className="mt-8 border-l border-border pl-7 font-display text-xl leading-relaxed text-muted-foreground sm:text-2xl">“Meu compromisso é compreender cada objetivo e conduzir decisões imobiliárias com proximidade, critério e transparência.”</blockquote>
            <p className="mt-7 leading-7 text-muted-foreground">São 5 anos de atuação no mercado imobiliário, sendo 3 deles como gerente de imobiliária, à frente de uma equipe de 10 corretores. Essa experiência em gestão, negociação e relacionamento com clientes é o que levo para cada atendimento.</p>
            <dl className="mt-7 grid grid-cols-3 border-y border-border py-5">
              <div><dt className="font-display text-2xl sm:text-3xl">5 anos</dt><dd className="mt-1 text-[10px] uppercase leading-4 text-muted-foreground">no mercado imobiliário</dd></div>
              <div className="border-l border-border px-4"><dt className="font-display text-2xl sm:text-3xl">3 anos</dt><dd className="mt-1 text-[10px] uppercase leading-4 text-muted-foreground">como gerente</dd></div>
              <div className="border-l border-border pl-4"><dt className="font-display text-2xl sm:text-3xl">10</dt><dd className="mt-1 text-[10px] uppercase leading-4 text-muted-foreground">corretores liderados</dd></div>
            </dl>
            <ActionLink className="mt-8" href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre meu próximo negócio imobiliário.")} target="_blank" rel="noreferrer">Conversar com Iuri</ActionLink>
          </div>
        </div>
      </section>

      <section id="contato" className="section-space border-t border-border bg-secondary">
        <div className="content-wrap grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><p className="eyebrow">Próximo passo</p><h2 className="section-title max-w-4xl">Vamos conversar sobre o seu próximo negócio imobiliário?</h2></div><div className="flex flex-col items-start justify-end lg:col-span-4"><p className="leading-7 text-muted-foreground">Seja para comprar, vender ou alugar, conte comigo para entender o seu objetivo e conduzir os próximos passos.</p><ActionLink className="mt-8" href={whatsappUrl("Olá, Iuri! Quero conversar sobre meu próximo negócio imobiliário.")} target="_blank" rel="noreferrer">Falar com Iuri</ActionLink></div></div>
      </section>

      <footer className="bg-primary pb-24 pt-14 text-primary-foreground lg:pb-12"><div className="content-wrap"><div className="grid gap-10 border-b border-primary-border pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]"><div><Brand inverse /><p className="mt-6 max-w-sm text-sm leading-6 text-primary-muted">Compra, venda e locação com atendimento pessoal e estrutura profissional.</p></div><div><p className="mb-4 text-xs uppercase text-accent">Profissional</p><p className="font-display text-xl">Iuri de Sá</p><p className="mt-2 text-sm text-primary-muted">Corretor de Imóveis | CRECI 184010<br />Campinas e região</p></div><div><p className="mb-4 text-xs uppercase text-accent">Contato</p><div className="flex flex-col gap-3 text-sm"><a className="flex items-center gap-2 hover:text-accent" href={whatsappUrl("Olá, Iuri! Gostaria de conversar.")} target="_blank" rel="noreferrer"><BadgeCheck className="size-4" />19 99921-9768</a><a className="flex items-center gap-2 hover:text-accent" href="https://instagram.com/desa.imoveis" target="_blank" rel="noreferrer"><Instagram className="size-4" />@desa.imoveis</a><a className="flex items-center gap-2 break-all hover:text-accent" href="mailto:conato@iuridesa.com.br"><Mail className="size-4 shrink-0" />conato@iuridesa.com.br</a></div></div></div><p className="pt-7 text-xs text-primary-muted">© 2026 Iuri de Sá. Compra • Venda • Locação</p></div></footer>

      <a className="fixed bottom-4 left-4 right-4 z-50 flex min-h-14 items-center justify-center gap-3 bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-lg lg:hidden" href={whatsappUrl("Olá, Iuri! Gostaria de conversar sobre um imóvel.")} target="_blank" rel="noreferrer"><BadgeCheck className="size-5" />Falar com Iuri no WhatsApp</a>
    </main>
  );
}
