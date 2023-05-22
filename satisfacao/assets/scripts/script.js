function satisfacao_positiva() {
    Swal.fire({
        title: 'Clique em CONFIRMAR para registrar sua resposta',
        text: "ou CANCELAR para retornar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Sucesso!',
                'Sua resposta foi registrada!',
                'success'
            )
        }
    })
}

function satisfacao_negativa() {
    Swal.fire({
        title: 'Clique em CONFIRMAR para registrar sua resposta',
        text: 'ou CANCELAR para retornar',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Sucesso!',
                icon: 'success',
                text: 'dasdasdsadas',
                html: '<img src="assets/images/qr_code.png" alt="Imagem" width="300" <br> <figcaption>Para registrar uma reclamação/sugestão, favor aponte a câmera do seu celular para o QR Code acima</figcaption>',
                confirmButtonText: 'Confirmar'
            });
        }
    });
}