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

const numTDC= parseInt("4571612553847958");
    console.log(numTDC);
const monthData= parseInt("10");
const yearData=  parseInt("17");
const cvv= parseInt("270");

const creditCard = (nums) => {
      validateNum(nums);
}

validateNum = (nums) => {
    const regEx= /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
    if (regEx.exec(nums) == null ){ 
        console.log("INCORRECTO")
    }else{
        console.log("CORRECTA");
    }
};
validateNum(numTDC);


// const validateLetters = (letters) => {
//     let name= 'Donna Sloper';

//     const regex= /^[^a-zA-Z\ \.]$/;
// }
