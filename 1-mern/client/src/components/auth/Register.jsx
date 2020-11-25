import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext.jsx';

const Register = () => {

    const alertState = useContext(alertContext);
    const { alert, showAlert } = alertState;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })
    const [error, setError] = useState(false);

    const {name, email, password,confirm_password} = user;

    const handlerInputs = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirm_password.trim() === ''){
            showAlert("All fields required", 'alerta-error')
            return;
        }

        if (password.length < 6){
            showAlert("The password must be at least 6 characters long", 'alerta-error')
            return;
        }

        if (password !== confirm_password){
            showAlert("The passwords are not the same", 'alerta-error')
            return;
        }

    }

    return ( 
        <div className="form-usuario">
            {
                alert &&
            <div className={`alerta ${alert.category}`}>{alert.msg}</div>
            }
            <div className="contenedor-form sombra-dark">
                <h1>Create account</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">
                        Name
                        </label>
                        <input 
                            value={name}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={handlerInputs}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input 
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={handlerInputs}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={handlerInputs}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm_password">
                        Confirm Password
                        </label>
                        <input 
                            value={confirm_password}
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            onChange={handlerInputs}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Go to login
                </Link>
            </div>
        </div>
     );
}
 
export default Register;