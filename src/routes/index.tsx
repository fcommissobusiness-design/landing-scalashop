import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        name: "description",
        content:
          "Il sistema operativo per gastronomie, salumerie, caseifici e botteghe alimentari italiane. Vendite, scontrini, clienti, margini e ordini sotto controllo — anche dal telefono. Prova gratis 14 giorni.",
      },
      { property: "og:title", content: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        property: "og:description",
        content:
          "Pensato in Italia per le botteghe alimentari italiane. Tutto sotto controllo, anche dal telefono.",
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
  "Il sistema operativo per il food retail artigianale italiano",
  "Tutta la tua attività sotto controllo, anche dal telefono",
  "Demo gratuita disponibile fino al 31 luglio 2026",
  "Configurazione personalizzata disponibile",
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="sticky top-0 z-50 overflow-hidden bg-[var(--brand-navy)] text-white border-b border-white/10">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2 text-xs sm:text-sm font-medium">
        {items.map((t, i) => (
          <span key={i} className="mx-6 sm:mx-8 inline-flex items-center gap-2">
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
  variant = "orange",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "orange" | "ghost";
}) {
  const sizing =
    size === "lg" ? "px-7 sm:px-9 py-4 text-base sm:text-lg" : "px-6 py-3.5 text-base";
  const style =
    variant === "orange"
      ? "bg-[var(--brand-orange)] text-[var(--brand-navy)] shadow-[0_12px_30px_-10px_rgba(245,166,35,0.7)] hover:brightness-95"
      : "border border-white/25 text-white hover:bg-white/10";
  return (
    <a
      href={TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md font-semibold transition hover:-translate-y-0.5 ${style} ${sizing} ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 py-4 sm:py-5">
        <img src={logoAsset.url} alt="ScalaShop" className="h-14 sm:h-16 md:h-20 w-auto" />
        <a
          href={TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-navy)] hover:brightness-95"
        >
          Provalo Gratis 14 Giorni
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */

function StageLabel({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "accent" }) {
  const cls =
    tone === "accent"
      ? "bg-[var(--brand-orange)] text-[var(--brand-navy)]"
      : "bg-white/10 text-white border border-white/20";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] ${cls}`}
    >
      {children}
    </span>
  );
}

function BeforeBoard() {
  // rappresentazione elegante: lista di "fonti sparse" tra cui il titolare salta tutto il giorno
  const sources = [
    { tag: "WhatsApp", text: "“Mi tieni 3 etti di parmigiano per sabato?”", meta: "12 chat aperte" },
    { tag: "Quaderno cassa", text: "Mar 11 — incasso ~ 340 (?) da ricontrollare", meta: "pagina 12" },
    { tag: "Post-it banco", text: "Sig.ra Bianchi — vassoio misto, ritira sabato 09:30", meta: "scritto ieri" },
    { tag: "Excel", text: "margini_v3_FINAL.xlsx", meta: "modificato 14 giorni fa" },
    { tag: "A memoria", text: "Quanto ho venduto davvero ieri? E mercoledì scorso?", meta: "—" },
  ];
  return (
    <div className="relative w-full">
      <div className="rounded-xl border border-white/15 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">Le tue informazioni, oggi</p>
          <span className="text-[11px] font-semibold text-red-300/90">5 fonti diverse</span>
        </div>
        <ul className="mt-4 divide-y divide-white/10">
          {sources.map((s) => (
            <li key={s.tag} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3">
              <span className="inline-flex h-7 items-center rounded-sm bg-white/10 px-2 text-[10px] font-bold uppercase tracking-wider text-white/80">
                {s.tag}
              </span>
              <span className="text-sm text-white/90 leading-snug">{s.text}</span>
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-white/40">
                {s.meta}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between rounded-md bg-red-500/10 border border-red-400/20 px-3 py-2">
          <span className="text-[12px] text-red-200/90">
            Per sapere com'è andata oggi devi aprire tutto.
          </span>
          <span className="text-[11px] font-semibold text-red-300/90">~ 3–5h / settimana</span>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto ${compact ? "w-[230px]" : "w-[260px] sm:w-[290px]"} rounded-[2.2rem] border-[10px] border-[#0b1422] bg-[#0b1422] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]`}
    >
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0b1422]" />
      <div className="overflow-hidden rounded-[1.6rem] bg-white">
        <div className="flex items-center justify-between bg-[var(--brand-navy)] px-4 py-3 text-white">
          <span className="text-[11px] font-semibold tracking-wide">ScalaShop</span>
          <span className="text-[10px] opacity-70">Oggi · 18:42</span>
        </div>
        <div className="px-4 pt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Incasso di oggi</p>
          <div className="mt-1 flex items-end justify-between">
            <p className="text-2xl font-bold text-[var(--brand-navy)]">€ 386,40</p>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
              +8,2%
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground">vs media settimana scorsa</p>
          <svg viewBox="0 0 200 50" className="mt-2 h-10 w-full">
            <polyline
              fill="none"
              stroke="var(--brand-orange)"
              strokeWidth="2"
              points="0,40 25,32 50,36 75,22 100,28 125,18 150,24 175,12 200,16"
            />
            <polyline
              fill="rgba(245,166,35,0.15)"
              stroke="none"
              points="0,40 25,32 50,36 75,22 100,28 125,18 150,24 175,12 200,16 200,50 0,50"
            />
          </svg>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2 px-4">
          <div className="rounded-md bg-secondary px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Scontrini</p>
            <p className="text-sm font-bold text-[var(--brand-navy)]">31</p>
          </div>
          <div className="rounded-md bg-secondary px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Scontrino medio</p>
            <p className="text-sm font-bold text-[var(--brand-navy)]">€ 12,46</p>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Più venduti oggi</p>
          <ul className="mt-2 space-y-1.5 text-[12px] text-[var(--brand-navy)]">
            {[
              ["Parmigiano 24 mesi", "€ 64,20"],
              ["Lasagne porzione", "€ 48,00"],
              ["Mortadella artigianale", "€ 31,50"],
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
          <div className="mt-3 flex items-center justify-between rounded-md bg-[var(--brand-navy)] px-3 py-2 text-white">
            <span className="text-[11px]">Clienti da richiamare</span>
            <span className="text-sm font-bold text-[var(--brand-orange)]">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-orange)]/15 blur-[120px]" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
            Pensato in Italia · per gastronomie, salumerie, caseifici e botteghe
          </span>
          <h1 className="mt-5 text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl font-bold tracking-tight">
            Riprendi il controllo
            <br />
            della tua <span className="text-[var(--brand-orange)]">attività.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Vendite, scontrini, clienti, margini e ordini sotto controllo in un unico sistema.
            Anche dal telefono, mentre sei al banco.
          </p>
        </div>

        {/* PRIMA / DOPO */}
        <div className="relative mt-10 sm:mt-14 grid items-start gap-10 lg:gap-10 lg:grid-cols-2">
          <div>
            <StageLabel>Prima</StageLabel>
            <p className="mt-3 text-sm text-white/60 max-w-sm">
              Informazioni sparse tra carta, chat e memoria. Per sapere com'è andata la giornata
              devi mettere insieme tu i pezzi.
            </p>
            <div className="mt-5">
              <BeforeBoard />
            </div>
          </div>

          <div>
            <StageLabel tone="accent">Dopo · con ScalaShop</StageLabel>
            <p className="mt-3 text-sm text-white/60 max-w-sm">
              Una sola schermata. Apri il telefono e vedi quanto hai venduto, cosa rende e cosa
              serve fare adesso.
            </p>
            <div className="mt-5">
              <PhoneMockup />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <PrimaryCTA size="lg">Provalo Gratuitamente per 14 Giorni</PrimaryCTA>
          <span className="text-sm text-white/60">
            Nessuna carta richiesta · attivazione in giornata
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- STORYTELLING — Francesco ---------- */

function Story() {
  return (
    <section className="bg-[#fbf8f3]">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-10 md:gap-14 md:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Da dove nasce ScalaShop
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-bold leading-[1.05] text-[var(--brand-navy)]">
              Nasce dentro una bottega del Centro Italia.
            </h2>
            <p className="mt-5 text-[var(--brand-navy)]/70 italic">
              Non da una startup. Non da un brainstorming. Da un titolare che non riusciva più
              a tenere tutto a mente.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-[var(--brand-orange)]/60 hidden md:block" />
            <div className="space-y-6 md:pl-6 text-[var(--brand-navy)]/85 text-[17px] leading-relaxed">
              <p>
                <strong className="text-[var(--brand-navy)]">Francesco</strong> ha una gastronomia
                in un paese del Centro Italia. L'attività andava bene: i clienti c'erano, gli
                incassi pure. Il problema non era il fatturato.
              </p>
              <p>
                Era il <strong>controllo</strong>. Gli ordini su WhatsApp. I prodotti da
                riordinare sul quaderno. I margini su un Excel che apriva una volta al mese.
                I clienti abituali nella sua testa.
              </p>
              <p className="border-l-2 border-[var(--brand-orange)] pl-4 text-[var(--brand-navy)] font-medium">
                Ogni nuova informazione aumentava il caos. Non l'organizzazione.
              </p>
              <p>
                Da lì è nata l'idea di ScalaShop: un unico sistema, un unico punto di controllo.
                Un solo posto dove vedere tutto. Costruito al banco, accanto a chi quel banco
                lo apre tutte le mattine.
              </p>
              <p className="text-[var(--brand-navy)]/60 text-sm">
                Oggi quella stessa logica può vivere nella tua bottega, nel tuo caseificio,
                nella tua salumeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAIN ---------- */

function Pain() {
  const memoryItems = [
    "i prezzi che hai aggiornato la settimana scorsa",
    "il vassoio della Sig.ra Bianchi per sabato",
    "il fornitore di latticini da richiamare",
    "quanto hai venduto davvero ieri",
    "chi non viene più da due settimane",
    "quanto ordinare di lasagne per domenica",
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 items-start">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Il vero problema
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-[var(--brand-navy)]">
              Il problema non è che lavori troppo.
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">È che devi ricordare tutto.</span>
                <span className="absolute left-0 bottom-1 h-3 w-full bg-[var(--brand-orange)]/30 -z-0" />
              </span>
              <br />
              <span className="text-[var(--brand-navy)]/60">E questo è impossibile.</span>
            </h2>
            <p className="mt-7 text-lg text-[var(--brand-navy)]/75 leading-relaxed max-w-md">
              Tutto vive in un posto solo: <strong>la tua testa</strong>. E quando la testa è
              piena, qualcosa si perde. Sempre.
            </p>
          </div>

          {/* lista pulita, no post-it */}
          <div className="rounded-xl border border-[var(--brand-navy)]/10 bg-secondary/40 p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-navy)]/60">
              Ogni giorno devi ricordare
            </p>
            <ul className="mt-5 divide-y divide-[var(--brand-navy)]/10">
              {memoryItems.map((t, i) => (
                <li
                  key={t}
                  className="grid grid-cols-[auto_1fr] items-center gap-4 py-3.5 text-[var(--brand-navy)]"
                >
                  <span className="text-xs font-bold tabular-nums text-[var(--brand-navy)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg leading-snug">{t}</span>
                </li>
              ))}
              <li className="grid grid-cols-[auto_1fr] items-center gap-4 py-3.5">
                <span className="text-xs font-bold tabular-nums text-[var(--brand-orange)]">…</span>
                <span className="text-base sm:text-lg text-[var(--brand-navy)]/60 italic">
                  e altre venti cose, ogni singolo giorno.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--brand-navy)]/10 pt-10">
          <p className="text-2xl md:text-3xl font-semibold text-[var(--brand-navy)] leading-snug max-w-3xl">
            Finché il volume è basso sembra funzionare.{" "}
            <span className="text-[var(--brand-orange)]">Poi arrivano gli errori.</span>
          </p>
          <p className="mt-3 text-lg text-[var(--brand-navy)]/70 max-w-3xl">
            Le vendite che non quadrano. Gli ordini dimenticati. I clienti che non tornano e non
            sai perché.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- HIDDEN COST ---------- */

function HiddenCost() {
  const losses = [
    {
      n: "01",
      kpi: "~ 1 cliente al giorno",
      t: "che non richiami",
      d: "Non sai chi è, non sai cosa compra di solito. In un anno fanno centinaia di scontrini in meno.",
    },
    {
      n: "02",
      kpi: "3–5 ore a settimana",
      t: "a cercare informazioni",
      d: "Ore passate a ricostruire vendite, ordini e scadenze da fonti diverse. Tempo che non recuperi mai.",
    },
    {
      n: "03",
      kpi: "Prodotti in perdita",
      t: "che continui a vendere",
      d: "Senza margini reali non lo sai. Lavori, sudi, e a fine mese non torna come dovrebbe.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/3 h-96 w-96 rounded-full bg-[var(--brand-orange)]/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
            Il costo nascosto
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05]">
            I soldi che lasci sul tavolo
            <br />
            <span className="text-white/60">non li vedi. Ma ci sono.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 max-w-2xl">
            Tre voci silenziose che ogni settimana ti tolgono fatturato, tempo e margine.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {losses.map((l) => (
            <div
              key={l.n}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.05] transition"
            >
              <span className="text-[11px] font-bold tabular-nums tracking-widest text-[var(--brand-orange)]">
                {l.n}
              </span>
              <p className="mt-3 text-3xl sm:text-[2rem] font-bold leading-tight text-[var(--brand-orange)]">
                {l.kpi}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{l.t}</p>
              <p className="mt-3 text-[15px] text-white/70 leading-relaxed">{l.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-2xl md:text-3xl font-semibold leading-snug max-w-3xl">
            Il risultato è sempre lo stesso:{" "}
            <span className="text-[var(--brand-orange)]">
              lavori sempre di più, hai sempre meno controllo.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- POSITIONING ---------- */

function Positioning() {
  const not = [
    "un ERP da multinazionale",
    "un software pieno di funzioni che non userai",
    "un gestionale fiscale dove cercare cose",
    "un sistema che richiede un consulente per ogni modifica",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
            Il posizionamento
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] leading-[1.05]">
            ScalaShop non è un altro gestionale.
          </h2>
          <p className="mt-5 text-lg text-[var(--brand-navy)]/70 leading-relaxed">
            La maggior parte dei software per il retail sono pensati per chi sta in ufficio,
            non per chi sta al banco. Sono potenti, sì, ma chiedono tempo, formazione e
            qualcuno che li tenga in piedi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 items-stretch">
          {/* NON */}
          <div className="lg:col-span-5 rounded-lg border border-[var(--brand-navy)]/10 p-6 bg-secondary/40">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-navy)]/60">
              ScalaShop NON è
            </p>
            <ul className="mt-4 space-y-3 text-[var(--brand-navy)]/80">
              {not.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[var(--brand-navy)]/40 mt-1">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* È — dominante */}
          <div className="lg:col-span-7 relative rounded-2xl bg-[var(--brand-navy)] p-8 sm:p-10 text-white shadow-[0_40px_80px_-30px_rgba(26,46,74,0.5)] overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-[var(--brand-orange)]/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[var(--brand-orange)]/10 blur-[100px]" />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-orange)]">
                ScalaShop è
              </p>
              <p className="mt-4 text-2xl sm:text-3xl md:text-[2.2rem] font-bold leading-[1.1]">
                Il sistema operativo della tua attività.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed text-base sm:text-lg max-w-xl">
                Uno strumento unico, pensato per chi vende ogni giorno al banco.
                Veloce da usare, utile dal primo giorno e progettato per girare sul
                telefono che hai già in tasca.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["1", "schermata"],
                  ["3", "tap per decidere"],
                  ["0", "consulenti necessari"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-md bg-white/5 border border-white/10 px-3 py-3">
                    <p className="text-2xl font-bold text-[var(--brand-orange)] leading-none">{k}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-white/60">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFFERENTIATION ---------- */

function Differentiation() {
  return (
    <section className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Perché ScalaShop è diverso
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05]">
              Costruito al banco.
              <br />
              <span className="text-[var(--brand-orange)]">Non in una sala riunioni.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              ScalaShop nasce dentro una gastronomia italiana vera. Ogni funzione esiste
              perché un titolare l'ha chiesta, l'ha provata e l'ha vista funzionare nel suo negozio.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Niente menù infiniti. Niente schermate da imparare a memoria. Solo le informazioni
              che ti servono per decidere oggi, in giornata.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { k: "01", t: "Pensato per chi sta dietro al banco", d: "Non per il commercialista, non per la sede. Per il titolare operativo che apre la mattina, taglia, serve e chiude la cassa la sera." },
              { k: "02", t: "Mobile prima di tutto", d: "Lo usi dal telefono in 3 tap. Mentre sei in cassa, in laboratorio, dal fornitore. Non serve sederti al computer." },
              { k: "03", t: "Una cosa fatta bene, non venti a metà", d: "Vendite, scontrini, clienti, margini, magazzino, ordini. Solo quello che ti serve davvero. Niente moduli inutili." },
              { k: "04", t: "Parla la tua lingua", d: "Scontrino medio, marginalità, prodotti che rendono. Concetti che usi già, non sigle e tecnicismi che ti rallentano." },
              { k: "05", t: "Pronto in giornata", d: "Configurazione assistita, niente corsi da seguire. Lo accendi e in poche ore stai già lavorando in modo diverso." },
            ].map((b) => (
              <div
                key={b.k}
                className="grid grid-cols-[auto_1fr] gap-5 items-start border-b border-white/10 pb-5 last:border-0"
              >
                <span className="text-2xl font-bold text-[var(--brand-orange)] tabular-nums leading-none pt-1">
                  {b.k}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{b.t}</h3>
                  <p className="mt-2 text-white/75 leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WASTE / ORDER OPTIMIZATION (nuovo pilastro) ---------- */

function WasteReduction() {
  return (
    <section className="bg-[#fbf8f3]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Ordini & sprechi
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] leading-[1.05]">
              Non si tratta di ordinare di più.
              <br />
              <span className="text-[var(--brand-orange)]">Si tratta di ordinare meglio.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--brand-navy)]/75 leading-relaxed max-w-xl">
              I prodotti del food artigianale hanno vita breve. Se ne ordini troppi, la sera
              li butti. Se ne ordini troppo pochi, alle 10 di mattina sei già senza.
              ScalaShop ti aiuta a trovare la misura giusta, ogni giorno.
            </p>

            <ul className="mt-7 space-y-3 text-[var(--brand-navy)]/85">
              {[
                "Storico delle vendite per giorno della settimana",
                "Andamento dell'attività e festività in calendario",
                "Comportamenti ricorrenti dei tuoi clienti abituali",
                "Suggerimento concreto: quanto ordinare di ogni prodotto",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] shrink-0" />
                  <span className="text-base sm:text-lg">{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[var(--brand-navy)] text-lg font-medium leading-snug max-w-xl">
              Abbastanza da coprire la giornata. Non così poco da finire tutto alle 10.
              Non così tanto da buttare prodotto la sera.
            </p>
          </div>

          {/* mockup: suggerimento ordini di domani */}
          <div className="relative">
            <div className="rounded-2xl bg-white border border-[var(--brand-navy)]/10 p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(26,46,74,0.35)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--brand-navy)]/50">
                    Suggerimento per domani · Sabato
                  </p>
                  <p className="mt-1 text-lg font-bold text-[var(--brand-navy)]">
                    Cosa ordinare oggi
                  </p>
                </div>
                <span className="rounded-full bg-[var(--brand-orange)]/15 text-[var(--brand-navy)] text-[11px] font-semibold px-2.5 py-1">
                  basato su 12 settimane
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  { p: "Lasagne al forno", q: "8 porzioni", note: "+2 vs media (sabato pieno)", tone: "up" },
                  { p: "Parmigiano 24 mesi", q: "1,8 kg", note: "in linea con sabato scorso", tone: "flat" },
                  { p: "Mortadella artigianale", q: "1,2 kg", note: "−0,3 kg (mercoledì ne è avanzata)", tone: "down" },
                  { p: "Caciotta del pastore", q: "900 g", note: "festività lunedì, anticipa", tone: "up" },
                ].map((r) => (
                  <li
                    key={r.p}
                    className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[var(--brand-navy)]/10 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold text-[var(--brand-navy)] truncate">{r.p}</p>
                      <p className="text-[12px] text-[var(--brand-navy)]/60 mt-0.5">{r.note}</p>
                    </div>
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        r.tone === "up"
                          ? "text-green-700"
                          : r.tone === "down"
                          ? "text-[var(--brand-orange)]"
                          : "text-[var(--brand-navy)]"
                      }`}
                    >
                      {r.q}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-secondary px-3 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--brand-navy)]/60">Stima sprechi</p>
                  <p className="text-lg font-bold text-[var(--brand-navy)]">− 32%</p>
                </div>
                <div className="rounded-md bg-secondary px-3 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--brand-navy)]/60">Rotture stock</p>
                  <p className="text-lg font-bold text-[var(--brand-navy)]">− 41%</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-[var(--brand-navy)]/50 italic">
                Stime medie osservate nelle attività che usano i suggerimenti per 4+ settimane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */

function Benefits() {
  const items = [
    { t: "Vendite del giorno", d: "Sai in tempo reale quanto hai incassato, com'è andata la mattina e cosa puoi recuperare nel pomeriggio." },
    { t: "Scontrino medio", d: "Conosci il valore reale di ogni cliente che entra. Niente più stime fatte a fine mese." },
    { t: "Prodotti che rendono", d: "Vedi cosa vendi di più, cosa marginalizza davvero e cosa stai lavorando in perdita." },
    { t: "Ordini intelligenti", d: "Suggerimenti su quanto ordinare per non sprecare e non rimanere senza, basati sul tuo storico vero." },
    { t: "Clienti", d: "Sai chi compra spesso, chi non torna da settimane e chi vale la pena richiamare." },
    { t: "Margini chiari", d: "Marginalità su ogni prodotto e su ogni giornata. Senza calcoli a fine mese sul retro di uno scontrino." },
    { t: "Magazzino e scadenze", d: "Disponibilità, prodotti e scadenze sempre aggiornati. Niente più merce dimenticata nel frigo." },
    { t: "Ordini & prenotazioni", d: "Vassoi, ritiri e ordini WhatsApp in un'unica lista. Nessun ordine si perde più tra le chat." },
    { t: "Controllo totale", d: "Sai cosa sta succedendo in negozio anche quando non ci sei. Dal telefono, in qualunque momento." },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
            Cosa controlli con ScalaShop
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] leading-[1.05]">
            Tutto quello che ti serve. In un solo posto.
          </h2>
          <p className="mt-5 text-lg text-[var(--brand-navy)]/70 leading-relaxed">
            Dalla vendita al banco fino agli ordini per il fine settimana. Senza saltare da
            un foglio all'altro.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="rounded-lg border border-[var(--brand-navy)]/10 bg-white p-6 transition hover:border-[var(--brand-navy)]/30 hover:shadow-[0_18px_40px_-20px_rgba(26,46,74,0.25)]"
            >
              <span className="text-xs font-bold tabular-nums text-[var(--brand-navy)]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--brand-navy)]">{it.t}</h3>
              <p className="mt-2 text-[15px] text-[var(--brand-navy)]/70 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RECEIPTS PILLAR ---------- */

function ReceiptsPillar() {
  return (
    <section className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Il cuore di ScalaShop
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05]">
              Ogni scontrino che batti,
              <br />
              <span className="text-[var(--brand-orange)]">il tuo negozio lo registra.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Vendi al banco come hai sempre fatto. ScalaShop registra automaticamente
              <strong> importo, orario e prodotti</strong> di ogni scontrino, e ti restituisce
              in tempo reale com'è andata la giornata.
            </p>
            <ul className="mt-7 space-y-3 text-base sm:text-lg">
              {[
                "Incasso aggiornato a ogni scontrino, senza scriverlo da nessuna parte",
                "Scontrino medio, picchi orari e andamento del giorno sempre visibili",
                "Storico completo: confronto con ieri, settimana scorsa, stesso giorno dell'anno scorso",
                "Da telefono, mentre il cliente è ancora di fronte a te",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] shrink-0" />
                  <span className="text-white/85">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-white/60 italic">
              Niente quaderno cassa. Niente "stasera tiriamo le somme". Le somme sono già lì.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white text-[var(--brand-navy)] p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--brand-navy)]/50">
                    Live · Oggi
                  </p>
                  <p className="text-3xl font-bold">€ 342,80</p>
                  <p className="text-xs text-[var(--brand-navy)]/60">28 scontrini · medio € 12,24</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  +6%
                </div>
              </div>
              <div className="mt-5 space-y-2">
                {[
                  ["#0218", "13:42", "Parmigiano + pane", "€ 14,80"],
                  ["#0217", "13:36", "Lasagne x2", "€ 18,00"],
                  ["#0216", "13:29", "Vassoio salumi", "€ 24,50"],
                  ["#0215", "13:21", "Mortadella", "€ 6,40"],
                  ["#0214", "13:18", "Caciotta + olive", "€ 11,20"],
                ].map(([n, h, p, v]) => (
                  <div
                    key={n}
                    className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-md border border-[var(--brand-navy)]/10 px-3 py-2 text-[13px]"
                  >
                    <span className="font-mono text-[11px] text-[var(--brand-navy)]/50">{n}</span>
                    <span className="text-[11px] text-[var(--brand-navy)]/60">{h}</span>
                    <span className="truncate">{p}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-2 rounded-md bg-[var(--brand-orange)]/15 px-3 py-2 text-[12px] font-medium text-[var(--brand-navy)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                  in aggiornamento dopo ogni scontrino
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- OUTCOME ---------- */

function Outcome() {
  const items = [
    "quanto hai venduto oggi",
    "qual è lo scontrino medio",
    "cosa sta rendendo davvero",
    "quanto ordinare per domani",
    "quali clienti richiamare",
    "cosa richiede attenzione adesso",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Una nuova abitudine
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] leading-[1.05]">
              Apri il telefono. Sai tutto.
            </h2>
            <p className="mt-5 text-lg text-[var(--brand-navy)]/70 leading-relaxed">
              Niente fogli da cercare, niente calcoli, niente "poi controllo a fine giornata".
              Le risposte sono già lì, dove servono.
            </p>
            <ul className="mt-7 space-y-2.5">
              {items.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 border-b border-[var(--brand-navy)]/10 pb-2.5 text-[var(--brand-navy)]"
                >
                  <span className="text-[var(--brand-orange)] font-bold">✓</span>
                  <span className="text-base sm:text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <PhoneMockup compact />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */

function FinalCTA() {
  const tags = ["Vendite.", "Scontrini.", "Clienti.", "Margini.", "Magazzino.", "Ordini."];
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-[var(--brand-orange)]/15 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05]">
          Riprendi il controllo della tua attività.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-sm sm:text-base font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg text-white/80">Tutto in un unico sistema.</p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <PrimaryCTA size="lg">Provalo Gratuitamente per 14 Giorni</PrimaryCTA>
          <span className="text-sm text-white/60">Demo disponibile fino al 31 luglio 2026</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    {
      q: "È adatto anche alle piccole attività?",
      a: "Sì. ScalaShop nasce dentro una piccola gastronomia di paese. È stato costruito sui problemi reali di un'attività indipendente, e oggi può essere replicato in gastronomie, salumerie, caseifici, botteghe alimentari e attività simili in tutta Italia.",
    },
    {
      q: "Come si usa?",
      a: "ScalaShop è stato progettato per essere semplice e immediato. È pensato per chi passa la giornata al banco, non per chi lavora nel settore informatico. Lo usi tutti i giorni senza dover imparare nulla di tecnico.",
    },
    {
      q: "Posso provarlo prima?",
      a: "Sì. Fino al 31 luglio 2026 puoi richiedere una demo gratuita di 14 giorni. La utilizzi direttamente nella tua attività e capisci concretamente quanto può aiutarti a recuperare controllo, ordine e visibilità.",
    },
    {
      q: "Funziona da telefono?",
      a: "Sì. ScalaShop è pensato soprattutto per essere usato durante la giornata dallo smartphone. Mentre sei al banco, in laboratorio o in negozio, hai sempre le informazioni che ti servono. È ottimizzato anche per desktop.",
    },
    {
      q: "Mi aiuta davvero a ridurre gli sprechi?",
      a: "Sì. ScalaShop analizza il tuo storico di vendite per giorno della settimana, festività e comportamenti ricorrenti, e suggerisce quanto ordinare di ogni prodotto. L'obiettivo è coprire la giornata senza buttare prodotto la sera né rimanere senza a metà mattina.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 py-20 md:py-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-navy)] text-center">
          Domande frequenti
        </h2>
        <div className="mt-10 divide-y divide-[var(--brand-navy)]/10 border-y border-[var(--brand-navy)]/10">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[var(--brand-navy)]">
                {it.q}
                <span className="ml-4 text-[var(--brand-orange)] transition group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base text-[var(--brand-navy)]/70 leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--brand-navy)]/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <img src={logoAsset.url} alt="ScalaShop" className="h-14 sm:h-16 md:h-20 w-auto" />
        <p className="text-sm text-[var(--brand-navy)]/60 text-center sm:text-right">
          © {new Date().getFullYear()} ScalaShop · Pensato in Italia per le botteghe italiane · Made in Italy
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
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.55 1.75 6.52L3 29l6.66-1.74A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-2.05 0-4.06-.55-5.82-1.6l-.42-.25-3.95 1.03 1.05-3.85-.27-.4A10.55 10.55 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.6 16 26.6zm6.1-7.93c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.66-1.65-.98-.88-1.65-1.96-1.85-2.29-.19-.33-.02-.51.15-.68.15-.15.33-.38.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.02-2.45-.27-.65-.55-.56-.74-.57-.19-.01-.41-.01-.63-.01s-.58.08-.88.41c-.3.33-1.15 1.13-1.15 2.75 0 1.62 1.18 3.19 1.35 3.41.17.22 2.32 3.55 5.62 4.98.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.09 1.95-.79 2.22-1.56.27-.77.27-1.43.19-1.56-.08-.13-.3-.21-.63-.38z" />
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
        <Story />
        <Pain />
        <HiddenCost />
        <Positioning />
        <Differentiation />
        <WasteReduction />
        <Benefits />
        <ReceiptsPillar />
        <Outcome />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
