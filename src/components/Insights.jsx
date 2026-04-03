const Insights = ({ transactions }) => {

  const categories = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-xl shadow hover:scale-105 transition">
      <h2 className="font-sans">Insights</h2>

      {highest && (
        <p>Highest Spending: {highest[0]} (₹{highest[1]})</p>
      )}

    </div>
  );
};

export default Insights;