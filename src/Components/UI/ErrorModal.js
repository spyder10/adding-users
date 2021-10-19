import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import ReactDOM from 'react-dom';

function Backdrop(props){
  return <div className={styles.backdrop} onClick={props.onButtonClick}></div>
}


function ErrorModal(props) {
  return (
      <Card className={styles["modal"]}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onButtonClick={props.onButtonClick}>Okay</Button>
        </footer>
      </Card>
  );
}

function Modal(props){
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onButtonClick={props.onButtonClick}></Backdrop>,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ErrorModal title={props.title} message={props.message}  onButtonClick={props.onButtonClick}></ErrorModal>,document.getElementById('overlay'))}
  </Fragment>
}
export default Modal;
