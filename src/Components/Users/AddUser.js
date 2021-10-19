import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, Fragment ,useRef } from "react";
import Modal from '../UI/ErrorModal';

function AddUser(props) {
  // const [enteredText, setEnteredText] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const[error,setError] = useState(false);

  // const textChangeHandler = (event) => {
  //   setEnteredText(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (nameInputRef.current.value.length === 0 || ageInputRef.current.value.trim().length < 1) {
        setError(true);
      return;
    }
    const detailsNewUser = {
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
      key: Math.random().toString(),
    };
    props.onAddNewUser(detailsNewUser);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredAge("");
    // setEnteredText("");
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
            // value={nameInputRef.current.value}    // Don't have to feed values here (2-way) as values are directly changed in DOM using ref in submitHandler.
            // onChange={textChangeHandler}
            ref={nameInputRef}
          ></input>
          <label>Age (In Years)</label>
          <input
            type="number"
            // value={ageInputRef.current.value}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}
export default AddUser;
