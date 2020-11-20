import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

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
    }

    return ( 
        <div className="form-usuario">
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