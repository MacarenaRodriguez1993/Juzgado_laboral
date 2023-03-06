import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar";

const Perfil = () => {
  return (
    <>
      <Navbar />
      <div className="container  d-grid justify-content-center text-center pt-5">
        <Link to="/formAbogado">
          <button className="btn btn-warning btn-lg px-5 py-2 m-2 w-100">
            Cargar Abogado
          </button>
        </Link>
        <Link to="/listaAbogados">
          <button className="btn btn-warning btn-lg px-5 py-2 m-2 w-100">
            Mostar Abogados
          </button>
        </Link>
        <Link to="/formLicencia">
          <button className="btn btn-warning btn-lg px-5 py-2 m-2 w-100">
            Cargar Licencia
          </button>
        </Link>
        <Link to="/home">
          <button className="btn btn-warning btn-lg px-5 py-2 m-2 w-100">
            Mostrar Licencias
          </button>
        </Link>

        <Link to="/formFeriado">
          <button className="btn btn-warning btn-lg px-5 py-2 m-2 w-100">
            Feriados
          </button>
        </Link>
        <Link to="/formCalculadora">
          <button className="btn btn-outline-warning btn-lg px-5 py-2 m-2 w-100">
            Calculadora de Plazos
          </button>
        </Link>
      </div>
    </>
  );
};

export default Perfil;
