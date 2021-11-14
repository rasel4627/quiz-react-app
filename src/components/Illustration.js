import classes from "../styles/Illustration.module.css";
import SignupImg from "../assets/images/signup.svg";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={SignupImg} alt="Signup" />
    </div>
  );
}
