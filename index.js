
var cpf = '027.446.721-65'
var noveDigitos = cpf.split('-')[0].replace(/\D/g, '')

//Iníco da validação do décimo dígito do cpf ------------------------------------------------------------------------------

function validaDecimoDigito() {
    var multip10 = []
    var arrayDecimoDigito = []
    var cpfNaoFormatado10 = noveDigitos.split('')
    var comparaDigito10 = cpf.replace(/\D/g, '').substring('9', '10')

    for (var i = 10; i >= 2; i--) {
        multip10.push(i)
    }

    cpfNaoFormatado10.map(function (v, e) {
        arrayDecimoDigito.push(v * multip10[e])
    })

    var somaDecimoDigito = arrayDecimoDigito.reduce((a, b) => a + b)

    if ((somaDecimoDigito * 10) % 11 == 10) {
        var decimoDigito = 0
    } else {
        var decimoDigito = (somaDecimoDigito * 10) % 11
    }
    if (decimoDigito == comparaDigito10) {
        validaDecimoPrimeiroDigito(decimoDigito)
    } else {
        console.log('O décimo dígito não é válido')
    }
}

//Final da validação do décimo dígito do cpf ------------------------------------------------------------------------------

//Iníco da validação do décimo primeiro dígito do cpf ------------------------------------------------------------------------------
function validaDecimoPrimeiroDigito(decimoDigito) {

    var multip11 = []
    var arrayDecimoPrimeiroDigito = []

    var cpfFormatado1 = noveDigitos.substring('0', '3')
    var cpfFormatado2 = noveDigitos.substring('3', '6')
    var cpfFormatado3 = noveDigitos.substring('6', '9')

    var cpfNaoFormatado11 = cpf.replace(/\D/g, '').substring('0', '10').split('')
    var comparaDigito11 = cpf.replace(/\D/g, '').substring('10', '11')

    for (var i = 11; i >= 2; i--) {
        multip11.push(i)
    }

    cpfNaoFormatado11.map((v, e) => {
        arrayDecimoPrimeiroDigito.push(v * multip11[e])
    })

    var somaDecimoPrimeiroDigito = arrayDecimoPrimeiroDigito.reduce((a, b) => a + b)

    if ((somaDecimoPrimeiroDigito * 10) % 11 == 10) {
        var decimoPrimeiroDigito = 0
    } else {
        var decimoPrimeiroDigito = (somaDecimoPrimeiroDigito * 10) % 11
    }
    
    var cpfFormatado4 = `${cpfFormatado1}.${cpfFormatado2}.${cpfFormatado3}-${decimoDigito}${decimoPrimeiroDigito}`

    if (decimoPrimeiroDigito == comparaDigito11) {
        if (cpfFormatado4 == cpf) {
            console.log(decimoPrimeiroDigito, comparaDigito11)
            console.log(`O décimo primeiro dígito é válido, o número do CPF é : ${cpfFormatado4}`)
        }
    } else {
        console.log('O décimo primeiro dígito não é válido')
    }

}

//Final da validação do décimo primeiro dígito do cpf ------------------------------------------------------------------------------

validaDecimoDigito()

