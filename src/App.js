import AddUser from "./Components/Users/AddUser";
import { useState, Fragment } from "react";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (detailsNewUser) => {
    setUsers((prevUsers) => {
      return [detailsNewUser, ...prevUsers];
    });
  };
  return (
    <Fragment>
      <AddUser onAddNewUser={addNewUserHandler}></AddUser>
      <UserList items={users}></UserList>
    </Fragment>
  );
}

export default App;
