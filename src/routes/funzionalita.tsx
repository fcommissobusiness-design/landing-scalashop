import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

const CANONICAL = "https://scalashopgestionale.it/funzionalita";
const WHATSAPP_URL =
  "https://wa.me/393883810008?text=Ciao%2C%20vorrei%20sapere%20di%20pi%C3%B9%20sulle%20funzionalit%C3%A0%20di%20ScalaShop";

const moduli = [
  {
    t: "Cassa e scontrini",
    d: "Registri le vendite al banco in pochi tocchi, anche per i prodotti a peso. Ogni vendita aggiorna in automatico incassi e magazzino.",
  },
  {
    t: "Magazzino",
    d: "Tieni sotto controllo le giacenze, le entrate merci e i prodotti in esaurimento. Sai sempre cosa hai e cosa sta per finire.",
  },
  {
    t: "Ordini e riordini",
    d: "Gestisci gli ordini ai fornitori e ricevi il promemoria di quando riordinare, così eviti sprechi e scaffali vuoti.",
  },
  {
    t: "Clienti",
    d: "Raccogli i clienti abituali e le loro preferenze. Ritrovi al volo chi ti ha chiesto un prodotto o un'ordinazione per il weekend.",
  },
  {
    t: "Margini e report",
    d: "Vedi quanto guadagni davvero su ogni prodotto e quali vanno meglio, con report chiari sull'andamento dell'attività.",
  },
  {
    t: "Fatture e documenti",
    d: "Alleghi e ritrovi le fatture dei fornitori e i documenti della tua attività, senza cercarli tra raccoglitori di carta.",
  },
];

export const Route = createFileRoute("/funzionalita")({
  head: () => ({
    meta: [
      { title: "Funzionalità di ScalaShop, il gestionale per alimentari" },
      {
        name: "description",
        content:
          "Le funzionalità di ScalaShop: cassa e scontrini, magazzino, ordini e riordini, clienti, margini e report, fatture. Il gestionale completo per gastronomie, salumerie e botteghe alimentari.",
      },
      { property: "og:title", content: "Funzionalità di ScalaShop" },
      {
        property: "og:description",
        content:
          "Cassa, magazzino, ordini, clienti, margini e fatture in un unico gestionale per il food retail artigianale.",
      },
      { property: "og:image", content: logoAsset.url },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Funzionalita,
});

function Funzionalita() {
  return (
    <main className="min-h-screen bg-white text-[var(--brand-navy)]">
      <header className="border-b border-[var(--brand-navy)]/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src={logoAsset.url} alt="ScalaShop" className="h-10 object-contain" />
          </Link>
          <a
            href={WHATSAPP_URL}
            className="rounded-lg bg-[var(--brand-orange)] px-4 py-2 text-sm font-semibold text-white"
          >
            Parla con noi
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Le funzionalità di ScalaShop
        </h1>
        <p className="mt-4 text-lg text-[var(--brand-navy)]/70">
          Tutto quello che serve a una bottega alimentare per lavorare meglio,
          in un unico sistema pensato per il food retail artigianale italiano.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {moduli.map((m) => (
            <div
              key={m.t}
              className="rounded-2xl border border-[var(--brand-navy)]/10 p-6"
            >
              <h2 className="text-xl font-bold text-[var(--brand-navy)]">
                {m.t}
              </h2>
              <p className="mt-2 text-[var(--brand-navy)]/80">{m.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[var(--brand-navy)]/80">
          Vuoi capire come si usa nel concreto al banco?{" "}
          <Link to="/come-funziona" className="font-semibold text-[var(--brand-orange)]">
            Scopri come funziona ScalaShop
          </Link>
          .
        </p>

        <div className="mt-12 rounded-2xl bg-[var(--brand-navy)] p-8 text-center">
          <p className="text-xl font-bold text-white">
            Provalo nella tua attività
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="registrati"
              className="rounded-lg bg-[var(--brand-orange)] px-6 py-3 font-semibold text-white"
            >
              Inizia subito
            </Link>
            <a
              href={WHATSAPP_URL}
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t border-[var(--brand-navy)]/10 py-8 text-center text-sm text-[var(--brand-navy)]/60">
        <Link to="/" className="underline">
          ScalaShop
        </Link>{" "}
        · Il gestionale per il food retail artigianale italiano
      </footer>
    </main>
  );
}
