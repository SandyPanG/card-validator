import * as validateTDC from './validateFullCreditCard';

const valName = 'Claudia Montserrat Torres';
const numTDC = '4043800134371172';
const monthData = '05';
const yearData = '18';
const cvv = '568';


function main (name) {
    if (name !== null) 
        // console.log(validateName(name);
        validateTDC.validateName(name);
}

