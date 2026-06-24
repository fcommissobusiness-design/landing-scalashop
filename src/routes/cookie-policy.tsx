import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — ScalaShop" },
      {
        name: "description",
        content:
          "Informativa sui cookie utilizzati dal sito ScalaShop ai sensi del Reg. UE 2016/679 (GDPR) e del Provvedimento del Garante Privacy del 10 giugno 2021.",
      },
      { property: "og:title", content: "Cookie Policy — ScalaShop" },
      {
        property: "og:description",
        content:
          "Informativa sui cookie utilizzati dal sito ScalaShop.",
      },
      { property: "og:url", content: "https://scalashop.lovable.app/cookie-policy" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://scalashop.lovable.app/cookie-policy" },
    ],
  }),
});

function CookiePolicyPage() {
  const updated = "24 giugno 2026";
  return (
    <div className="min-h-screen bg-white text-[var(--brand-navy)]">
      <header className="border-b border-[var(--brand-navy)]/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold tracking-tight hover:opacity-80">
            ← Torna alla home
          </Link>
          <span className="text-xs text-[var(--brand-navy)]/60">
            Ultimo aggiornamento: {updated}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="mt-4 text-sm text-[var(--brand-navy)]/70">
          La presente Cookie Policy è resa ai sensi degli artt. 13 e 14 del Regolamento (UE)
          2016/679 (“GDPR”) e del Provvedimento del Garante per la protezione dei dati
          personali del 10 giugno 2021 (“Linee guida cookie e altri strumenti di tracciamento”).
        </p>

        <Section title="1. Titolare del trattamento">
          <p>
            Il Titolare del trattamento dei dati raccolti tramite il sito{" "}
            <strong>scalashop.lovable.app</strong> (di seguito il “Sito”) è{" "}
            <strong>ScalaShop</strong>. Per qualsiasi richiesta relativa alla presente
            informativa è possibile scrivere all’indirizzo email indicato nei contatti del
            Sito.
          </p>
        </Section>

        <Section title="2. Cosa sono i cookie">
          <p>
            I cookie sono piccoli file di testo che i siti visitati dall’utente inviano al suo
            terminale (computer, tablet, smartphone), dove vengono memorizzati per essere poi
            ritrasmessi agli stessi siti alla successiva visita. Strumenti analoghi, come web
            beacon, pixel, identificatori locali e simili, possono essere utilizzati per
            raccogliere informazioni sul comportamento dell’utente.
          </p>
        </Section>

        <Section title="3. Tipologie di cookie utilizzati dal Sito">
          <h3 className="mt-4 font-semibold">3.1 Cookie tecnici (necessari)</h3>
          <p>
            Il Sito utilizza esclusivamente cookie tecnici necessari al corretto
            funzionamento delle pagine e all’erogazione dei servizi richiesti dall’utente
            (ad es. mantenimento della sessione, sicurezza, bilanciamento del carico,
            memorizzazione delle preferenze di navigazione). Per l’installazione di tali
            cookie non è richiesto il consenso dell’utente, ai sensi dell’art. 122 del
            Codice Privacy.
          </p>

          <h3 className="mt-4 font-semibold">3.2 Cookie analitici, di profilazione o di marketing</h3>
          <p>
            Il Sito <strong>non utilizza</strong> cookie di profilazione, di marketing o
            analitici di terze parti che richiedano il consenso preventivo dell’utente.
            Qualora in futuro venissero introdotti, la presente informativa sarà aggiornata
            e all’utente sarà richiesto un consenso libero, specifico, informato e
            inequivocabile tramite apposito banner.
          </p>
        </Section>

        <Section title="4. Cookie di terze parti">
          <p>
            Alcune funzionalità del Sito possono caricare contenuti forniti da terze parti
            (ad esempio servizi di messaggistica come WhatsApp tramite link esterno). Tali
            terze parti potrebbero, in autonomia, impostare cookie sui dispositivi degli
            utenti che accedono ai loro servizi. Il Titolare non ha controllo diretto su
            tali cookie: per maggiori informazioni si rinvia alle informative privacy delle
            rispettive piattaforme.
          </p>
        </Section>

        <Section title="5. Base giuridica">
          <p>
            La base giuridica per l’uso dei cookie tecnici è il legittimo interesse del
            Titolare a garantire il corretto funzionamento del Sito (art. 6, par. 1, lett.
            f, GDPR), nonché l’art. 122 del D.Lgs. 196/2003 e ss.mm.ii.
          </p>
        </Section>

        <Section title="6. Conservazione">
          <p>
            I cookie tecnici di sessione vengono cancellati alla chiusura del browser; i
            cookie tecnici persistenti hanno una durata limitata e definita, comunque non
            superiore a quanto strettamente necessario per le finalità per cui sono stati
            installati.
          </p>
        </Section>

        <Section title="7. Come gestire o disabilitare i cookie">
          <p>
            L’utente può in qualsiasi momento gestire, limitare o disabilitare l’uso dei
            cookie modificando le impostazioni del proprio browser. Si segnala che la
            disabilitazione dei cookie tecnici può compromettere il corretto funzionamento
            del Sito.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>
              <a className="underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
            </li>
            <li>
              <a className="underline" href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
            </li>
            <li>
              <a className="underline" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>
            </li>
            <li>
              <a className="underline" href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
            </li>
          </ul>
        </Section>

        <Section title="8. Diritti dell’interessato">
          <p>
            In qualità di interessato, l’utente ha diritto, ai sensi degli artt. 15–22 del
            GDPR, di chiedere al Titolare l’accesso ai propri dati personali, la rettifica
            o la cancellazione degli stessi, la limitazione del trattamento, di opporsi al
            trattamento e di esercitare il diritto alla portabilità dei dati. L’utente ha
            inoltre il diritto di proporre reclamo al Garante per la protezione dei dati
            personali (www.garanteprivacy.it).
          </p>
        </Section>

        <Section title="9. Modifiche alla presente Cookie Policy">
          <p>
            Il Titolare si riserva il diritto di modificare in qualsiasi momento la
            presente Cookie Policy, dandone informazione agli utenti su questa pagina. Si
            invita pertanto a consultarla regolarmente.
          </p>
        </Section>
      </main>

      <footer className="border-t border-[var(--brand-navy)]/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 py-8 text-center text-sm text-[var(--brand-navy)]/60">
          © {new Date().getFullYear()} ScalaShop ·{" "}
          <Link to="/" className="underline hover:text-[var(--brand-navy)]">Home</Link>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--brand-navy)]/80 space-y-3">
        {children}
      </div>
    </section>
  );
}
