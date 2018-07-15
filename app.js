var dataClients = [
    {
        'name': 'Erika Estrada Pacheco',
        'numberCard': '4571612553847958',
        'month-exp': 10,
        'year-exp': 17,
        'cvv': 270,
    },
    {
        'name': 'Israel Álvarez',
        'numberCard': '4065471966803600',
        'month-exp': 07,
        'year-exp': 16,
        'cvv': 336,
    },
    {
        'name': 'Claudia Montserrat Torres',
        'numberCard': '4043800134371172',
        'month-exp': 05,
        'year-exp': 18,
        'cvv': 568,
    },
    {
        'name': 'Carolina Valle Ruvalcaba',
        'numberCard': '4686008102429244',
        'month-exp': 10,
        'year-exp': 17,
        'cvv': 895,
    },
    {
        'name': 'Carmen Valencia Menchaca',
        'numberCard': '4530929310352951',
        'month-exp': 07,
        'year-exp': 17,
        'cvv': 242,
    },

];

const valName = 'Claudia Montserrat Torres';
const numTDC = '4043800134371172';
const monthData = parseInt("10");
const yearData = parseInt("17");
const cvv = parseInt("270");

/****************FUNCION PARA VALIDACIONES: NOMBRE***************/
const validateLetters = (name) => {
    const regEx = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g;
    if (regEx.exec(name) == null) {
        console.log('nombre invalido');
    } else {
        console.log('nombre valido');
    }
    userName(name);
}

/*************FUNCION PARA NAME************************/
const userName = fullName => {
    let j = 0;

    for (j; j < dataClients.length; j += 1) {
        if (dataClients[j].name !== fullName) {
            continue;
        }   
            console.log('El nombre fue encontrado en la posicion '+ [j]);
            userNumTDC(numTDC);
    }
}

/*************FUNCION PARA NUMERO************************/
const userNumTDC = fullNumTDC => {

    if (validateNumTDC(fullNumTDC)) {
        let i = 0;

        for (i; i < dataClients.length; i += 1) {
            if (dataClients[i].numberCard !== fullNumTDC) {
                continue;
            } else if (dataClients[i].numberCard === fullNumTDC) {
                console.log('En esta posicion la Tarjeta fue encontrada' + [i]);
            }
        }
    }
};


/**********FUNCION DE VALIDACIONES ACEPTABLES PARA NUM DE TDC**********/
/*                                  NOTA:
                        TARJETAS DE CREDITO QUE ACEPTA:
                                4 == VISA
                                5 == MASTERCARD
*/
const validateNumTDC = nums => {
    /*Expresion regular que especifica que es lo que acepta */
    const regEx = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;//EXPRESION REGULAR PARA TDC DE MASTERCARD-VISA-DISCORD
    if (regEx.exec(nums) == null) {
    } else {
        /*Convertir el string en Array y en numero entero */
        let arrayNums = [];

        for (let i = 0; i < nums.length; i++) {
            arrayNums.push(parseInt(nums[i]));
        }
        return validateNumTDCluhn(arrayNums);

    }
};


/*COMIENZA FUNCION ALGORITMO LUHN: para corroborar validacion de TDC */
const validateNumTDCluhn = numeros => {
    let sumTotalDigits = 0;
    let reverseNums = numeros.reverse();

    let k = 0;

    for (k; k < reverseNums.length; k++) {
        let pairNums;
        /*BUSCAR LA POSICION PAR */
        if ((k + 1) % 2 == 0) {
            pairNums = (reverseNums[k] * 2);
            if (pairNums >= 10) {
                let getOneDigits = ((pairNums - 10) + 1);
                reverseNums[k] = getOneDigits;
            } else {
                reverseNums[k] = pairNums;
            }
        }
        /*SUMA DEL ARRAY */
        sumTotalDigits += reverseNums[k];
    }

    if (sumTotalDigits % 10 == 0) {
        console.log('TARJETA VALIDA');

        return true;
    } else {
        console.log('TARJETA INVALIDA');
    }
}

validateLetters(valName);
