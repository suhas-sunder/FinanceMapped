import { useRouteLoaderData } from "react-router";

export default function Footer() {
  const rootData = useRouteLoaderData("root") as
    | { message?: string }
    | undefined;
  const message = rootData?.message;

  return (
    <>
      {/* Educational Disclaimer */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Educational Disclaimer
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            FinanceMapped provides learning resources and historical context
            only. Nothing on this site is investment advice, financial
            recommendations, or guidance to act. Always verify information and
            make decisions based on your own research or advice from qualified
            professionals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t  border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-700">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} FinanceMapped</div>
            <div className="text-slate-500">
              {message ? (
                <span aria-live="polite">{message}</span>
              ) : (
                <span>🗺️ Educational finance and history mapped </span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
