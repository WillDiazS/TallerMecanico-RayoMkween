const validarRut = rut => {
    if(rut.length >= 9 &&  rut.length <= 13) {
        return true
    }else{       
        return false
    }
    };

                       
    const validarNombre = nombre => {
    if(nombre.length >=4 && nombre.length <=15 ) {
        return true
    }else {
        return false
    }
    };


    const validaraPaterno = aPaterno => {
        if(aPaterno.length >=4 && aPaterno.length <=16 ) {
            return true
        }else{
            return false
        }
    };

    const validarApMaterno = apMaterno => {
        if(apMaterno.length >=4 && apMaterno.length <= 16) {
            return true
        }else {
            return false
        }
    };

    const validarCelular = celular => {
        if(isNan(celular) && celular.length <= 999999999 ) {
            return true
        }else {
            return false
        }
    };

    
    const validarTextArea = textoMotivo => {
        if(textoMotivo >= 10 && textoMotivo <= 250 && textoMotivo === '') {
            return true
        }else {
            return false
        }
    }