import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import instaclone from '../../assets/png/instaclone.png';
import RegisterForm from '../../components/Auth/RegisterForm';
import LoginForm from './../../components/Auth/Login/LoginForm';
import './Auth.scss';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className='auth'>
      <Image src={instaclone} />

      {/* FORMULARIO */}
      <div className='container-form'>
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      {/* OPCION */}
      <div className='change-form'>
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
            </>
          ) : (
            <>
              ¡Entra con tu cuenta!
              <span onClick={() => setShowLogin(!showLogin)}>
                Iniciar sesión
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
};

export default Auth;
