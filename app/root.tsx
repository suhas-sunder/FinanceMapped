import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  redirect,
  NavLink, // ⟵ add this
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Footer from "./client/navigation/Footer";

import logo from "./client/assets/images/finance-mapped-education-history-logo.png";
import { useState } from "react";
/* ---------- Trailing slash helpers (one place, app-level) ---------- */
function needsStrip(pathname: string) {
  if (pathname === "/") return false;
  if (!/\/+$/.test(pathname)) return false;
  const last = pathname.split("/").filter(Boolean).pop() ?? "";
  const looksLikeFile = /\.[a-zA-Z0-9]+$/.test(last);
  return !looksLikeFile;
}
function strip(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

/* ---------- Loader does the canonical 301 ---------- */
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  if (needsStrip(url.pathname)) {
    url.pathname = strip(url.pathname);
    return redirect(url.pathname + url.search, { status: 301 });
  }
  return null;
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Finance Education", href: "/finance-education/learn-basics" },
    // { name: "History", href: "/history" },
    // { name: "Knowledge Maps", href: "/maps" },
    // { name: "Games", href: "/learn/games/concept-match" },
    // { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-[#0B1B2B] border-b border-slate-700/40 text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="FinanceMapped" className="h-8 w-8" />
          <span className="font-semibold text-lg">FinanceMapped</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-teal-300 pb-1"
                    : "text-slate-200 hover:text-teal-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0B1B2B] border-t border-slate-700/40">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm transition ${
                  isActive
                    ? "text-teal-300 bg-slate-900/20"
                    : "text-slate-200 hover:bg-slate-900/20"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
