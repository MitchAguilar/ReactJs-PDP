import { AlertasToast } from "../Components/Util/AlertasToast";
import axios from 'axios';

export default class Service {
  constructor() {}

  async ServiceGet(controlador, accion) {
    try {
      return new Promise((resolve) => {
        axios
          .get(controlador)
          .then((response) => {
            console.log(response.data);
            resolve(response.data);
          })
          .catch((error) => {
            console.log('response: ',error)
            Promise.reject(error);
          });
      });
    } catch (error) {
      AlertasToast("Error fatal", "Error crítico en el sistema", "error", 5000);
    }
  }
}
