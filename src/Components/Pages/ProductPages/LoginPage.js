import { useState, useRef, useContext } from 'react';
import CartContext from '../../Context/cart-contetxt';
import { Link, useHistory} from 'react-router-dom';

import classes from './LoginPage.module.css';

const LoginPage = () => {
  const credCtx  = useContext(CartContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();


  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKBtqhRmmkbiCnjg2-BtdNrUsyGZKySfI';
    } else {
            return;
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
       
        credCtx.addCreds(data.idToken)
        localStorage.setItem('loginToken',data.idToken)
        console.log('Login Successfull')
         history.replace('/Store')
       
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  console.log(credCtx.creds)



  return (
    <section className={classes.auth}>
      <h1>Login </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>Login</button>
          )}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
  );
};

export default LoginPage;