import { useEffect, useState } from "react";

import CardComponents from "./components/card/card.components";
import Form from "./components/form-input/form-input.components";
import Header from "./components/header/header.component";

import GlobalStyle from "./styles";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState<string | number>(0);
  const [expense, setExpense] = useState<string | number>(0);
  const [total, setTotal] = useState<string | number>(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const expense = amountExpense
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);
    const income = amountIncome
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(Number(income) - Number(expense)).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };
  return (
    <div className="App">
      {/* <Routers/> */}
      <Header />
      <CardComponents income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
