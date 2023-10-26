import CryptoJS from "crypto-js";

export const EncrypData = (TextToEncrypt) => {
  if (TextToEncrypt.trim() !== "") {
    const plaintext = CryptoJS.enc.Utf8.parse(TextToEncrypt.trim());

    let key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_KEY);
    let iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV);

    key = CryptoJS.lib.WordArray.create(key.words.slice(0, 16 / 4));
    iv = CryptoJS.lib.WordArray.create(iv.words.slice(0, 16 / 4));

    const encrypted = CryptoJS.AES.encrypt(plaintext, key, { iv: iv });

    return encrypted.toString();
  } else {
    const validationError = new ExceptionError("Cadena vacía");
    throw validationError;
  }
};

function ExceptionError(mensaje) {
  this.mensaje = mensaje;
  this.nombre = "ExceptionUsuario";
}
