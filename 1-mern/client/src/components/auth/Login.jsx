import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false);

    const {email, password} = user;

    const handlerInputs = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <div className="form-usuario">
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