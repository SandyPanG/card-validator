var dataClients = {
    'clients': [
        {
            'name': 'Donna Sloper',
            'numberCard': 4571612553847958,
            'month-exp': 10,
            'year-exp': 17,
            'cvv': 270,
        },
    ]
};

const numTDC= "4571612553847958";
    console.log(numTDC);
const monthData= parseInt("10");
const yearData=  parseInt("17");
const cvv= parseInt("270");

/******FUNCION QUE EJECUTA LA FUNCION DE VALIDACIONES DE NUM. DE TDC*******/
const creditCard = (nums) => {
      validateNum(nums);
}

/**********FUNCION DE VALIDACIONES ACEPTABLES PARA NUM DE TDC**********/
/*                                  NOTA:
                        TARJETAS DE CREDITO QUE ACEPTA:
                                4 == VISA
                                5 == MASTERCARD
*/
const validateNum = (nums) => {
    /*Expresion regular que especifica que es lo que acepta */
    const regEx= /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;//EXPRESION REGULAR PARA TDC DE MASTERCARD-VISA-DISCORD
    if (regEx.exec(nums) == null ){
    }else{
        /*Convertir el string en Array y en numero entero */
        let arrayNums= [];
        
        for (let i= 0; i <nums.length; i++){
            arrayNums.push(parseInt(nums[i])); 
        }
        luhn(arrayNums);

    }
};


/*COMIENZA FUNCION ALGORITMO LUHN: para corroborar validacion de TDC */
const luhn = (numeros) => {
    let sumTotalDigits = 0;
    let reverseNums= numeros.reverse();

    let k= 0;

    for (k; k< reverseNums.length; k++){
        let pairNums;
        /*BUSCAR LA POSICION PAR */
        if ((k+1) % 2 == 0){
            pairNums= (reverseNums[k]*2);
            if (pairNums >= 10 ){
                let getOneDigits = ((pairNums -10) +1);
                reverseNums[k]= getOneDigits;
            } else{
                reverseNums[k]= pairNums;
            }
        }
        /*SUMA DEL ARRAY */
        sumTotalDigits += reverseNums[k]; 
    }
    console.log(sumTotalDigits);

    if (sumTotalDigits % 10 == 0){
        console.log('TARJETA VALIDA');
    }else{
        console.log('TARJETA INVALIDA');
    }
      
}
creditCard(numTDC);

// const validateLetters = (letters) => {
//     let name= 'Donna Sloper';

//     const regex= /^[^a-zA-Z\ \.]$/;
// }
