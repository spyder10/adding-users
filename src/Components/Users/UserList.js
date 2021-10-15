import styles from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={styles["users"]}>
      <ul>
        {props.items.map((user) => {
          return <li key={user.key}>{user.username} ({user.age} years old)</li>;
        })}
      </ul>
    </Card>
  );
}
export default UserList;
