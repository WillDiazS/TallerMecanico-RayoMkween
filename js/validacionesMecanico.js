const validarEmailMecanico = email => {
    if(email.length >= 9){
        return true
    }else{
        return false
    }

}


const validarPasswordMecanico = password => {
    if(password.length === 6){
        return true
    }else{
    return false
    }
}

