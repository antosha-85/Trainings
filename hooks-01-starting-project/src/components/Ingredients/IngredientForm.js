import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from '../UI/LoadingIndicator'
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // const inputState = useState({ title: "", amount: "" });
  // const [inputState, setIntputState] = useState({ title: "", amount: "" }) 
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('')
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({title: title, amount: amount})
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                // const newTitle = e.target.value;
                // setIntputState((prevInputState) => ({
                //   title: newTitle,
                //   amount: prevInputState.amount,
                // }));
                setTitle(e.target.value)
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                // const newAmount = e.target.value;
                // setIntputState((prevInputState) => ({
                //   amount: newAmount,
                //   title: prevInputState.title,
                // }));
                setAmount(e.target.value)
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator/>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
