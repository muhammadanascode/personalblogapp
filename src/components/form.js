import { useRef } from "react";
import styles from '../styles/form.module.css'
import Link from "next/link";

export default function Form({ signin, onFormSubmit }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const FirstNameRef = useRef();
    const LastNameRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstName = FirstNameRef.current?.value
        const lastName = LastNameRef.current?.value
        
        signin ? onFormSubmit(email, password) : onFormSubmit(firstName, lastName, email, password);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.child}>
                    <h2>Personal Blogging App</h2>
                    <Link className={styles.lin} href={signin?"/signup":"/login"}>{signin?"Signup": "Sign in"}</Link>
                    <h4>{signin ? "Sign in " : "Signup"}</h4>
                    <p className={styles.line}>{signin ? "Login in to read blogs" : "SignUp to create your blogs"}</p>
                    <form onSubmit={onSubmitHandler}>
                        {!signin ? <>
                            <div className="mb-3">
                                <input ref={FirstNameRef} type="text" name="FirstName" className="form-control" id="FirstName" placeholder="First Name" />
                            </div>
                            <div className="mb-3">
                                <input ref={LastNameRef} type="text" name="Last Name" className="form-control" id="LastName" placeholder="Last Name" />
                            </div> </> : ""}
                        <div className="mb-3">
                            <input ref={emailRef} type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input ref={passwordRef} type="password" className="form-control" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className={styles.btndiv}>
                            <button type="submit" className={`${styles.btn} btn  mt-4`}>{signin ? "Login" : "SignUp"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
