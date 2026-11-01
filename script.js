document.querySelectorAll('.infobox').forEach(tarjeta => {
    const botonOpen = tarjeta.querySelector('.btn-open');
    const botonClose = tarjeta.querySelector('.btn-close');
    const dialogo = tarjeta.querySelector('.modal-libro');

    if (botonOpen && dialogo) {
        botonOpen.addEventListener('click', () => dialogo.showModal());
    }
                
    if (botonClose && dialogo) {
        botonClose.addEventListener('click', () =>  dialogo.close());
    }    
}); 
