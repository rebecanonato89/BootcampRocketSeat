import { GiUpgrade } from "react-icons/gi";
import style from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img
        src="https://github.com/rebecanonato89.png"
        alt="Rebeca Nonato"
      />
      <div>
        <strong>Rebeca Nonato</strong>
        <p>
          <GiUpgrade className={style.icon} />
          Level 1
        </p>
      </div>
    </div>
  );
}