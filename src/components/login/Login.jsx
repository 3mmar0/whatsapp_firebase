import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="login img"
        />
        <h1>Sign in to whatsapp</h1>
        <Button
          color="success"
          variant="contained"
          type="submit"
          onClick={signIn}
        >
          Sign with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
