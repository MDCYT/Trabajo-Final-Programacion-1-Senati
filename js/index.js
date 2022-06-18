var audio = new Audio('./music/nyan-cat.m4a');
audio.loop = true;
audio.volume = 0.1;

$(function() {
    $('#newsletter-form').submit(function() {
        
        var email = $('#email').val();
        if (email == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Porfavor ingrese su correo electrónico',
                confirmButtonText: 'OK'
            });
            return false;
        }
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Porfavor ingrese un correo valido.',
                confirmButtonText: 'OK'
            });
            return false;
        }
        Swal.fire({
            title: 'Porfavor espere...',
            text: 'Estamos añadiendo su email a nuestra lista.',
            width: 600,
            heightAuto: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showCancelButton: true,
            timer: 2000,
            timerProgressBar: true,
            cancelButtonText: 'No, cambie de opinion.',
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
          }).then((result) => {
            if(result.dismiss === Swal.DismissReason.cancel){
                return false;
            }

            if (result.dismiss === Swal.DismissReason.timer) {
              audio.play();
                Swal.fire({
                    title: '¡Ya estas suscrito!',
                    text: 'Empieza a recibir ofertas y noticias relevantes sobre coches.',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("./img/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  }).then((result) => {
                    //Stop audio and delete it from memory
                    audio.pause();
                    audio.currentTime = 0;
                  })
            }
          })
        return false;
    });
})