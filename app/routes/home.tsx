import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "FinanceMapped | Learn How Money Works with Knowledge Maps and History";
  const description =
    "FinanceMapped is an educational site that explains how money, markets, and banking systems work. Read clear explainers, explore finance history, and follow knowledge maps that connect ideas.";
  const url = "https://www.financemapped.com";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "finance history, how money works, financial systems explained, banking history, markets explained, economic history, educational finance articles, beginner economics, knowledge maps, monetary policy history",
    },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "theme-color", content: "#0B1B2B" },
  ];
}

export default function Home({}: Route.ComponentProps) {
  const faqs = [
    {
      q: "What is FinanceMapped?",
      a: "An educational site that organizes financial knowledge. Read clear explainers, explore historical events, and follow knowledge maps that connect ideas across money, banking, and markets.",
    },
    {
      q: "Do you give financial advice?",
      a: "No. FinanceMapped provides learning resources and historical context only. Nothing here is investment advice or a recommendation to act.",
    },
    {
      q: "Who is it for?",
      a: "Curious learners, students, teachers, and anyone who wants to understand how money systems work and how they developed over time.",
    },
    {
      q: "What are knowledge maps?",
      a: "Visual outlines that connect related concepts. They help you see how topics fit together so reading paths feel clear.",
    },
    {
      q: "How should I start?",
      a: "Begin with the Core Concepts collection, then browse History to see how ideas evolved. Use the Knowledge Maps to choose a path.",
    },
  ];

  // Structured data: Website, Organization, FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "FinanceMapped",
        url: "https://www.financemapped.com/",
        description:
          "Educational explainers and finance history with knowledge maps that connect ideas. Learn how money and markets work.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.financemapped.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "FinanceMapped",
        url: "https://www.financemapped.com/",
        logo: "https://www.financemapped.com/finance-mapped-education-history-logo.png",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const coreConcepts = [
    {
      t: "What is money",
      d: "Value, exchange, and why societies use currency.",
      href: "/finance-education/learn-basics/#what-is-money",
    },
    {
      t: "How banks work",
      d: "Deposits, lending, payments, and safeguards.",
      href: "/finance-education/learn-basics/#how-banks-work",
    },
    {
      t: "Credit and interest",
      d: "Borrowing, risk, and the price of money over time.",
      href: "/finance-education/learn-basics/#credit-and-interest",
    },
    {
      t: "Markets and prices",
      d: "Supply, demand, and how prices move.",
      href: "/finance-education/learn-basics/#markets-and-prices",
    },
    {
      t: "Inflation and policy",
      d: "Why prices rise and how policy responds.",
      href: "/finance-education/learn-basics/#inflation-and-policy",
    },
    {
      t: "Risk and stability",
      d: "Shocks, safeguards, and systemic risks.",
      href: "/finance-education/learn-basics/#risk-and-stability",
    },
  ];

  const history = [
    {
      t: "From coinage to paper",
      d: "The rise of money and early banking houses.",
      href: "/history/coinage-to-paper",
    },
    {
      t: "Gold standard to fiat",
      d: "Why convertibility ended and what replaced it.",
      href: "/history/gold-to-fiat",
    },
    {
      t: "Tulip mania",
      d: "Speculation, narratives, and the power of crowds.",
      href: "/history/tulip-mania",
    },
    {
      t: "1929 crash",
      d: "Leverage, panic, and lessons from the Great Depression.",
      href: "/history/1929-crash",
    },
    {
      t: "The 2008 crisis",
      d: "Housing risk, liquidity runs, and policy responses.",
      href: "/history/2008-crisis",
    },
    {
      t: "Digital payments era",
      d: "Cards, networks, and real time money movement.",
      href: "/history/digital-payments",
    },
  ];

  const knowledgeMaps = [
    {
      t: "Money systems map",
      d: "Money, banking, and policy at a glance.",
      href: "/maps/money-systems",
    },
    {
      t: "Credit ecosystem map",
      d: "Borrowers, lenders, risk, and pricing.",
      href: "/maps/credit-ecosystem",
    },
    {
      t: "Market structure map",
      d: "Exchanges, orders, and instruments.",
      href: "/maps/market-structure",
    },
    {
      t: "Inflation storyline map",
      d: "Drivers, transmission, and effects on households.",
      href: "/maps/inflation-storyline",
    },
  ];

  const learningGames = [
    {
      t: "Concept match",
      d: "Match terms and definitions to reinforce memory.",
      href: "/learn/games/concept-match",
    },
    {
      t: "Timeline builder",
      d: "Place major events in order to see cause and effect.",
      href: "/learn/games/timeline-builder",
    },
    {
      t: "Map quiz",
      d: "Fill in nodes on a knowledge map from memory.",
      href: "/learn/games/map-quiz",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <script
        aria-hidden="true"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0B1B2B]">
        {/* Soft gradient accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #27E0C4 0%, rgba(39,224,196,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7CD4FD 0%, rgba(124,212,253,0) 70%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 pt-14 pb-12">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Understand money with clear knowledge maps and history
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Read explainers that connect ideas. Explore how systems work and
                how they came to be. FinanceMapped is for learning and context
                only. It is not investment advice.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/finance-education/learn-basics"
                  className="inline-flex items-center rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  Read core concepts
                </a>
                <a
                  href="/history"
                  className="inline-flex items-center rounded-xl border border-teal-300 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  Browse finance history
                </a>
                <a
                  href="/maps"
                  className="inline-flex items-center rounded-xl border border-slate-500/60 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  View knowledge maps
                </a>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5 backdrop-blur">
                <h2 className="text-sm font-semibold text-teal-200">
                  How to use this site
                </h2>
                <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-slate-200">
                  <li>Skim the Start Here path</li>
                  <li>Open a knowledge map to see connections</li>
                  <li>Read one history piece to add context</li>
                </ol>
                <p className="mt-2 text-xs text-slate-400">
                  Educational content for learning and research only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Core concepts",
              d: "Clear explainers about money, banking, and markets.",
              href: "/finance-education/learn-basics",
            },
            {
              t: "History",
              d: "Events and ideas that shaped modern finance.",
              href: "/history",
            },
            {
              t: "Knowledge maps",
              d: "Visual outlines that connect related topics.",
              href: "/maps",
            },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{c.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              <div className="mt-3 text-xs font-semibold text-teal-600 group-hover:translate-x-0.5 transition">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Core Concepts */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Core concepts</h2>
        <p className="mt-2 text-slate-700">
          Start with the ideas that show up everywhere. These short articles use
          plain language and references for further reading.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreConcepts.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* History Collections */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Finance history</h2>
        <p className="mt-2 text-slate-700">
          Read how money systems evolved and why that matters today. History
          helps connect concepts to real events.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {history.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Knowledge Maps */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Knowledge maps</h2>
        <p className="mt-2 text-slate-700">
          Use these outlines to see how topics fit together. They guide reading
          without telling you what to do with your money.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeMaps.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Optional Learning Games */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900">Learning games</h2>
        <p className="mt-2 text-slate-700">
          Short activities that reinforce ideas. These are for practice and
          memory only.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningGames.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm transition hover:bg-teal-100"
            >
              <h3 className="text-base font-semibold text-[#0B1B2B]">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-800">{x.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Who we help</h2>
        <p className="mt-3 text-slate-700">
          FinanceMapped is written for learners who want clarity and context. It
          works well for classes and independent study.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Students",
              d: "Read clear explainers with sources and timelines.",
            },
            {
              t: "Teachers",
              d: "Use reading paths and maps to plan lessons.",
            },
            {
              t: "Curious readers",
              d: "Explore systems and stories without jargon.",
            },
          ].map((x) => (
            <article
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{x.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-slate-900">Why it works</h2>
        <p className="mt-3 text-slate-700">
          Knowledge maps organize ideas, history adds depth, and short
          explainers keep reading focused.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-slate-800">
          <li>Plain language explainers with references</li>
          <li>Knowledge maps that connect related topics</li>
          <li>History collections for context and insight</li>
          <li>Reading paths that guide progress</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-[#0B1B2B] bg-[#0B1B2B] p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">Start reading</h2>
              <p className="mt-1 text-sm text-slate-200">
                Open a core concept, then follow a knowledge map into history.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/finance-education/learn-basics"
                className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Core concepts
              </a>
              <a
                href="/maps"
                className="rounded-xl border border-teal-300 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                Knowledge maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Learning Explorer Section - Drop Above FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        {/* Section Header */}
        <header>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore how money and modern finance evolved
          </h2>
          <p className="mt-3 text-lg text-slate-700 max-w-3xl">
            FinanceMapped helps you learn the story behind our financial world.
            You will see how money systems grew, how crises shaped policy, and
            how ideas connect from ancient trade to digital payments.
          </p>
        </header>

        {/* Key Insight Callout */}
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
          <p className="text-base font-semibold text-[#0B1B2B]">
            Finance is a long journey. It did not appear fully formed. It
            developed over time through innovation, trust, conflict,
            uncertainty, and problem solving.
          </p>
        </div>

        {/* Journey Block: Origins of Money */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> How did money begin
          </h3>
          <p className="text-slate-700">
            The first money was not paper or numbers in a bank. It began as
            items that people trusted to hold value. Metal coins stamped by
            authorities made trade easier across distance. Later, receipts for
            stored gold became widely accepted as claims to real value.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                t: "Barter to exchange",
                d: "Trade moves beyond matching goods directly",
              },
              {
                t: "Coins establish trust",
                d: "Stamped metal proved weight and authenticity",
              },
              {
                t: "Paper receipts",
                d: "Storage notes evolve into money itself",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <div className="font-semibold text-slate-900">{x.t}</div>
                <div className="mt-1 text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Journey Block: Birth of Banking */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> Why do banks exist
          </h3>
          <p className="text-slate-700">
            Banks did not start as giant institutions. They began as safe places
            to store coin. People realized banks could also lend money to others
            who needed it. This created a cycle that supported business growth
            and increased prosperity.
          </p>

          {/* Timeline Style */}
          <div className="border-l-2 border-teal-400 ml-2 pl-6 space-y-6">
            {[
              {
                year: "1400s",
                label: "Early merchant banks in Europe",
              },
              {
                year: "1600s",
                label: "Central banks introduced to stabilize payment systems",
              },
              {
                year: "1900s",
                label: "Deposit insurance improves public confidence",
              },
              {
                year: "Today",
                label: "Digital banking allows instant transactions worldwide",
              },
            ].map((i) => (
              <div key={i.year}>
                <div className="font-semibold text-slate-900">{i.year}</div>
                <div className="text-slate-600 text-sm">{i.label}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Journey Block: Markets and risk */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> Why do markets rise and
            fall
          </h3>
          <p className="text-slate-700">
            Markets create places where investors buy and sell ownership in
            companies or debt issued by governments. Prices move when
            expectations change. These movements can be smooth or sudden,
            sometimes leading to major disruptions like the crash of 1929 or the
            financial crisis of 2008.
          </p>
          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-slate-700 bg-slate-50 p-4 rounded-lg">
            Markets reflect stories about the future. Fear and optimism can move
            prices more than logic alone.
          </blockquote>
        </article>

        {/* Connections Block */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900">
            How ideas connect
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>
              Money systems support banks by giving them trusted currency to
              move
            </li>
            <li>Banks influence markets through lending and liquidity</li>
            <li>Crises force reforms that shape future policy and stability</li>
            <li>Payment networks connect economies and raise new risks</li>
          </ul>
          <p className="mt-3 text-slate-700">
            Understanding these links helps make financial news and economic
            change easier to interpret.
          </p>
        </div>

        {/* Era Callouts */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> Crises that changed the
            rules
          </h3>
          <p className="text-slate-700">
            Financial shock often leads to reform. Each disruption reveals
            weaknesses in the system and reshapes how finance works.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Great Depression",
                desc: "Depositors rushed to withdraw money. Deposit insurance emerged to restore trust.",
              },
              {
                title: "1970s inflation",
                desc: "Prices surged. Central banks adopted new policy tools to guide stability.",
              },
              {
                title: "2008 crisis",
                desc: "Housing and credit stress exposed global financial risks. Regulations updated again.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="font-semibold text-slate-900">{x.title}</div>
                <div className="mt-1 text-slate-700 text-sm">{x.desc}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Final Exploratory CTA */}
        <div className="rounded-2xl border border-[#0B1B2B] bg-[#0B1B2B] p-6 text-white shadow-sm">
          <h4 className="text-lg font-bold">Continue your exploration</h4>
          <p className="text-sm mt-2 text-slate-200">
            Choose a reading path to see how systems evolve over time or follow
            a single idea through history. Explore confidently. Everything here
            is built for education and curiosity.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="/start-here"
              className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95"
            >
              Start here
            </a>
            <a
              href="/history"
              className="rounded-xl border border-teal-300 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore history
            </a>
          </div>
        </div>
      </section>

      {/* Extended Exploration Section - Additional 1000+ words */}
      <section className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        {/* Section Intro */}
        <header>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How financial systems grow, adapt, and connect the world
          </h2>
          <p className="mt-3 text-lg text-slate-700 max-w-3xl">
            The financial system is more than banks and markets. It is a living
            network that responds to risk, innovation, global trade, and the
            everyday needs of households and businesses. Understanding how these
            systems evolved helps us see the logic behind modern finance.
          </p>
        </header>

        {/* Section: Payment Evolution */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> How payments transformed
            the world
          </h3>
          <p className="text-slate-700">
            Early trade required slow physical exchange of coins or goods. Over
            centuries, payment systems evolved to move value faster and further.
            Checks gave people a safe way to pay without carrying large amounts
            of metal. Cards introduced rapid point of sale transactions and
            global networks. Today, digital payments are shaping entirely new
            expectations of speed, security, and availability.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Checks and clearing houses",
                d: "Organized channels ensured money could move between banks reliably.",
              },
              {
                t: "Cards and networks",
                d: "Shared standards turned local payments into global ones.",
              },
              {
                t: "Instant digital transfers",
                d: "Mobile banking and online commerce reshaped daily life.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <div className="font-semibold text-slate-900">{x.t}</div>
                <div className="mt-1 text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Section: Trust and Institutions */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> Why trust matters in
            finance
          </h3>
          <p className="text-slate-700">
            Financial systems rely on confidence. People must believe banks will
            store their money safely, markets will record trades correctly, and
            currencies will retain value. Institutions exist to protect
            stability, and their credibility must be earned and maintained. When
            trust breaks, systems adjust.
          </p>

          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-slate-700 bg-slate-50 p-4 rounded-lg">
            Trust is the invisible foundation of modern finance. Without it,
            money loses meaning.
          </blockquote>

          <ul className="space-y-2 list-disc list-inside text-sm text-slate-700">
            <li>Bank supervision helps ensure safety and soundness</li>
            <li>
              Central banks act as lenders of last resort when panic rises
            </li>
            <li>
              Deposit guarantees protect households from catastrophic loss
            </li>
            <li>Transparency rules strengthen fair markets</li>
          </ul>
        </article>

        {/* Section: Policy and Stability */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> How policy shapes financial
            stability
          </h3>
          <p className="text-slate-700">
            Financial policies are responses to experience. Some rules prevent
            excess risk. Others ensure the system supports growth and adapts to
            change. Policies evolve as new challenges appear and as technology
            creates new opportunities.
          </p>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-800 text-sm">
              <strong>Policy examples across eras:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 ml-4 list-disc">
              <li>
                Capital rules require banks to hold buffers against losses
              </li>
              <li>Consumer protections address information imbalances</li>
              <li>Global accords reduce coordination risk in crises</li>
              <li>Digital identity and cybersecurity protect payment access</li>
            </ul>
          </div>
        </article>

        {/* Section: Global Finance */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> Finance without borders
          </h3>
          <p className="text-slate-700">
            Money, goods, and investments travel across countries. Exchange
            rates allow one currency to be traded for another. International
            institutions help balance cooperation and competition. Global
            finance has connected economies closer than ever, creating
            opportunities for growth and challenges for stability.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Exchange networks",
                desc: "Currency conversion enables global trade to operate smoothly.",
              },
              {
                title: "Cross border investment",
                desc: "Capital flows shape economic outcomes in distant places.",
              },
              {
                title: "Shared policies",
                desc: "Cooperation can reduce risk but requires negotiation.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="font-semibold text-slate-900">{x.title}</div>
                <div className="mt-1 text-slate-700 text-sm">{x.desc}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Section: Technology and the Future */}
        <article className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-teal-500">○</span> How technology keeps
            reshaping finance
          </h3>
          <p className="text-slate-700">
            Technology has always changed how money moves. From printing presses
            to chip cards to smartphones, each innovation influences what people
            expect from the financial system. New technologies bring new
            questions for trust, privacy, speed, and oversight.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="font-semibold text-slate-900 mb-2 text-sm">
              Questions shaping the future:
            </div>
            <ul className="space-y-2 list-disc list-inside text-sm text-slate-700">
              <li>
                How will digital ledgers influence settlement and record keeping
              </li>
              <li>What role will governments play in digital currencies</li>
              <li>How do payment innovations reach underserved regions</li>
              <li>How can systems stay safe from evolving threats</li>
            </ul>
          </div>
        </article>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-slate-50">
              <summary className="cursor-pointer list-none px-5 py-4 font-medium">
                {f.q}
              </summary>
              <div className="px-5 pb-5 text-slate-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
