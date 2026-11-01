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

document.querySelectorAll('.cartel').forEach(tarjeta => {
    const botonOpen = tarjeta.querySelector('.btn-open');
    const botonClose = tarjeta.querySelector('.btn-close');
    const dialogo = tarjeta.querySelector('.modal-tarjeta');

    if (botonOpen && dialogo) {
    botonOpen.addEventListener('click', () => dialogo.showModal());
    }
    if (botonClose && dialogo) {
        botonClose.addEventListener('click',() => dialogo.close());;
    }

});
document.querySelectorAll('.form').forEach(tarjeta => {
    const botonOpen = tarjeta.querySelector('.btn-open');
    const botonClose = tarjeta.querySelector('.btn-close');
    const dialogo = tarjeta.querySelector('.modal-tarjeta');;

    if (botonOpen && dialogo) {
        botonOpen.addEventListener('click', ()=> dialogo.showModal());
    }
    if (botonClose && dialogo) {
        botonClose.addEventListener('click', ()=> dialogo.close());
    }
});