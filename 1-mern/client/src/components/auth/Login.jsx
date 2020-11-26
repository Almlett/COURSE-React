import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext.jsx';
import authContext from '../../context/auth/authContext.jsx';

const Login = (props) => {

    const alertState = useContext(alertContext);
    const { alert, showAlert } = alertState;

    const authState = useContext(authContext);
    const { msg, authenticated, userLogin } = authState;

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
        email: '',
        password: ''
    })

    const {email, password} = user;

    const handlerInputs = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === ''){
            showAlert('All fields required', 'alerta-error')
            return;
        };

        userLogin({email, password});
    }

    return ( 
        <div className="form-usuario">
            {
                alert &&
                <div className={`alerta ${alert.category}`}>{alert.msg}</div>
            }
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>

                <form
                    onSubmit={handleSubmit}
                >
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Login"
                        />
                    </div>
                </form>
                <Link to={'/register'} className="enlace-cuenta">
                    Register
                </Link>
            </div>
        </div>
     );
}
 
export default Login;