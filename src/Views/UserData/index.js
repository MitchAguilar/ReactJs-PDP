import React, { useState, useEffect } from "react";
import "../../css/userData/UserData.css";
import Logo from "../../assets/images/descarga.png";
import BtnCerrarSesion from "../../Components/Cerrar/BtnCerrarSesion";
import { Navigate, useLocation } from "react-router-dom";

import { AlertasToast } from "../../Components/Util/AlertasToast";
import Swal from "sweetalert2";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData
} from "../../store/slices/UserData";

function redirectToEnrollment(from) {
  return <Navigate to={from} />;
}

export default function UserData() {
  const [UserEnrolar, setUserEnrolar] = useState(null);
  const [MensajeErrorCelular, setMensajeErrorCelular] = useState("");
  let location = useLocation();
  const { responseData: userData } = useSelector((state) => state.userData);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const Enrolar = () => {
    /*const valorInicial = process.env.REACT_APP_InicioValidacionNumeroTelefonico;
    const cantidadTotal = process.env.REACT_APP_CantidadDigitosCelular;
    if (userData.numeroCelular.length !== parseInt(cantidadTotal, 10)) {
      setMensajeErrorCelular("Dato incorrecto");
    } else {
      if (userData.numeroCelular[0] !== valorInicial) {
        setMensajeErrorCelular("Dato incorrecto");
      } else {
        EnrolarModal();
      }
    }*/
  };
  const EnrolarModal = () => {
    /*Swal.fire({
      title: "Enrolar",
      html: `El número de celular registrado es ${userData.numeroCelular}, esta seguro de guardar esta información`,
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      timerProgressBar: false,
      heightAuto: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      showCloseButton: true,
      didOpen() {
        document.querySelector(".btn-ColmedicaPrimary").focus();
      },
      customClass: {
        confirmButton: "btn-Base btn-ColmedicaPrimary",
        cancelButton: "btn-Base btn-ColmedicaSecondary",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(generarOtp(userData.numeroCelular));
      }
    });*/
  };
  const handleChange = (event) => {
    /*setMensajeErrorCelular("");
    dispatch(postNumeroCelular(event.target.value));*/
  };
  const handleInputKeyChange = (event) => {
    /*const valor = event.key;
    if (!(valor === "Backspace" || !isNaN(valor))) {
      switch (valor) {
        case "Tab":
          document.querySelector(".btn-ColmedicaPrimary").focus();

          event.preventDefault();
          break;
        case "Enter":
          break;
        default:
          AlertasToast(
            "Lo sentimos!",
            "Debes ingresar solo los valores numéricos no menores a 0 ni mayores a 9.",
            "error",
            8000
          );
          event.preventDefault();
          break;
      }
    }*/
  };

  //let { from } = location.state ;
  if (UserEnrolar) {
    //return redirectToEnrollment(from);
  }

  return (
    <>
      <div className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <input type="submit" value="Save" className="none float-left" />
              <BtnCerrarSesion modo={true}></BtnCerrarSesion>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-12">
              <div className="card rounded text-black card-userdata">
                <div className="row g-0">
                  <div className="col-lg-12  align-items-center gradient-custom-2">
                    <div className="px-3 py-4 p-md-1 mx-md-3">
                      <div className="mb-4">
                        <figure>
                          <img
                            src={Logo}
                            className="img-fluid logoMP"
                            alt="Colmedica"
                          />
                        </figure>
                        <h5 className="mt-1 pb-1 grayc">
                          Verifique sus{" "}
                          <span className="ColmedicaBlu">datos</span>
                        </h5>
                        <hr className="lineSeparate" />
                      </div>
                      <form>
                        <p className="mt-1 pb-3 grayc">Información básica:</p>
                        <div className="row row-cols-1 row-cols-md-2 g-6">
                          <div className="col mt-2 form-floating mb-6">
                            <input
                              type="text"
                              className="form-control mb-0"
                              id="floatingInput_numeroidentificacion"
                              placeholder="numero de documento"
                              value={
                                userData.cedula !== null ? userData.cedula : ""
                              }
                              readOnly
                              disabled={true}
                            />
                            <label
                              htmlFor="floatingInput_numeroidentificacion"
                              className="padingLabel"
                            >
                              Número de documento:
                            </label>
                          </div>
                          <div className="col form-floating mt-2 mb-6">
                            <input
                              type="text"
                              className="form-control mb-0"
                              id="floatingInput_Nombre"
                              placeholder="Nombre"
                              value={
                                userData.nombre !== null
                                  ? userData.nombre
                                  : userData.nombre
                              }
                              readOnly
                              disabled={true}
                            />
                            <label
                              htmlFor="floatingInput_Nombre"
                              className="padingLabel"
                            >
                              Nombre:
                            </label>
                          </div>
                        </div>

                        <div className="row row-cols-1 mt-2 row-cols-md-3 g-4">
                          <div className="col form-floating mb-6">
                            <input
                              type="text"
                              className="form-control mb-0"
                              id="floatingInput_Correo"
                              placeholder="Correo"
                              value={
                                userData.email !== null ? userData.email : ""
                              }
                              readOnly
                              disabled={true}
                            />
                            <label
                              htmlFor="floatingInput_Correo"
                              className="padingLabel"
                            >
                              Correo electrónico:
                            </label>
                          </div>
                        </div>
                        <p className="mt-4 pb-2 grayc">
                          Confirme su número de celular:
                        </p>
                        <div className="row row-cols-1  row-cols-md-3 g-4">
                          <div className="col form-floating mb-6">
                            <input
                              type="text"
                              className="form-control mb-0"
                              id="numeroCelular"
                              placeholder="Usuario"
                              value={
                                userData.numeroCelular !== null
                                  ? userData.numeroCelular
                                  : ""
                              }
                              onChange={handleChange}
                              onKeyDown={handleInputKeyChange}
                            />
                            <label
                              htmlFor="floatingInput"
                              className="padingLabel"
                            >
                              Número de celular:
                            </label>
                            {MensajeErrorCelular !== "" && (
                              <p className="validationCustom01">
                                {MensajeErrorCelular}
                              </p>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-end">
                <BtnCerrarSesion modo={false}></BtnCerrarSesion>
                <button
                  type="button"
                  className="btn-Base btn-ColmedicaPrimary"
                  onClick={Enrolar}
                  id="btn_enrolar"
                  name="btn_enrolar"
                >
                  Aceptar
                  <i className="ingresar-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
