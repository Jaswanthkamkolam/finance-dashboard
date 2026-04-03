const SummaryCards = ({ transactions }) => {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="bg-green-500 text-white dark:bg-green-800 p-4 rounded-xl shadow hover:scale-105 transition">
        <h2 className="font-sans">Total Balance</h2>
        <p>₹{balance}</p>
      </div>

      <div className="bg-blue-500 text-white dark:bg-blue-700 p-4 rounded-xl shadow hover:scale-105 transition">
        <h2 className="font-sans">Income</h2>
        <p>₹{income}</p>
      </div>

      <div className="bg-red-500 text-white dark:bg-red-800 p-4 rounded-xl shadow hover:scale-105 transition">
        <h2 className="font-sans">Expenses</h2>
        <p>₹{expense}</p>
      </div>

    </div>
  );
};

export default SummaryCards;