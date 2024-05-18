function laCajaDePandora(numero) {
    
    if(numero % 2 === 0) {

        return numero.toString(2);

    } else {

        return numero.toString(16);

    };

};

const objeto = {
    nombre: "Lautaro",
    edad: 22,
    nacionalidad: "Argentino",
};

const lautaro = () => {

    return objeto;

};