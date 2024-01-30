// Esse e um manipulador de erro, receberá um codigo de status personalizados.

const errorHandler = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    return error
}

export default errorHandler