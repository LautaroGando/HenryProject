function laCajaDePandora(numero) {
    if(numero % 2 === 0){
        return numero.toString(2);
    }else {
        return numero.toString(16);
    };
};

function rocio(){
    const misDatos = {
        nombre : "Rocio",
        edad : 24,
        nacionalidad : "Argentina",
    }
    return misDatos;
};