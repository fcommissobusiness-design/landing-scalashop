import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — ScalaShop" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali del sito ScalaShop ai sensi del Reg. UE 2016/679 (GDPR).",
      },
      { property: "og:title", content: "Privacy Policy — ScalaShop" },
      {
        property: "og:description",
        content: "Informativa sul trattamento dei dati personali del sito ScalaShop.",
      },
      { property: "og:url", content: "https://scalashop.lovable.app/privacy-policy" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://scalashop.lovable.app/privacy-policy" },
    ],
  }),
});

function PrivacyPolicyPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--brand-navy)]/70">
          La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento (UE)
          2016/679 (“GDPR”) agli utenti che interagiscono con il sito{" "}
          <strong>scalashop.lovable.app</strong> (di seguito il “Sito”).
        </p>

        <Section title="1. Titolare del trattamento">
          <p>
            Titolare del trattamento è <strong>ScalaShop</strong>. Per qualsiasi richiesta
            relativa al trattamento dei dati personali è possibile contattare il Titolare
            attraverso i recapiti indicati nella sezione contatti del Sito.
          </p>
        </Section>

        <Section title="2. Tipologie di dati raccolti">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Dati di navigazione</strong>: indirizzi IP, tipo di browser, sistema
              operativo, pagine visitate e orari di accesso, raccolti automaticamente per
              esigenze tecniche e di sicurezza.
            </li>
            <li>
              <strong>Dati forniti volontariamente dall’utente</strong>: nome, cognome,
              email, numero di telefono, nome dell’attività e ogni altra informazione
              inviata tramite moduli di contatto, richiesta demo o messaggistica
              (es. WhatsApp).
            </li>
          </ul>
        </Section>

        <Section title="3. Finalità e base giuridica">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Riscontrare le richieste dell’utente e fornire i servizi richiesti
              (esecuzione di misure precontrattuali — art. 6.1.b GDPR).
            </li>
            <li>
              Garantire la sicurezza e il corretto funzionamento del Sito (legittimo
              interesse — art. 6.1.f GDPR).
            </li>
            <li>
              Adempiere a obblighi di legge (art. 6.1.c GDPR).
            </li>
          </ul>
          <p>
            Il conferimento dei dati di contatto è facoltativo, ma il mancato conferimento
            rende impossibile dare seguito alle richieste dell’utente.
          </p>
        </Section>

        <Section title="4. Modalità di trattamento e conservazione">
          <p>
            I dati sono trattati con strumenti elettronici, adottando misure tecniche e
            organizzative adeguate a garantirne la sicurezza e la riservatezza. I dati
            saranno conservati per il tempo strettamente necessario alle finalità per cui
            sono stati raccolti e, in ogni caso, nel rispetto degli obblighi di legge.
          </p>
        </Section>

        <Section title="5. Destinatari dei dati">
          <p>
            I dati potranno essere trattati da soggetti autorizzati e da fornitori di
            servizi tecnici (es. hosting, infrastruttura cloud, strumenti di messaggistica)
            nominati Responsabili del trattamento ex art. 28 GDPR. I dati non sono
            diffusi né ceduti a terzi per finalità di marketing.
          </p>
        </Section>

        <Section title="6. Trasferimento dei dati extra-UE">
          <p>
            Eventuali trasferimenti di dati al di fuori dello Spazio Economico Europeo
            avverranno esclusivamente verso Paesi che garantiscono un livello di protezione
            adeguato, o sulla base delle garanzie previste dagli artt. 44 e ss. del GDPR
            (es. Clausole Contrattuali Standard della Commissione UE).
          </p>
        </Section>

        <Section title="7. Diritti dell’interessato">
          <p>
            L’utente può esercitare in qualsiasi momento i diritti previsti dagli artt.
            15–22 GDPR: accesso, rettifica, cancellazione, limitazione, opposizione e
            portabilità dei dati, nonché il diritto di revocare il consenso eventualmente
            prestato. Le richieste possono essere inviate ai recapiti del Titolare.
            L’interessato ha inoltre il diritto di proporre reclamo al Garante per la
            protezione dei dati personali (www.garanteprivacy.it).
          </p>
        </Section>

        <Section title="8. Cookie">
          <p>
            Per informazioni sull’uso dei cookie si rinvia alla{" "}
            <Link to="/cookie-policy" className="underline">Cookie Policy</Link>.
          </p>
        </Section>

        <Section title="9. Modifiche">
          <p>
            La presente informativa può essere aggiornata in qualsiasi momento. La versione
            in vigore è sempre quella pubblicata su questa pagina.
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
