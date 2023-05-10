const validarRut = rut => {
    if (rut.length >= 9) {
        return true
    }else{       
        return false
    }
    };

                       
    const validarNombre = nombre => {
    if (nombre.length >=4 && nombre.length <=15 ) {
        return true
    }else {
        return false
    }
    };

    

    const validaraPaterno = aPaterno => {
        if (aPaterno.length >=4 && aPaterno.length <=16 ) {
            return true
        }else{
            return false
        }
    };

    const validarApMaterno = apMaterno => {
        if (apMaterno.length >=4 && apMaterno.length <= 16) {
            return true
        }else {
            return false
        }
    };

    const validarCelular = celular => {
        if (!isNaN(celular)) {
            return true;                       
        }else{
        return false
    }
    
    };

    
    const validarTextArea = textoMotivo => {
        if (textoMotivo.length >= 10 && textoMotivo.length <= 250) {
            return true
        }else {
            return false
        }
    };
