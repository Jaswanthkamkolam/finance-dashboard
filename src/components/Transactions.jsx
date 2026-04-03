import { useState } from "react";

const Transactions = ({ transactions, setTransactions, role }) => {

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );
  let sorted = [...filtered];

if (sortType === "amount") {
  sorted.sort((a, b) => b.amount - a.amount);
} else if (sortType === "date") {
  sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
}
   const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
     <div className="flex flex-col md:flex-row gap-2 mb-4"></div>

      <input
        type="text"
        placeholder="Search category..."
        className="border p-2 mb-4 w-full dark:bg-gray-700"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  onChange={(e) => setSortType(e.target.value)}
  className="border p-2 rounded dark:bg-gray-700"
>
  <option value="">Sort By</option>
  <option value="amount">Amount</option>
  <option value="date">Date</option>
</select>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <th  className="p-3 text-left">Date</th>
            <th  className="p-3 text-left">Amount</th>
            <th  className="p-3 text-left">Category</th>
            <th  className="p-3 text-left">Type</th>
             {role === "admin" && <th className="p-3 text-center">Action</th>}
          </tr>
        </thead>

        <tbody>
          {sorted.map((t) => (
            <tr key={t.id}  className="hover:shadow-md transition">
              <td className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-800 dark:to-cyan-500">{t.date}</td>
              <td className="p-3 text-left font-semibold bg-gradient-to-r from-lime-500 to-lime-400 dark:from-lime-800 dark:to-lime-500">{t.amount.toLocaleString()}</td>
              <td className="p-3 bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-900 dark:to-emerald-500">{t.category}</td>
              <td className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-900 dark:to-gray-00">
            <span
              className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${t.type === "income"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"}
              `}
            >
              {t.type}
            </span>
          </td>

               {role === "admin" && (
                <td className="p-3 text-center bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-800 dark:to-blue-700">
                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() =>
            setTransactions([...transactions, {
              id: Date.now(),
              date: "2026-04-01",
              amount: 1000,
              category: "New",
              type: "income"
            }])
          }
        >
          Add Transaction
        </button>
      )}

    </div>
  );
};

export default Transactions;