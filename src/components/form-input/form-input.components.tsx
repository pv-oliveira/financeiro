import React from "react";
import { useState } from "react";
import Grid from "../grid/grid.components";
import * as C from "./form-input.styles";

interface props {
  handleAdd: Function,
  transactionsList: [],
  setTransactionsList: Function
}

const Form = ({ handleAdd, transactionsList, setTransactionsList }: props) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<any>('');
  const [date, setDate] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateId = () => new Date().getTime();

  const handleSubmit = () => {
    if (!desc || !amount) {
      alert("Enter the description and the amount!");
      return;
    } else if (amount < 1) {
      alert("The value must be positive!");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      date: date
    };
console.log(date)
    handleAdd(transaction);

    setDesc("");
    setAmount(0);
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data</C.Label>
          <C.Input
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saida</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSubmit}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};
export default Form;
