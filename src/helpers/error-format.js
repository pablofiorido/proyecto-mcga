export const mapError = {
    LoginInvalid: 'Invalid User or Password',
    Required: 'Required field',
    Incompleted: 'Please verify empty fields',
    InvalidEmail: 'Invalid Email'
}


//OBJETO PARA MOSTRAR MENSAJES MAS AMIGABLES.

// al momento de usarlo se usa asi --> mapError["LoginInvalid"] --> "Invalid User or Password"
// Resultado final seria mapError[error] donde error puede ser un string que machee con la clave del objeto

// Ejemplo:
// const error = "InvalidEmail"
// mapError[error] => "Invalid Email"