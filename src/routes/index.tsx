import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScalaShop — Riprendi il controllo della tua attività" },
      {
        name: "description",
        content:
          "Il sistema operativo per gastronomie, salumerie, caseifici e botteghe alimentari. Vendite, scontrini, clienti e margini sotto controllo — anche dal telefono. Prova gratis 14 giorni.",
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

function ChaosScatter() {
  // collage di elementi sparsi che evocano caos
  const notes = [
    { t: "Sig.ra Maria — vassoio misto x sabato", rot: -4, top: "4%", left: "2%", color: "bg-[#FFF1A8] text-[#3d3000]", kind: "postit" },
    { t: "WhatsApp · 'mi tieni 3 etti parmigiano?'", rot: 2, top: "22%", left: "26%", color: "bg-[#DCF8C6] text-[#0b3d0b]", kind: "msg" },
    { t: "Excel — margini_2.xlsx", rot: -2, top: "44%", left: "5%", color: "bg-white text-[#1a2e4a] border border-[#e5e7eb]", kind: "doc" },
    { t: "Scontrino #0184  €  6,40", rot: 5, top: "58%", left: "30%", color: "bg-[#fafafa] text-[#444] border border-[#e5e7eb]", kind: "receipt" },
    { t: "Chiamare fornitore latticini", rot: -6, top: "70%", left: "8%", color: "bg-[#FFB6B6] text-[#5a0000]", kind: "postit" },
    { t: "WhatsApp · 'tenete ancora le lasagne?'", rot: 3, top: "82%", left: "32%", color: "bg-[#DCF8C6] text-[#0b3d0b]", kind: "msg" },
    { t: "Quaderno cassa · pag. 12", rot: -3, top: "10%", left: "44%", color: "bg-[#fff7e0] text-[#3a2a00] border border-[#e8d99a]", kind: "doc" },
  ];
  return (
    <div className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full select-none">
      {/* leggero "rumore" di sfondo, no grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
      </div>
      {notes.map((n, i) => (
        <div
          key={i}
          className={`absolute max-w-[58%] sm:max-w-[52%] rounded-sm px-3 py-2 text-[12px] sm:text-[13px] font-medium leading-snug shadow-[0_14px_30px_-12px_rgba(0,0,0,0.55)] ${n.color}`}
          style={{
            top: n.top,
            left: n.left,
            transform: `rotate(${n.rot}deg)`,
          }}
        >
          {n.kind === "msg" && (
            <span className="block text-[10px] opacity-70 mb-0.5">WhatsApp · 09:{20 + i}</span>
          )}
          {n.kind === "receipt" && (
            <span className="block text-[10px] opacity-60 mb-0.5">— ricevuta —</span>
          )}
          {n.t}
        </div>
      ))}
      <div className="absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
        Prima · tutto sparso
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
        {/* status bar */}
        <div className="flex items-center justify-between bg-[var(--brand-navy)] px-4 py-3 text-white">
          <span className="text-[11px] font-semibold tracking-wide">ScalaShop</span>
          <span className="text-[10px] opacity-70">Oggi · 18:42</span>
        </div>

        {/* card incasso */}
        <div className="px-4 pt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Incasso di oggi
          </p>
          <div className="mt-1 flex items-end justify-between">
            <p className="text-2xl font-bold text-[var(--brand-navy)]">€ 386,40</p>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
              +8,2%
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground">vs media settimana scorsa</p>

          {/* mini sparkline */}
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

        {/* mini stats */}
        <div className="mt-1 grid grid-cols-2 gap-2 px-4">
          <div className="rounded-md bg-secondary px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Scontrini</p>
            <p className="text-sm font-bold text-[var(--brand-navy)]">31</p>
          </div>
          <div className="rounded-md bg-secondary px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
              Scontrino medio
            </p>
            <p className="text-sm font-bold text-[var(--brand-navy)]">€ 12,46</p>
          </div>
        </div>

        {/* top prodotti */}
        <div className="px-4 pt-3 pb-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Più venduti oggi
          </p>
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
      {/* glow background pulito, niente grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-orange)]/15 blur-[120px]" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 pt-14 sm:pt-20 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
            Per gastronomie, salumerie, caseifici e botteghe
          </span>
          <h1 className="mt-5 text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl font-bold tracking-tight">
            Riprendi il controllo
            <br />
            della tua{" "}
            <span className="text-[var(--brand-orange)]">attività.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Vendite, scontrini, clienti e margini sotto controllo in un unico sistema.
            Anche dal telefono, mentre sei al banco.
          </p>
        </div>

        {/* composizione visiva: caos a sinistra, mockup a destra */}
        <div className="relative mt-10 sm:mt-14 grid items-center gap-8 lg:gap-4 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative">
            <ChaosScatter />
          </div>

          {/* divider visivo "→ ScalaShop" su desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center gap-3">
            <div className="h-px w-10 bg-white/20" />
            <span className="rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--brand-navy)]">
              ScalaShop
            </span>
            <div className="h-px w-10 bg-white/20" />
          </div>

          <div className="relative">
            <PhoneMockup />
            <div className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-white/50">
              Dopo · tutto in un colpo d'occhio
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

/* ---------- PAIN ---------- */

function Pain() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Il vero problema
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-[var(--brand-navy)]">
              Non lavori troppo.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Ricordi troppo.</span>
                <span className="absolute left-0 bottom-1 h-3 w-full bg-[var(--brand-orange)]/30 -z-0" />
              </span>
            </h2>
            <div className="mt-7 space-y-4 text-lg text-[var(--brand-navy)]/85 leading-relaxed">
              <p>
                Gli ordini su WhatsApp. I prezzi che hai aggiornato la settimana scorsa.
                Il cliente che ha chiesto il vassoio per sabato. Il fornitore da richiamare.
                Quanto hai venduto davvero ieri.
              </p>
              <p>
                Tutto vive in un posto solo: <strong>la tua testa</strong>. E quando la testa è piena,
                qualcosa si perde.
              </p>
            </div>
          </div>

          {/* composizione editoriale a destra */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-3 text-[var(--brand-navy)]">
              <div className="col-span-7 rounded-md bg-[#FFF1A8] p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] -rotate-2">
                <p className="text-[10px] uppercase tracking-widest opacity-60">Post-it cassa</p>
                <p className="mt-1 text-sm font-semibold">
                  Sig.ra Bianchi — 3 etti parmigiano, ritira sabato 09:30
                </p>
              </div>
              <div className="col-span-5 rounded-md bg-[#DCF8C6] p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] rotate-1">
                <p className="text-[10px] uppercase tracking-widest opacity-60">WhatsApp</p>
                <p className="mt-1 text-sm font-semibold">"Mi prepari il vassoio per stasera?"</p>
              </div>
              <div className="col-span-5 rounded-md bg-white border border-[#e5e7eb] p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.15)] rotate-1">
                <p className="text-[10px] uppercase tracking-widest opacity-60">Excel</p>
                <p className="mt-1 text-sm font-semibold">margini_v3_FINAL.xlsx</p>
                <p className="text-[11px] opacity-60">Modificato 14 giorni fa</p>
              </div>
              <div className="col-span-7 rounded-md bg-[#fff7e0] border border-[#e8d99a] p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.2)] -rotate-1">
                <p className="text-[10px] uppercase tracking-widest opacity-60">Quaderno cassa</p>
                <p className="mt-1 text-sm font-semibold">
                  Mar 11 — incasso ~ 340 (?) · da ricontrollare
                </p>
              </div>
              <div className="col-span-12 rounded-md bg-[#fafafa] border border-dashed border-[#cbd5e1] p-4 -rotate-[0.5deg]">
                <p className="text-[11px] opacity-60">
                  Scontrini del giorno, alcuni nel cassetto, alcuni archiviati, alcuni persi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--brand-navy)]/10 pt-10">
          <p className="text-2xl md:text-3xl font-semibold text-[var(--brand-navy)] leading-snug max-w-3xl">
            Finché il volume è basso sembra funzionare.{" "}
            <span className="text-[var(--brand-orange)]">
              Poi arrivano gli errori.
            </span>
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

/* ---------- HIDDEN COST — editorial ---------- */

function HiddenCost() {
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
            Non vedi i soldi che lasci sul tavolo.
            <br />
            <span className="text-white/60">Ma ci sono.</span>
          </h2>
        </div>

        {/* composizione asimmetrica */}
        <div className="mt-14 grid grid-cols-12 gap-5 md:gap-6">
          <div className="col-span-12 md:col-span-7 border-l-2 border-[var(--brand-orange)] pl-5 md:pl-7">
            <p className="text-5xl md:text-6xl font-bold text-[var(--brand-orange)] leading-none">
              ~ 1 cliente al giorno
            </p>
            <p className="mt-3 text-lg text-white/80 max-w-md">
              che non richiami, che dimentichi, che non sai più chi è.
              In un anno fanno centinaia di scontrini in meno.
            </p>
          </div>

          <div className="col-span-6 md:col-span-5 md:row-span-2 rounded-lg bg-white/[0.04] border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-widest text-white/50">Costo invisibile</p>
            <p className="mt-3 text-xl md:text-2xl font-semibold leading-snug">
              Ore passate a cercare informazioni che dovrebbero essere a portata di mano.
            </p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-bold text-white">3–5h</span>
              <span className="text-sm text-white/60 mb-1">a settimana</span>
            </div>
            <p className="mt-2 text-sm text-white/60">
              Stime medie raccolte dai titolari che usano carta, Excel e WhatsApp.
            </p>
          </div>

          <div className="col-span-6 md:col-span-7 md:col-start-1">
            <div className="rounded-lg bg-white text-[var(--brand-navy)] p-6">
              <p className="text-[11px] uppercase tracking-widest text-[var(--brand-navy)]/50">
                Ogni settimana
              </p>
              <ul className="mt-3 space-y-2 text-base sm:text-lg font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                  vendite che non sai davvero cosa hanno reso
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                  prodotti che lavori in perdita senza accorgertene
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                  ordini ricevuti, mai preparati
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 mt-2 md:mt-6">
            <p className="text-2xl md:text-3xl font-semibold leading-snug max-w-3xl">
              Il risultato è sempre lo stesso:{" "}
              <span className="text-[var(--brand-orange)]">
                lavori sempre di più, hai sempre meno controllo.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- POSITIONING — "Non è un altro gestionale" ---------- */

function Positioning() {
  const not = [
    "un ERP da multinazionale",
    "un software pieno di funzioni che non userai",
    "un gestionale fiscale dove cercare cose",
    "un sistema che richiede un consulente per ogni modifica",
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
            Chiarisco subito
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-navy)] leading-[1.05]">
            ScalaShop non è un altro gestionale.
          </h2>
          <p className="mt-5 text-lg text-[var(--brand-navy)]/70 leading-relaxed">
            La maggior parte dei software per la ristorazione e il retail sono pensati per
            chi sta in ufficio, non per chi sta al banco. Sono potenti, sì, ma chiedono tempo,
            formazione e qualcuno che li tenga in piedi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
          <div className="rounded-lg border border-[var(--brand-navy)]/10 p-7 bg-secondary/40">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-navy)]/60">
              ScalaShop NON è
            </p>
            <ul className="mt-4 space-y-3 text-lg text-[var(--brand-navy)]/80">
              {not.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-[var(--brand-navy)]/40 mt-1">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-[var(--brand-navy)] p-7 text-white">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              ScalaShop è
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug">
              Il sistema operativo della tua attività.
            </p>
            <p className="mt-3 text-white/80 leading-relaxed">
              Uno strumento unico, pensato per chi vende ogni giorno al banco. Veloce da usare,
              utile dal primo giorno e progettato per girare sul telefono che hai già in tasca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFFERENTIATION (lunga, autorevole) ---------- */

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
              {
                k: "01",
                t: "Pensato per chi sta dietro al banco",
                d: "Non per il commercialista, non per la sede. Per il titolare operativo che apre la mattina, taglia, serve e chiude la cassa la sera.",
              },
              {
                k: "02",
                t: "Mobile prima di tutto",
                d: "Lo usi dal telefono in 3 tap. Mentre sei in cassa, in laboratorio, dal fornitore. Non serve sederti al computer.",
              },
              {
                k: "03",
                t: "Una cosa fatta bene, non venti fatte a metà",
                d: "Vendite, scontrini, clienti, margini, magazzino. Solo quello che ti serve davvero per gestire l'attività. Niente moduli inutili.",
              },
              {
                k: "04",
                t: "Parla la tua lingua",
                d: "Scontrino medio, marginalità, prodotti che rendono. Concetti che usi già, non sigle e tecnicismi che ti rallentano.",
              },
              {
                k: "05",
                t: "Pronto in giornata",
                d: "Configurazione assistita, niente corsi da seguire. Lo accendi e in poche ore stai già lavorando in modo diverso.",
              },
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

/* ---------- BENEFITS ---------- */

function Benefits() {
  const items = [
    { t: "Vendite del giorno", d: "Sai in tempo reale quanto hai incassato, com'è andata la mattina e cosa puoi recuperare nel pomeriggio." },
    { t: "Scontrino medio", d: "Conosci il valore reale di ogni cliente che entra. Niente più stime fatte a fine mese." },
    { t: "Prodotti che rendono", d: "Vedi cosa vendi di più, cosa marginalizza davvero e cosa stai lavorando in perdita." },
    { t: "Clienti", d: "Sai chi compra spesso, chi non torna da settimane e chi vale la pena richiamare." },
    { t: "Margini chiari", d: "Marginalità su ogni prodotto e su ogni giornata. Senza calcoli a fine mese sul retro di uno scontrino." },
    { t: "Magazzino sotto controllo", d: "Disponibilità, prodotti e scadenze sempre aggiornati. Niente più ordini sbagliati al fornitore." },
    { t: "Ordini & prenotazioni", d: "Vassoi, ritiri e ordini WhatsApp in un'unica lista. Nessun ordine si perde più tra le chat." },
    { t: "Consegne organizzate", d: "Pianifichi e tieni traccia delle consegne senza foglietti né telefonate a vuoto." },
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
              <p className="mt-2 text-[15px] text-[var(--brand-navy)]/70 leading-relaxed">
                {it.d}
              </p>
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

          {/* visual: feed scontrini live + totale */}
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
    "quali clienti richiamare",
    "quali ordini preparare per domani",
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
          <span className="text-sm text-white/60">
            Demo disponibile fino al 31 luglio 2026
          </span>
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
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
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
        <Pain />
        <HiddenCost />
        <Positioning />
        <Differentiation />
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
