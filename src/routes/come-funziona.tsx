import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/scalashop-logo.png.asset.json";

const CANONICAL = "https://scalashopgestionale.it/come-funziona";
const WHATSAPP_URL =
  "https://wa.me/393883810008?text=Ciao%2C%20vorrei%20provare%20ScalaShop%20per%20la%20mia%20attivit%C3%A0";

const faq = [
  {
    q: "ScalaShop va bene per la mia gastronomia o salumeria?",
    a: "Sì. ScalaShop è pensato per gastronomie, salumerie, panetterie, botteghe alimentari e negozi di prodotti tipici. Gestisce vendite al banco, prodotti a peso, ordini e riordini, clienti e margini, senza richiedere competenze tecniche.",
  },
  {
    q: "Devo installare qualcosa o comprare un registratore nuovo?",
    a: "No. ScalaShop funziona da browser su telefono, tablet e computer. Puoi iniziare subito con quello che hai già in negozio, senza installazioni e senza hardware dedicato.",
  },
  {
    q: "Quanto tempo serve per partire?",
    a: "L'attivazione avviene in giornata. Ti registri, configuri l'attività in pochi minuti e sei operativo al banco lo stesso giorno.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. I dati della tua attività sono sincronizzati in modo sicuro e sempre disponibili dai tuoi dispositivi, così hai lo stesso quadro aggiornato dal telefono, dal PC e dal tablet.",
  },
];

export const Route = createFileRoute("/come-funziona")({
  head: () => ({
    meta: [
      { title: "Come funziona ScalaShop, il gestionale per negozi alimentari" },
      {
        name: "description",
        content:
          "Come funziona ScalaShop: il gestionale per gastronomie, salumerie e botteghe alimentari. Vendite al banco, magazzino, ordini, clienti e margini in un unico sistema, anche dal telefono.",
      },
      { property: "og:title", content: "Come funziona ScalaShop" },
      {
        property: "og:description",
        content:
          "Dalla registrazione all'uso al banco: come ScalaShop ti fa gestire vendite, magazzino e ordini della tua attività alimentare.",
      },
      { property: "og:image", content: logoAsset.url },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ComeFunziona,
});

function ComeFunziona() {
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
          Come funziona ScalaShop
        </h1>
        <p className="mt-4 text-lg text-[var(--brand-navy)]/70">
          ScalaShop è il gestionale per gastronomie, salumerie, panetterie e
          botteghe alimentari. Mette vendite al banco, magazzino, ordini,
          clienti e margini in un unico posto, consultabile anche dal telefono
          mentre sei dietro al bancone.
        </p>

        <h2 className="mt-10 text-2xl font-bold">In quattro passaggi</h2>
        <ol className="mt-4 space-y-5">
          <li>
            <span className="font-semibold text-[var(--brand-orange)]">1. Ti registri.</span>{" "}
            Inserisci nome, attività e contatti e accedi subito a ScalaShop.
            Nessuna installazione, nessun hardware da comprare.
          </li>
          <li>
            <span className="font-semibold text-[var(--brand-orange)]">2. Configuri l'attività.</span>{" "}
            Imposti i tuoi prodotti, anche quelli a peso, i reparti e i
            fornitori. In pochi minuti hai il tuo negozio pronto.
          </li>
          <li>
            <span className="font-semibold text-[var(--brand-orange)]">3. Lavori al banco.</span>{" "}
            Registri vendite e scontrini dal tablet o dal telefono, tieni
            traccia di clienti e ordini, segni gli incassi della giornata.
          </li>
          <li>
            <span className="font-semibold text-[var(--brand-orange)]">4. Tieni tutto sotto controllo.</span>{" "}
            Vedi margini, prodotti più venduti e quando riordinare, con i dati
            sempre aggiornati e sincronizzati sui tuoi dispositivi.
          </li>
        </ol>

        <h2 className="mt-10 text-2xl font-bold">Per chi è pensato</h2>
        <p className="mt-4 text-[var(--brand-navy)]/80">
          ScalaShop nasce per il food retail artigianale italiano: gastronomie,
          salumerie e formaggi, panetterie e forni, botteghe di prodotti tipici,
          piccoli alimentari di quartiere. Attività dove si vende a peso, si
          riordina spesso e il tempo per la burocrazia è poco.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Perché conviene</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--brand-navy)]/80">
          <li>Smetti di tenere i conti tra carta, chat e memoria.</li>
          <li>Sai davvero quanto guadagni su ogni prodotto.</li>
          <li>Riordini al momento giusto, senza sprechi e senza rotture di stock.</li>
          <li>Hai tutta l'attività in tasca, anche quando non sei in negozio.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold">Domande frequenti</h2>
        <div className="mt-4 space-y-6">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-1 text-[var(--brand-navy)]/80">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--brand-navy)] p-8 text-center">
          <p className="text-xl font-bold text-white">
            Pronto a provare ScalaShop nella tua attività?
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
