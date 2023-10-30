import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

// Importa el archivo CSS

const Login = () => {
  return (
<div className="login-container">
      <div className="login-logo">
        <b>Iniciar Sesión</b>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
          <form action="/index" method="post">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="Email"
                name="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="Password"
                name="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="social-auth-links text-center mb-3">
              <Link to="/index" className="ingresar">
                <i className="" /> Ingresar
              </Link>
              <button type="submit" className="crear">
                <i className="" /> Crear Cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;