// app/routes/finance-education._index.tsx
import { json } from "@remix-run/node";
import type { Route } from "./+types/index";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  const title = "Finance Education | Learn How Money Works | FinanceMapped";
  const description =
    "Explore beginner friendly finance education. Learn the foundations of money systems, banking, credit, markets, and financial decision making.";
  const url = "https://www.financemapped.com/finance-education";
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

export default function FinanceEducation() {
  const { nowISO } = useLoaderData<typeof loader>();

  const faqs = [
    {
      q: "What is finance education?",
      a: "It explains how money, banking, and markets work so people can make informed decisions in daily life.",
    },
    {
      q: "Who is this for?",
      a: "Students, teachers, and curious readers who want clear explanations without advice or hype.",
    },
    {
      q: "Does this include personal finance?",
      a: "Yes, foundational topics like budgeting and interest are included, always from an educational perspective.",
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

  const sections = [
    {
      t: "Learn basics",
      d: "Short explainers to build financial awareness.",
      href: "/finance-education/learn-basics",
    },
    {
      t: "Financial glossary",
      d: "Clear definitions for common terms.",
      href: "/finance-education/glossary",
    },
    {
      t: "Examples & diagrams",
      d: "Simple visuals that make concepts stick.",
      href: "/finance-education/examples",
    },
  ];

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
        <span className="font-semibold text-slate-900">Finance Education</span>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-4 pb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Finance Education
        </h1>
        <p className="mt-2 text-slate-700">
          Start learning how money moves through the world. Updated{" "}
          {new Date(nowISO).toLocaleDateString()}.
        </p>
      </header>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {sections.map((s) => (
            <a
              key={s.t}
              href={s.href}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h2 className="font-semibold text-slate-900">{s.t}</h2>
              <p className="mt-1 text-sm text-slate-700">{s.d}</p>
              <div className="mt-2 text-xs font-semibold text-teal-600 group-hover:translate-x-0.5 transition">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-10">
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
