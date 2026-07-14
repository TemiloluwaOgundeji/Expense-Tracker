export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold">
          💰 Expense Tracker
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back!
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

          <h2 className="text-lg font-semibold">
            Total Spent This Month
          </h2>

          <p className="mt-3 text-5xl font-bold text-green-600">
            ₦0.00
          </p>

        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">

          <h2 className="text-xl font-semibold">
            Recent Expenses
          </h2>

          <p className="mt-4 text-gray-500">
            No expenses yet.
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
            + Add Expense
          </button>

        </div>

      </div>
    </main>
  );
}