const validarNombre = nombre => {
    if(nombre.length >= 4 && nombre.length <= 12) {
        return true
    }else {
        return false
    }
}

const validarEmail = email => {
    if(email.length >= 9) {
        return true
    }else{
        return false
    }
}

const validarPassword1 = password1 => {
    if(password1.length >= 6 && password1.length < 7){
    return true
    }else{
        return false
    }
}

