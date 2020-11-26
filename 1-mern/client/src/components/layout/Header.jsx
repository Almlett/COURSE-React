import React, {useContext, useEffect} from 'react';
import authContext from '../../context/auth/authContext.jsx';

const Header = () => {

    const authState = useContext(authContext);
    const { user, getUser, userLogout } = authState;
   

    return ( 
        <header className="app-header">
            {user &&
                <p className="nombre-usuario">
                    Hola
                    <span>
                        {user.name}
                    </span>
                </p>
            }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => userLogout()}
                >
                    Logout
                </button>
            </nav>
            
        </header>
    );
}
 
export default Header;