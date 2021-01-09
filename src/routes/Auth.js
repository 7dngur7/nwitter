import React, { useState } from "react";
import { authService } from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newaccount, setNewaccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "email") {
          setEmail(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };
      const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newaccount) {
              data = await authService.createUserWithEmailAndPassword(
                email,
                password
              );
            } else {
              data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
          } catch (error) {
            console.log(error.message);
          }
        };
        const toggleAccount = () => setNewaccount((prev) => !prev);



    return(
        <div>
    <form onSubmit={onSubmit}>
        <input name = "email" type = "text" placeholder = "email" required
        value = {email} onChange = {onChange}
        />
        <input name = "password" type = "password" placeholder = "password" required
         value={password} onChange={onChange}
        />
        <input
          type="submit"
          value={newaccount ? "Create Account" : "Sign In"}
          />
            {error}
    </form>
    <span onClick={toggleAccount}>
        {newaccount ? "Sign In" : "Create Account"}
      </span>
    <button>Continue with Google</button>
    <button>Continue with Github</button>
</div>
    );
}
export default Auth;