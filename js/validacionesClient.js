const validarEmail = email => {
    if(email.length >= 9){
        return true
    }else{
        return false
    }

}


const validarPassword = password => {
    if(password.length >= 6){
        return true
    }else{
    return false
    }
}

