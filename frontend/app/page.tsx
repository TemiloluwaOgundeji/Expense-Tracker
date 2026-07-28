import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-xl bg-white p-10 shadow-lg text-center">

        <h1 className="mb-4 text-5xl font-bold text-slate-900">
          💰 Expense Tracker
        </h1>

        <p className="mb-8 text-gray-600">
          Track shared expenses with your partner.
        </p>

        <Link
          href="/dashboard"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>

      </div>
    </main>
  );
}