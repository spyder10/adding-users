import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onButtonClick}>
      <Card className={styles["modal"]}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onButtonClick={props.onButtonClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModal;
