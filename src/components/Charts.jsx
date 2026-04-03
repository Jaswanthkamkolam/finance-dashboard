import { LineChart, Line, PieChart, Pie, Cell, Tooltip,CartesianGrid,XAxis,YAxis,Legend,ResponsiveContainer } from "recharts";
const COLORS = ["#4f46e5", "#22c55e", "#ef4444", "#f59e0b", "#06b6d4"];
const Charts = ({ transactions }) => {

   let balance = 0;
  const lineData = transactions.map(t => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return { ...t, balance };
  });
  const categoryMap = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });
  const pieData = Object.keys(categoryMap).map(key => ({
    name: key,
    value: categoryMap[key]
  }));

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow h-72">
        <h2 className="font-bold mb-2">Balance Trend</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={lineData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />
            <YAxis />

            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
             </LineChart>
             </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow h-72">
        <h2 className="font-bold mb-2">Spending Breakdown</h2>
         <ResponsiveContainer width="100%" height="90%">
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip/>
        </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;