import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Expense Name</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.expenseName}</td>
            <td>{user.category}</td>
            <td>{user.amount}</td>
            <td>{user.date}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Update
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No expenses</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
