import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        name: "description",
        content:
          "Il sistema operativo per il food retail artigianale italiano. Vendite, clienti, margini e magazzino sotto controllo, anche dal telefono. Prova gratis 14 giorni.",
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
  "https://wa.me/393883810008?text=Ciao%2C%20vorrei%20provare%20ScalaShop%20gratis%20per%2014%20giorni";
const TRIAL_URL = WHATSAPP_URL;

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

function PrimaryCTA({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizing =
    size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3.5 text-base";
  return (
    <a
      href={TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] font-semibold text-[var(--brand-navy)] shadow-[0_8px_24px_-8px_rgba(245,166,35,0.6)] transition hover:brightness-95 hover:-translate-y-0.5 ${sizing} ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <img src={logoAsset.url} alt="ScalaShop" className="h-16 md:h-20 w-auto" />
        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-navy)] hover:brightness-95"
        >
          Provalo Gratis per 14 Giorni
        </a>
      </div>
    </header>
  );
}

/* --- Visual mockup PRIMA / DOPO per la Hero --- */
function PrimaDopoVisual() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {/* PRIMA — caos */}
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/50">Prima</span>
          <span className="text-[10px] font-semibold text-red-300 bg-red-500/15 px-2 py-0.5 rounded-full">
            Caos
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            { c: "bg-green-400/80", t: "WhatsApp · ordine signora Maria 🍞🍷" },
            { c: "bg-yellow-300/80", t: "Post-it: chiamare fornitore latticini" },
            { c: "bg-blue-300/80", t: "Excel — margini.xlsx (non aggiornato)" },
            { c: "bg-pink-300/80", t: "Quaderno cassa · pag. 12" },
            { c: "bg-green-400/80", t: "WhatsApp · prenotazione vassoio" },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg bg-white/[0.06] px-3 py-2 text-sm text-white/85"
              style={{ transform: `rotate(${(i % 2 ? -0.6 : 0.6)}deg)` }}
            >
              <span className={`h-2 w-2 rounded-full ${r.c}`} />
              <span className="truncate">{r.t}</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      {/* DOPO — controllo */}
      <div className="relative rounded-2xl border border-[var(--brand-orange)]/40 bg-white text-[var(--brand-navy)] p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-[var(--brand-navy)]/60">
            Oggi · Riepilogo
          </span>
          <span className="text-[10px] font-semibold text-[var(--brand-navy)] bg-[var(--brand-orange)]/20 px-2 py-0.5 rounded-full">
            In controllo
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-secondary p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Incasso</p>
            <p className="mt-1 text-xl font-bold">€ 1.284</p>
            <p className="text-[11px] text-green-600 font-medium">+12% vs ieri</p>
          </div>
          <div className="rounded-lg bg-secondary p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Scontrini</p>
            <p className="mt-1 text-xl font-bold">87</p>
            <p className="text-[11px] text-muted-foreground">Scontrino medio € 14,8</p>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-border p-3">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Più venduti oggi
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {[
              ["Parmigiano 24 mesi", "€ 312"],
              ["Lasagne porzione", "€ 248"],
              ["Vassoio misto", "€ 196"],
            ].map(([n, v]) => (
              <li key={n} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                  {n}
                </span>
                <span className="font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-lg bg-[var(--brand-navy)] px-3 py-2 text-white">
          <span className="text-xs">Clienti da richiamare</span>
          <span className="text-sm font-bold text-[var(--brand-orange)]">3</span>
        </div>

        <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[var(--brand-orange)]/20 blur-2xl" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[var(--brand-orange)]/15 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-white/[0.04] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
              Per il food retail artigianale italiano
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Riprendi il controllo
              <br />
              della tua{" "}
              <span className="text-[var(--brand-orange)]">attività.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              Vendite, clienti, margini e magazzino sotto controllo in un unico sistema.
              <br className="hidden md:block" />
              Anche dal telefono, mentre sei al banco.
            </p>
            <div className="mt-9">
              <PrimaryCTA size="lg">Prova Gratuitamente per 14 Giorni</PrimaryCTA>
            </div>
          </div>

          <div className="relative">
            <PrimaDopoVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const left = [
    "vendite registrate a memoria",
    "scontrini di cui non resta traccia",
    "clienti che non sai chi sono",
    "ordini su WhatsApp",
    "prodotti da controllare",
    "prezzi e margini in testa",
    "scadenze da ricordare",
  ];
  const right = [
    "nella testa del titolare",
    "nelle chat",
    "nei fogli Excel",
    "nei quaderni",
    "nei messaggi vocali",
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80">
          Il vero problema
        </span>
        <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-[1.1]">
          Il problema non è che lavori troppo.
          <br />
          <span className="text-[var(--brand-orange)]">
            Il problema è che devi ricordare troppe cose.
          </span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs uppercase tracking-widest text-white/60">Ogni giorno</p>
            <ul className="mt-4 space-y-2.5 text-lg">
              {left.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs uppercase tracking-widest text-white/60">
              E nella maggior parte delle attività tutto questo vive
            </p>
            <ul className="mt-4 space-y-2.5 text-lg">
              {right.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-[var(--brand-orange)] bg-white/[0.03] p-6 md:p-8 space-y-2 text-lg md:text-xl">
          <p>Finché il volume è basso sembra funzionare.</p>
          <p className="font-semibold text-[var(--brand-orange)]">Poi arrivano gli errori.</p>
          <p className="text-white/85">Le vendite che non quadrano. Gli ordini dimenticati. I clienti persi.</p>
          <p className="text-white/85">Le giornate passate a rincorrere informazioni.</p>
        </div>
      </div>
    </section>
  );
}

function HiddenCost() {
  const items = [
    "tempo perso a cercare informazioni",
    "vendite che non sai cosa hanno reso davvero",
    "clienti che non tornano",
    "prodotti che rendono meno del previsto",
    "opportunità mancate",
    "attività che dipende completamente dalla tua presenza",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <span className="inline-block rounded-full bg-[var(--brand-orange)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand-navy)]">
          Il costo nascosto
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--brand-navy)]">
          Quanto ti costa non avere un sistema?
        </h2>
        <ul className="mt-10 mx-auto max-w-xl space-y-3 text-lg text-[var(--brand-navy)] text-left">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--brand-orange)] shrink-0" />
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
      t: "Vendite",
      d: "Sai in tempo reale quanto hai venduto, come sta andando la giornata e cosa sta rendendo di più.",
    },
    {
      t: "Scontrini",
      d: "Ogni scontrino tracciato. Scontrino medio, picchi di vendita e andamento orario sotto controllo.",
    },
    {
      t: "Prodotti",
      d: "Scopri i prodotti più venduti, quelli che rendono davvero e quelli che ti stanno facendo perdere margine.",
    },
    {
      t: "Clienti",
      d: "Capisci chi sono i clienti migliori, chi acquista più spesso e chi non torna da tempo.",
    },
    {
      t: "Margini",
      d: "Marginalità chiara su ogni prodotto e su ogni giornata. Niente più calcoli a memoria.",
    },
    {
      t: "Magazzino",
      d: "Disponibilità, prodotti e scadenze sempre aggiornati, senza affidarti alla memoria.",
    },
    {
      t: "Ordini & Prenotazioni",
      d: "Ordini WhatsApp, prenotazioni e ritiri organizzati in un unico posto. Niente più ordini dimenticati.",
    },
    {
      t: "Consegne",
      d: "Pianifica e tieni traccia delle consegne senza fogli sparsi né chiamate continue.",
    },
    {
      t: "Controllo totale",
      d: "Sai sempre cosa sta succedendo nella tua attività, anche quando non sei dietro al banco.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[var(--brand-orange)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand-navy)]">
            Cosa controlli con ScalaShop
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--brand-navy)]">
            Tutto quello che ti serve.{" "}
            <span className="text-[var(--brand-orange)]">In un solo posto.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dalle vendite quotidiane al banco fino agli ordini e alle consegne. Senza saltare da un foglio all'altro.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group relative rounded-xl border border-border bg-white p-7 transition hover:border-[var(--brand-orange)]/60 hover:shadow-[0_12px_30px_-15px_rgba(26,46,74,0.25)]"
            >
              <span className="absolute -top-3 left-6 rounded-md bg-[var(--brand-navy)] px-2 py-0.5 text-[11px] font-bold tracking-wider text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
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
    "sta al banco con i clienti",
    "registra le vendite della giornata",
    "prepara ordini e prenotazioni",
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
    "quanto hai venduto oggi",
    "qual è lo scontrino medio",
    "cosa sta rendendo di più",
    "quali clienti contattare",
    "quali ordini preparare",
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
            <li
              key={t}
              className="flex gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3"
            >
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

function FinalCTA() {
  const tags = ["Vendite.", "Clienti.", "Margini.", "Magazzino.", "Ordini.", "Consegne."];
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-[var(--brand-orange)]/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
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
        <div className="mt-10 flex justify-center">
          <PrimaryCTA size="lg">Prova Gratuitamente per 14 Giorni</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "È adatto anche alle piccole attività?",
      a: "Sì. ScalaShop nasce proprio dall'esperienza diretta di una piccola gastronomia di paese. È stato costruito partendo dai problemi reali di un'attività alimentare indipendente e oggi può essere replicato in gastronomie, salumerie, caseifici, botteghe alimentari e attività simili in tutta Italia.",
    },
    {
      q: "Come si usa?",
      a: "ScalaShop è stato progettato per essere semplice, immediato e intuitivo. È stato pensato per chi passa la giornata dietro al banco e non per chi lavora nel settore informatico. Uno strumento facile da utilizzare ogni giorno ma capace di fare una grande differenza nell'organizzazione dell'attività.",
    },
    {
      q: "Posso provarlo prima?",
      a: "Sì. Fino al 31 Luglio 2026 è possibile richiedere una demo gratuita di 14 giorni. Potrai utilizzare il sistema, provarlo direttamente nella tua attività e capire concretamente quanto può aiutarti a recuperare controllo, ordine e visibilità.",
    },
    {
      q: "Funziona da telefono?",
      a: "Sì. ScalaShop è stato pensato soprattutto per essere utilizzato durante la giornata lavorativa direttamente da smartphone. Quando sei al banco, in laboratorio o in negozio puoi accedere rapidamente alle informazioni che ti servono. È comunque ottimizzato anche per desktop.",
    },
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
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <img src={logoAsset.url} alt="ScalaShop" className="h-16 md:h-20 w-auto" />
        <p className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} ScalaShop · Food Business Growth · Made in Italy
        </p>
      </div>
    </footer>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.55c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.21-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.03 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.71 1.42 5.33L5 27l5.78-1.52a10.66 10.66 0 0 0 5.25 1.37h.01c5.9 0 10.7-4.8 10.7-10.7s-4.81-10.82-10.71-10.82zm0 19.6h-.01a8.86 8.86 0 0 1-4.51-1.24l-.32-.19-3.43.9.92-3.34-.21-.34a8.86 8.86 0 0 1-1.36-4.71c0-4.9 3.99-8.89 8.89-8.89 2.37 0 4.6.93 6.27 2.61a8.81 8.81 0 0 1 2.6 6.28c.01 4.9-3.97 8.92-8.84 8.92z" />
      </svg>
    </a>
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
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
