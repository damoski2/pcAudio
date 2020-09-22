import React from 'react';
import style from './Login.module.css';

 const Login = (props) => {
     const {email, setEmail ,password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError, acctName, setAcctName} = props
    
     return (
        <section className={style.login}>
            <div className={style.loginContainer}>
                <h1 className={style.heading}>Welcome</h1>
                <label>E-mail</label>
                <input type="text" required value={email} onChange={(e)=> setEmail(e.target.value)} />
                <p className={style.errorMsg}>{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                <p className={style.errorMsg}>{passwordError}</p>
                <label>Set Username</label>
                <input type="text" required value={acctName} onChange={(e)=>setAcctName(e.target.value)} />
                <div className={style.btnContainer}>
                    {hasAccount? (
                        <>
                            <button onClick={handleLogin} className={style.btn}>Sign in</button>
                            <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                        </> 
                    ):(
                        <>
                            <button onClick={handleSignup} className={style.btn}>Sign up</button>
                            <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                        </> 
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
