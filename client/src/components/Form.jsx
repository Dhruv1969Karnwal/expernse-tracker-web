import React from "react";
import { useForm } from 'react-hook-form';
import List from "./List";
import {default as api} from '../store/apiSlice';



const Form = () => {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
      if(!data) return {};
      await addTransaction(data).unwrap();
      resetField('name');
      resetField('amount')
  }
  return (
    <div className="form max-w-sm mx-auto w-96 p-2">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register('name')}
              placeholder="Sallary, House Rend, SIP"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register('type')}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Savings" defaultValue>
              Savings
            </option>
          </select>
          <div className="input-group">
            <input type="text" placeholder="Amount" {...register('amount')}className="form-input" />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full rounded-lg">
              Make Transaction
            </button>
          </div>
        </div>
      </form>

      <List />
    </div>
  );
};

export default Form;
