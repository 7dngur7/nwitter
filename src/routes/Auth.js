import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";

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
        const onSocialClick = async (event) =>{
            const{
                target : {name},} = event;
                let provider;
                if(name === "google"){
                    provider = new firebaseInstance.auth.GoogleAuthProvider();
                }else if(name ==="github"){
                    provider = new firebaseInstance.auth.GithubAuthProvider();
                }
                await authService.signInWithPopup(provider);
        };
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
      <div>
      <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;