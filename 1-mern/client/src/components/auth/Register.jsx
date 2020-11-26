import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext.jsx';
import authContext from '../../context/auth/authContext.jsx';

const Register = (props) => {

    const alertState = useContext(alertContext);
    const { alert, showAlert } = alertState;

    const authState = useContext(authContext);
    const { msg, authenticated, registerUser } = authState;

    /// despues de registrarse
    useEffect(() => {
        if (authenticated){
            props.history.push('/projects')
        }

        if (msg){
            showAlert(msg.msg, msg.category)
        }
    // eslint-disable-next-line
    },[msg, authenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

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

        registerUser({
            name,
            email,
            password
        })

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