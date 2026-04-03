import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import Transactions from "./Transactions";
import Insights from "./Insights";
import RoleSwitcher from "./RoleSwitcher";
const Dashboard = () => {
  const { transactions, setTransactions, role, setRole } = useContext(AppContext);
  return (
    <div className="space-y-6">

      <RoleSwitcher role={role} setRole={setRole} />

      <SummaryCards transactions={transactions} />

      <Charts transactions={transactions} />

      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        role={role}
      />

      <Insights transactions={transactions} />

    </div>
  );
};

export default Dashboard;