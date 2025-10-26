// app/routes/finance-education.learn-basics._index.tsx
import { json } from "@remix-run/node";
import type { Route } from "./+types/learn-basics";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  const title =
    "Finance Basics | Essentials of Money and Banking | FinanceMapped";
  const description =
    "Understand money, banking, credit, interest, inflation, and market basics with clear guides and visuals. Educational only, not financial advice.";
  const url = "https://www.financemapped.com/finance-education/learn-basics";
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
  ];
}

export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

export default function LearnBasics() {
  const { nowISO } = useLoaderData<typeof loader>();

  const topics = [
    {
      t: "What is money",
      href: "/finance-education/learn-basics/what-is-money",
    },
    {
      t: "How banks work",
      href: "/finance-education/learn-basics/how-banks-work",
    },
    {
      t: "Credit & interest",
      href: "/finance-education/learn-basics/credit-and-interest",
    },
    {
      t: "Markets & prices",
      href: "/finance-education/learn-basics/markets-and-prices",
    },
    {
      t: "Inflation & policy",
      href: "/finance-education/learn-basics/inflation-and-policy",
    },
    {
      t: "Risk & stability",
      href: "/finance-education/learn-basics/risk-and-stability",
    },
  ];

  const faqs = [
    {
      q: "Is this investment advice?",
      a: "No. These materials help you learn concepts only. They do not recommend actions or specific investments.",
    },
    {
      q: "Can beginners start here?",
      a: "Yes. Lessons explain ideas step by step with real world examples.",
    },
    {
      q: "How long are the lessons?",
      a: "Most topics take just a few minutes to read and reference as needed.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.financemapped.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Finance Education",
            item: "https://www.financemapped.com/finance-education",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Learn Basics",
            item: "https://www.financemapped.com/finance-education/learn-basics",
          },
        ],
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

  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-600">
        <a href="/" className="hover:underline">
          Home
        </a>
        <span className="mx-1">›</span>
        <a href="/finance-education" className="hover:underline">
          Finance Education
        </a>
        <span className="mx-1">›</span>
        <span className="font-semibold text-slate-900">Learn Basics</span>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 pb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Learn the basics
        </h1>
        <p className="mt-2 text-slate-700">
          Build a strong foundation with short lessons and diagrams. Updated{" "}
          {new Date(nowISO).toLocaleDateString()}.
        </p>
      </header>

      {/* Topics */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((x) => (
            <a
              key={x.t}
              href={x.href}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h2 className="font-semibold text-slate-900">{x.t}</h2>
              <p className="mt-1 text-sm text-slate-700">Short read</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary className="cursor-pointer px-5 py-3">{f.q}</summary>
              <div className="px-5 pb-4 text-slate-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
