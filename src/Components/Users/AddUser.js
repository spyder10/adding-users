import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, Fragment } from "react";
import Modal from '../UI/ErrorModal';

function AddUser(props) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const[error,setError] = useState(false);

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredText.trim().length === 0 || enteredAge.trim().length < 1) {
        setError(true);
      return;
    }
    const detailsNewUser = {
      username: enteredText,
      age: enteredAge,
      key: Math.random().toString(),
    };
    props.onAddNewUser(detailsNewUser);
    setEnteredAge("");
    setEnteredText("");
  };
const clickHandler = () =>{
    setError(false);
}
  return (
    <Fragment>
      {error && <Modal
        title="Error"
        message="Please Enter valid username and age"
        onButtonClick={clickHandler}
      ></Modal>}
      <Card className={styles["input"]}>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={enteredText}
            onChange={textChangeHandler}
          ></input>
          <label>Age (In Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}
export default AddUser;
