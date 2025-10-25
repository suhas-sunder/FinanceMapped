// app/routes/_index.tsx
import { json } from "@remix-run/node";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import logo from "../client/assets/images/finance-mapped-education-history-logo.png";

export function meta({}: Route.MetaArgs) {
  const title =
    "FinanceMapped | Learn How Money Works with Knowledge Maps and History";
  const description =
    "FinanceMapped is an educational site that explains how money, markets, and banking systems work. Read clear explainers, explore finance history, and follow knowledge maps that connect ideas.";
  const url = "https://financemapped.com/";
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

export function loader({ context }: Route.LoaderArgs) {
  return json({
    message: context.VALUE_FROM_EXPRESS,
    nowISO: new Date().toISOString(),
  });
}

export default function Home({}: Route.ComponentProps) {
  const { message, nowISO } = useLoaderData<typeof loader>();

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
        url: "https://financemapped.com/",
        description:
          "Educational explainers and finance history with knowledge maps that connect ideas. Learn how money and markets work.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://financemapped.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "FinanceMapped",
        url: "https://financemapped.com/",
        logo: "https://financemapped.com/logo.png",
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
      href: "/learn/core/what-is-money",
    },
    {
      t: "How banks work",
      d: "Deposits, lending, payments, and safeguards.",
      href: "/learn/core/how-banks-work",
    },
    {
      t: "Credit and interest",
      d: "Borrowing, risk, and the price of money over time.",
      href: "/learn/core/credit-and-interest",
    },
    {
      t: "Markets and prices",
      d: "Supply, demand, and how prices move.",
      href: "/learn/core/markets-and-prices",
    },
    {
      t: "Inflation and policy",
      d: "Why prices rise and how policy responds.",
      href: "/learn/core/inflation-and-policy",
    },
    {
      t: "Risk and stability",
      d: "Shocks, safeguards, and systemic risks.",
      href: "/learn/core/risk-and-stability",
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

  const readingPaths = [
    {
      t: "Start here path",
      d: "Three short explainers that set the stage.",
      href: "/paths/start-here",
    },
    {
      t: "Banking foundations path",
      d: "Follow how banks evolved and why they matter.",
      href: "/paths/banking-foundations",
    },
    {
      t: "Crises and lessons path",
      d: "Read significant events and what they revealed.",
      href: "/paths/crises-and-lessons",
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Announcement */}
      <div className="w-full border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-slate-700">
          New history collections and knowledge maps added{" "}
          {new Date(nowISO).toLocaleDateString()}.
        </div>
      </div>

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
                <img
                  src={logo}
                  alt="FinanceMapped"
                  className="inline h-10 w-10 mr-3 mb-2"
                />
                Understand money with clear knowledge maps and history
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Read explainers that connect ideas. Explore how systems work and
                how they came to be. FinanceMapped is for learning and context
                only. It is not investment advice.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/learn/core"
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
              href: "/learn/core",
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
          FinanceMapped is written for learners who want clarity and context.
          It works well for classes and independent study.
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
          Knowledge maps organize ideas, history adds depth, and short explainers
          keep reading focused.
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
                href="/learn/core"
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

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-700">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} FinanceMapped</div>
            <div className="text-slate-500">
              {message ? (
                <span aria-live="polite">{message}</span>
              ) : (
                <span>Educational finance and history</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
