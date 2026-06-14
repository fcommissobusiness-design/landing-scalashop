import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        name: "description",
        content:
          "Il sistema operativo per il food retail artigianale italiano. Ordini, clienti, margini e magazzino in un solo posto. Prova gratis 14 giorni.",
      },
      { property: "og:title", content: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        property: "og:description",
        content:
          "Tutta la tua attività sotto controllo, anche dal telefono. Progettato per gastronomie, salumerie, caseifici e botteghe alimentari.",
      },
      { property: "og:image", content: logoAsset.url },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/393883810008?text=Ciao%2C%20vorrei%20parlare%20con%20un%20consulente%20ScalaShop";
const TRIAL_URL = WHATSAPP_URL; // stesso flusso in fase di validazione

const tickerItems = [
  "Prova ScalaShop gratuitamente per 14 giorni",
  "Il sistema operativo per il food retail artigianale",
  "Tutta la tua attività sotto controllo, anche dal telefono",
  "Demo gratuita disponibile fino al 31 luglio 2026",
  "Configurazione personalizzata disponibile",
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="sticky top-0 z-50 overflow-hidden bg-[var(--brand-navy)] text-white border-b border-white/10">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2 text-sm font-medium">
        {items.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-2">
            <span className="text-[var(--brand-orange)]">✓</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PrimaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] px-6 py-3.5 text-base font-semibold text-[var(--brand-navy)] shadow-sm transition hover:brightness-95 ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md border-2 border-[var(--brand-navy)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <img src={logoAsset.url} alt="ScalaShop" className="h-10 w-auto" />
        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] px-4 py-2 text-sm font-semibold text-[var(--brand-navy)] hover:brightness-95"
        >
          Prova 14 giorni gratis
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-20 text-center md:pt-24 md:pb-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--brand-navy)]">
          Riprendi il controllo della tua attività.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Se gestisci una gastronomia, una salumeria, un caseificio con punto vendita o una bottega
          alimentare, probabilmente ogni giorno devi fare i conti con ordini WhatsApp, clienti da
          richiamare, consegne, prodotti, margini e decine di informazioni sparse.
        </p>
        <p className="mt-4 text-lg md:text-xl text-[var(--brand-navy)] font-medium leading-relaxed">
          ScalaShop riunisce tutto in un unico sistema semplice da usare, progettato per il food
          retail artigianale italiano.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryCTA>PROVA GRATUITAMENTE PER 14 GIORNI</PrimaryCTA>
          <SecondaryCTA>PARLA CON UN CONSULENTE</SecondaryCTA>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Nessuna carta richiesta · Attivo in pochi minuti · Supporto in italiano
        </p>
      </div>
    </section>
  );
}

function Pain() {
  const left = [
    "ordini su WhatsApp",
    "prenotazioni al telefono",
    "clienti da richiamare",
    "consegne da organizzare",
    "prodotti da controllare",
    "scadenze da ricordare",
    "prezzi da aggiornare",
    "margini da monitorare",
  ];
  const right = [
    "nella testa del titolare",
    "nelle chat",
    "nei fogli Excel",
    "nei quaderni",
    "nei messaggi vocali",
  ];
  return (
    <section className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Il problema non è che lavori troppo.
          <br />
          <span className="text-[var(--brand-orange)]">
            Il problema è che devi ricordare troppe cose.
          </span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Ogni giorno</p>
            <ul className="mt-4 space-y-2.5 text-lg">
              {left.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[var(--brand-orange)]">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">
              E nella maggior parte delle attività tutto questo vive
            </p>
            <ul className="mt-4 space-y-2.5 text-lg">
              {right.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[var(--brand-orange)]">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 text-lg md:text-xl">
          <p>Finché il volume è basso sembra funzionare.</p>
          <p className="font-semibold">Poi arrivano gli errori.</p>
          <p>Gli ordini dimenticati.</p>
          <p>I clienti persi.</p>
          <p>Le giornate passate a rincorrere informazioni.</p>
        </div>
      </div>
    </section>
  );
}

function HiddenCost() {
  const items = [
    "tempo perso a cercare informazioni",
    "clienti che non tornano",
    "prodotti che rendono meno del previsto",
    "opportunità mancate",
    "attività che dipende completamente dalla tua presenza",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)]">
          Quanto ti costa non avere un sistema?
        </h2>
        <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Ogni settimana</p>
        <ul className="mt-4 mx-auto max-w-xl space-y-2.5 text-lg text-[var(--brand-navy)] text-left">
          {items.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-[var(--brand-orange)]">•</span>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-xl md:text-2xl text-[var(--brand-navy)] font-medium">
          <p>Il risultato?</p>
          <p className="mt-2 font-bold">Lavori sempre di più. Ma hai sempre meno controllo.</p>
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  const targets = [
    "gastronomie",
    "salumerie",
    "caseifici con punto vendita",
    "alimentari premium",
    "botteghe specializzate",
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-navy)]">
          Non è un altro gestionale.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          La maggior parte dei software aiuta a registrare dati.
        </p>
        <p className="mt-2 text-xl md:text-2xl text-[var(--brand-navy)] font-semibold">
          ScalaShop è stato progettato per aiutarti a gestire l'attività.
        </p>
        <p className="mt-8 text-base text-muted-foreground">
          Per questo è costruito attorno alle esigenze reali di:
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {targets.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white border border-[var(--brand-navy)]/15 px-4 py-2 text-sm font-medium text-[var(--brand-navy)]"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-8 text-base text-muted-foreground">
          Attività dove il rapporto con il cliente conta ancora davvero.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      t: "Ordini",
      d: "Tieni sotto controllo ordini, ritiri e consegne senza dover passare da WhatsApp a fogli sparsi.",
    },
    {
      t: "Clienti",
      d: "Scopri chi sono i clienti migliori, chi acquista più spesso e chi non torna da tempo.",
    },
    {
      t: "Margini",
      d: "Capisci cosa rende davvero e quali prodotti stanno consumando i tuoi profitti.",
    },
    {
      t: "Magazzino",
      d: "Monitora disponibilità, prodotti e scadenze senza affidarti alla memoria.",
    },
    {
      t: "Operatività",
      d: "Riduci errori, dimenticanze e attività ripetitive.",
    },
    {
      t: "Controllo",
      d: "Sapere sempre cosa sta succedendo nella tua attività, anche quando non sei dietro al banco.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-navy)] text-center">
          Tutto quello che ti serve. <span className="text-[var(--brand-orange)]">In un solo posto.</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-xl border border-border bg-white p-7 transition hover:border-[var(--brand-orange)]/60 hover:shadow-sm"
            >
              <h3 className="text-xl font-bold uppercase tracking-wide text-[var(--brand-navy)]">
                {it.t}
              </h3>
              <div className="mt-3 h-1 w-10 rounded-full bg-[var(--brand-orange)]" />
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiation() {
  const forWho = ["grandi aziende", "catene", "ristorazione", "amministrazione"];
  const realUser = [
    "apre il negozio la mattina",
    "parla con i clienti",
    "prepara gli ordini",
    "gestisce WhatsApp",
    "prende decisioni ogni giorno",
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-navy)] text-center">
          Perché ScalaShop è diverso
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-7 border border-border">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Molte soluzioni sono pensate per
            </p>
            <ul className="mt-4 space-y-2 text-lg text-[var(--brand-navy)]">
              {forWho.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-muted-foreground">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-[var(--brand-navy)] p-7 text-white">
            <p className="text-sm uppercase tracking-widest text-[var(--brand-orange)]">
              ScalaShop è progettato per il titolare operativo
            </p>
            <p className="mt-2 text-white/80">Quello che:</p>
            <ul className="mt-3 space-y-2 text-lg">
              {realUser.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[var(--brand-orange)]">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-lg md:text-xl text-[var(--brand-navy)] font-medium">
          Per questo è semplice, diretto e utilizzabile anche da smartphone.
        </p>
      </div>
    </section>
  );
}

function Outcome() {
  const items = [
    "quanto hai venduto",
    "cosa sta rendendo di più",
    "quali clienti contattare",
    "quali ordini preparare",
    "quali consegne effettuare",
    "cosa richiede attenzione",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] leading-tight">
          Immagina di aprire il telefono e sapere subito:
        </h2>
        <ul className="mt-10 mx-auto max-w-md space-y-3 text-lg text-[var(--brand-navy)] text-left">
          {items.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-[var(--brand-orange)] font-bold">✓</span>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-1 text-lg md:text-xl text-muted-foreground">
          <p>Senza cercare informazioni.</p>
          <p>Senza fare calcoli.</p>
          <p>Senza affidarti alla memoria.</p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Registrati gratuitamente.",
    "Accedi alla demo.",
    "Utilizza ScalaShop per 14 giorni.",
    "Scopri se può aiutarti a lavorare con più controllo e meno stress.",
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] text-center">
          Come funziona
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-border p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-orange)] text-xl font-bold text-[var(--brand-navy)]">
                {i + 1}
              </div>
              <p className="mt-4 text-base text-[var(--brand-navy)]">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "È adatto alle piccole attività?", a: "Sì. È stato progettato per attività da 1 a 10 persone." },
    { q: "Serve esperienza informatica?", a: "No. È stato progettato per essere semplice e immediato." },
    { q: "Posso provarlo prima?", a: "Sì. Hai accesso alla demo gratuita per 14 giorni." },
    { q: "Funziona da telefono?", a: "Sì. È stato progettato anche per l'utilizzo mobile." },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] text-center">
          Domande frequenti
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[var(--brand-navy)]">
                {it.q}
                <span className="ml-4 text-[var(--brand-orange)] transition group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const tags = ["Ordini.", "Clienti.", "Margini.", "Magazzino.", "Consegne."];
  return (
    <section className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Riprendi il controllo della tua attività.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-base font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg text-white/80">Tutto in un unico sistema.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryCTA>PROVA GRATUITAMENTE PER 14 GIORNI</PrimaryCTA>
          <span className="text-white/60 text-sm">oppure</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-[var(--brand-navy)]"
          >
            PARLA CON UN CONSULENTE
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoAsset.url} alt="ScalaShop" className="h-8 w-auto" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ScalaShop · Food Business Growth · Made in Italy
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--brand-navy)] hover:text-[var(--brand-orange)]"
        >
          WhatsApp: +39 388 381 0008
        </a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-[var(--brand-navy)]">
      <Ticker />
      <Header />
      <main>
        <Hero />
        <Pain />
        <HiddenCost />
        <Positioning />
        <Benefits />
        <Differentiation />
        <Outcome />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
