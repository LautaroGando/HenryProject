function laCajaDePandora(numero) {

    if(numero % 2 === 0) {

        return numero.toString(2);

    } else {

        return numero.toString(16);

    };

};

function agustin() {

    const data = {
        name: 'Agustin',
        age: 23,
        nationality: 'Argentina'
    };

    return data;

};

function rocio() {

    const misDatos = {
        nombre : "Rocio",
        edad : 24,
        nacionalidad : "Argentina",
    }

    return misDatos;

};

const objeto = {
    nombre: "Lautaro",
    edad: 22,
    nacionalidad: "Argentino",
};

const lautaro = () => {

    return objeto;
    
};