import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const initialFormState = {
    id: null,
    expenseName: "",
    category: "",
    amount: "",
    date: "",
  };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.expenseName || !user.category || !user.amount || !user.date)
          return;

        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <label>Expense Name</label>
      <input
        type="text"
        name="expenseName"
        value={user.expenseName}
        onChange={handleInputChange}
      />

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={user.category}
        onChange={handleInputChange}
      />
      <label>Amount</label>
      <input
        type="text"
        name="amount"
        value={user.amount}
        onChange={handleInputChange}
      />
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={user.date}
        onChange={handleInputChange}
      />
      <button>{props.editing ? "Update Expense" : "Add Expense"}</button>
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
  );
};

export default EditUserForm;
