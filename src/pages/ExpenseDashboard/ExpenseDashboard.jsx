import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";

const ExpenseDashboard = () => {
  const usersData = [
    {
      id: 1,
      expenseName: "Tania",
      category: "medical",
      amount: "3400",
      date: "21/06/2023",
    },
    {
      id: 2,
      expenseName: "Craig",
      category: "electricity",
      amount: "3400",
      date: "21/06/2023",
    },
    {
      id: 3,
      expenseName: "Ben",
      category: "mobile recharge",
      amount: "3400",
      date: "21/06/2023",
    },
  ];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit Expense" : "Add Expense"}</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>View Summary</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
