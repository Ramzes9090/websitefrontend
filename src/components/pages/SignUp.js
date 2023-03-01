import React, { useState } from 'react'
import '../../App.css'
import { Login } from "../Login";
import { Register } from "../Register";
import '../SignUp.css'

function SignUp() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="SignUp">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}
export default SignUp;