"use client";

interface FilterBarProps {
  category: string;
  paidBy: string;
  onCategoryChange: (value: string) => void;
  onPaidByChange: (value: string) => void;
}

export default function FilterBar({
  category,
  paidBy,
  onCategoryChange,
  onPaidByChange,
}: FilterBarProps) {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Paid By
        </label>

        <select
          value={paidBy}
          onChange={(e) => onPaidByChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
        >
          <option value="All">Everyone</option>
          <option value="Me">Me</option>
          <option value="Partner">Partner</option>
        </select>
      </div>
    </div>
  );
}