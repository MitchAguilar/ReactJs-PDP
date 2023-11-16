import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ROOT } from "../../navigation/CONSTANT";

export default function BtnCerrarSesion(modo) {
  const navigate = useNavigate();
  const AccionCerrar = () => {
    Swal.fire({
      title: "Cerrar Sesión",
      html: "¿Está seguro que desea cerrar sesión?",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      timerProgressBar: false,
      heightAuto: true,
      confirmButtonText: "Cerrar Sesión",
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
        sessionStorage.clear();

        navigate(ROOT);
        window.location.reload();
      }
    });
  };
  if (modo.modo) {
    return (
      <>
        <p
          className="float-left Enlaces hoverCerrarSesion pointer"
          onClick={AccionCerrar}
        >
          Cerrar Sesión<span className="logOut-icon"></span>
        </p>
      </>
    );
  } else {
    return (
      <>
        <button
          type="button"
          className="btn-Base btn-ColmedicaSecondary"
          onClick={AccionCerrar}
        >
          Cancelar
        </button>
      </>
    );
  }
}
