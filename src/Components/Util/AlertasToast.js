import Swal from 'sweetalert2';

export const AlertasToast=(titulo, texto, tipo, tiempo)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton:true,
        timer: tiempo,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: tipo,
        title: titulo,
        text: texto
      })
};
