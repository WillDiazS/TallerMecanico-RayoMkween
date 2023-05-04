    const validarRut = () => {
    if(rut.length >= 9 &&  rut.length <= 13) {
        return true
    }else{       
        return false
    }
    };

                       
    const validarNombre = () => {
    if(nombre.length >=4 && nombre.length <=15 ) {
        return true
    }else {
        return false
    }
    };


    const validaraPaterno = () =>{
        if(aPaterno.length >=4 && aPaterno.length <=16 ) {
            return true
        }else{
            return false
        }
    };

    const validarApMaterno = () => {
        if(apMaterno.length >=4 && apMaterno.length <= 16) {
            return true
        }else {
            return false
        }
    };

    const validarCelular = () => {
        if(celular .isNaN(celular) ) {
            return true
        }else {
            return false
        }
    };

    
    const validarTextArea = () => {
        if(textoMotivo >= 10 && textoMotivo <=250) {
            return true
        }else {
            return false
        }
    }
