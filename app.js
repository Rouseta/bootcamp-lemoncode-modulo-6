// const productList = [
//     {
//         product: "Jamón Ibérico",
//         units: 1,
//         price: 9.99,
//     },
//     {
//         product: "Queso Tostado",
//         units: 6,
//         price: 4.45,
//     },
//     {
//         product: "Vino Tinto",
//         units: 12,
//         price: 8.15,
//     },
// ];
// var getDiscount = (units, cost) => (units > 5 ? 5 : 0) + (cost >= 50 ? 5 : 0);
// var productCost = product => {
//     var productCost = product.units * product.price;
//     return productCost * (1 - getDiscount(product.units, productCost) / 100);

// };
// var totalCost = productList => {
//     var totalCost = 0;
//     for (var product of productList) {
//         totalCost += productCost(product);
//     }
//     return totalCost;
// };
// console.log(totalCost(productList))
var number;
do {
    var rest;
    var letter;
    //Paso 1 pedir datos a usuario
    number = prompt("introduce tu numero de DNI")

    //Paso 2: comprobar que es un número
    if (parseInt(number) === Number(number)) {
        console.log("Es un numero", number)
        number = Number(number)
        //paso 3: comproba que es um número válido (entre 0 y 99999999)
        if (number >= 0 && number <= 99999999) {
            console.log("El número es válido", number);
            //paso 4: obtener el resto y la letra correspondiente
            rest = number % 23;
            switch (rest) {
                case 0:
                    letter = "T";
                    break;
                case 1:
                    letter = "R";
                    break;
                case 2:
                    letter = "W";
                    break;
                case 3:
                    letter = "A";
                    break;
                case 4:
                    letter = "G";
                    break;
                case 5:
                    letter = "M";
                    break;
                case 6:
                    letter = "Y";
                    break;
                case 7:
                    letter = "F";
                    break;
                case 8:
                    letter = "P";
                    break;
                case 9:
                    letter = "D";
                    break;
                case 10:
                    letter = "X";
                    break;
                case 11:
                    letter = "B";
                    break;
                case 12:
                    letter = "N";
                    break;
                case 13:
                    letter = "J";
                    break;
                case 14:
                    letter = "Z";
                    break;
                case 15:
                    letter = "S";
                    break;
                case 16:
                    letter = "Q";
                    break;
                case 17:
                    letter = "V";
                    break;
                case 18:
                    letter = "H";
                    break;
                case 19:
                    letter = "L";
                    break;
                case 20:
                    letter = "C";
                    break;
                case 21:
                    letter = "K";
                    break;
                case 22:
                    letter = "E";
                    break;
            }
            alert("Número: " + number + ", Letra: " + letter);
            number = null;

        } else { alert("El número de DNI introducido es erróneo") }
    } else {
        if (number !== null) { alert(number + "No es un número") }

    }
} while (number !== null)
//Primer requisito:La entrada debe ser un número
//Segundo requisito: La entrada debe ser un número entre 0 y 999999999
//Tercer requisito: Si lo introducido no es un n´mero deberá indicarse con un alert al usuario
//Cuarto requisito: Repetir el proceso hasta que el usuario pulse cancelar