# Validador de tarjeta de crédito

* **Colaboradoras** _Claudia Trujillo, Sandra Pantoja_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Sprint 4_

***

El validador de datos de tarjeta de crédito proporciona utilidades de validación para las entradas de datos de la tarjeta de crédito. Está diseñado como un módulo CommonJS para usar en Node.js, o el navegador. Presenta una interfaz de usuario adecuada al mismo.

Notifica al usuario si los datos que ingresan no son válidos.

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `name`: Nombre completo como aparece en la tarjeta
* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos


Durante el proceso de validación, si los datos de la tarjeta son válidas el navegador mostrará mensaje **_"Tarjeta válida"_** a los datos que no pasen la validación, lanzará el mensaje **_"Tarjeta inválida"_**.
El validador sólo acepta tarjetas Visa y Master Card; **Visa**, empiezan con número **4** y **MasterCard**, empieza con **5**.

## Instrucciones

1. Ingresa tu nombre completo tal como aparece en tu tarjeta de crédito. 
    >⋅⋅1. Acepta mayúsculas y munúsculas, puntos y espacios.
    >⋅⋅2. No acepta números ni carácteres especiales.
2. Ingresa el número de tarjeta de crédito, deberás verificar que 
    >⋅⋅1. Ingreses exactamente dieciseis dígitos.
   ⋅⋅2. Que no ingreses letras.
   ⋅⋅3. Que no ingreses espacios ni caracteres especiales.
3. Ingresa la fecha de expiraciónde tu tarjeta de créditoLa fecha de vencimiento está impresa o grabada a     relieve.
    >⋅⋅1. En la primer casilla de verificación deberás ingresar dos dígitos del **_"01"_** al **_"12"_**
    >⋅⋅2. En la segunda casilla asegurate de no ingresar letras, cáracteres especiales ni espacios.
4. El código de verificación deben ser tres dígitos, cuidando no ingresar letras, cáracteres especiales ni     espacios.Los dígitos verificadores o CVV, contemplan estos 3 números impresos en un recuadro blanco al     lado derecho del panel de firma o en el panel mismo.
5. En este punto si aparece en tu navegador el mensaje **_"Tarjeta válida"_** (corroborado con el algoritmo de luhn) estás lista para realizar tu transacción; haz click en **_pagar_**.

## Demo

![validador](assets/images/demo.gif)

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

A la hora de hacer las validaciones, la librería debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.
