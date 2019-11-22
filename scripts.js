// // 
// /* */
// const number = 20; const Number = 10

// let numero = 10,
//     nombre      =       'Alexys',
//     empresa = 'EDteam'

// let userAge = 9

// let edad = 10
// let apellido = 'Perez'
// let curso = "JavaScript"
// let ciudad = `Lima ${edad}`
// let div = `
//     <div class="container">
//         ${apellido}
//     </div>
// `

// let medidas = [1,2,3,4,5,6,7]
// let data = {
//     nombre:"Alexys",
//     apellido:"Lozada",
//     edad:54
// }

// console.log(typeof edad)

// // document.body.innerHTML = div

// /* */

// let age = prompt('Dime tu edad')

// let isAdult = age >=18 
//                 ? 'Eres mayor de edad'
//                 : 'Aún eres un niño'

// alert(isAdult)




// let number = 5
// let number2 = 9078.4822715754

// console.log(number.toFixed(2))
// console.log(number2.toFixed(3))

// let texto = '20'
// let textToNumber = parseInt(texto,10)

// parseFloat(texto)

// console.log(textToNumber)
// console.log(texto)

// texto = '20.12'
// parseFloat(texto)
// console.log(texto)

// console.log(Math.floor(20.7))
// console.log(Math.ceil(20.1))
// console.log(Math.round(20.5))
// console.log(Math.random()*10)
// console.log(Math.ceil(Math.random()*10))

// console.log('alexys'.length)

// console.log('           hola       '.trim())
// console.log('hola'.toUpperCase())
// console.log('HOLA'.toLowerCase())




// let answer = prompt('¿Cuál es la capital del Perú?').toUpperCase().trim()
// let message = answer === 'LIMA'
//                  ? '¡Correcto!'
//                 : '¡Te equivocaste! La respuesta correcta es Lima'
// alert(message)




// console.log('Hola mundo'.replace('mundo','Jose'))

// console.log('Francisco'.split('c'))
// console.log('Hola mundo cruel'.split(' '))
// console.log('Hola mundo cruel'.split(' ')[2])
// console.log('Hola mundo cruel'.split(' ')[1])
// console.log('Hola mundo cruel'.split(' ')[0])
// console.log('Francisco'.split(''))
// console.log('Francisco'.split('')[4])

// console.log('Hola mundo'.substring(4))
// console.log('Hola mundo'.substring(2))
// console.log('Hola mundo'.substring(2,5))
// console.log('Hola mundo'.substring(2,-1))
// console.log('Hola mundo'.substring(2,-2))
// console.log('Hola mundo'.substring(2,-3))
// console.log('Hola mundo'.substring(5,-3))


// console.log('Hola mundo'.substr(2,5))
// console.log('Hola mundo'.substr(-2))
// console.log('Hola mundo'.substr(-4))
// console.log('Hola mundo'.substr(-2))

// console.log('Hola mundo'.slice(2,5))
// console.log('Hola mundo'.slice(-5,-2))
// console.log('Hola mundo'.slice(1,-1))
// console.log('Hola mundo'.slice(0,-1))



// let profesor = 'alexys'
// console.log(profesor.indexOf('r'))
// console.log('Hola amigos'.indexOf('o'))
// console.log('Hola amigos'.indexOf('o',2))
// console.log('Hola amigos'.indexOf('o','Hola amigos'.indexOf('o')+1))

// console.log('Hola amigos'.lastIndexOf('o'))

// console.log('https://ed.team/blog'.includes('blog'))

// console.log('https://ed.team/blog'.startsWith('https://ed.team'))




// if(3 === 5) console.log('Hola')
// if(5>8) console.log('mundo')
// console.log('JRomero')

// if('a' === 'b') console.log('Me ejecuto')
// let empresa = 'Jose Corp'
// // SCOPE
// if('b' === 'b'){
//     console.log('Me ejecuto')
//     console.log('Me ejecute nuevamente')
//     console.log(empresa)
// }
// if(5 > 3){
//     console.log('paso la condicion')
// }else if(3 > 2){
//     console.log('paso la condición 2')
// }else if(10 > 2){
//     console.log('paso la condición 3')
// }
// console.log('simpre me voy a ejecutar')



// if (2 > 3 && 5 > 2) {
//     console.log('pasó la condición')
// }else if(4 > 10 || 3 > 2 ){
//     console.log('pasó la condición 2')
// }else if(10 > 2){
//     console.log('pasó la condición 3')
// }

// if (4 > 3) {
//     console.log('Paso la condicion 1')
//     if(5 > 3){
//         console.log('paso la condicion 1.1')
//     }
// }else if(3 > 2){
//     console.log('paso la condicion 2')
// }else if(10 > 2){
//     console.log('paso la condicion 3')
// }



// let age = parseInt(prompt('Dime tu edad'),10)
// if (age) {
//     if(age >= 18){
//         alert('Eres mayor de edad')
//     }else{
//         alert('Te faltan años')
//     }
// }else {
//     age = parseInt(prompt('Tu edad debe ser un numero'),10)
// }

// let message = age >=18
//                 ? 'Eres mayor de edad'
//                 : 'Te faltan años'
// alert(message)





// let answer = prompt('Escoge un número del 1 al 3')
// switch (answer) {
//     case '1':
//         alert('Eres timido')
//         break
//     case '2':
//         alert('Eres extrovertido')
//         break
//     case '3':
//         alert('Eres muy feliz')
//         break
//     default:
//         alert('Por favor escribe un numero del 1 al 3')
//         break;
// }

// let answer = prompt(`La capital de colombia es:
// a. Bogotá
// b. Lima
// c. Madrid
// d. Mexico
// e. La Paz
// `).toUpperCase().trim()
// switch (answer) {
//     case 'A':
//         alert('¡Correcto!')
//         break
//     case 'B':
//         alert('Te equivocaste. Lima es la capital de Perú')
//         break
//     case 'C':
//         alert('Te equivocaste. Madrid es la capital de España')
//         break
//     case 'D':
//         alert('Te equivocaste. Mexico es la capital de Mexico')
//         break    
//     case 'E':
//         alert('Te equivocaste. La Paz es la capital de Bolivia')
//         break
//     default:
//         alert('Ingrese una respuesta entre a - e')
//         break
// }




// for (let i = 1; i <= 100; i++) {
//     if(i % 7 === 0) console.log(i)
//     if(i % 5 === 0) console.log(i)
// }

// let n = 0
// for (let i = 1; i <= 100; i++) {
//     // if(i % 7 === 0) continue
//     // console.log(i)

//     // if(i % 5 === 0 || i % 2 === 0) {
//     //     continue
//     // } else {
//     //     console.log(i)
//     // }

//     if(i % 7 === 0){
//         console.log(i)
//         n++
//     }
//     if (n >= 5) break
// }



// let i = 10
// while (i--) {
//     console.log(i)
// }

let password = 'JRomero'
let pass
do{
    pass = prompt('Ingrese la contraseña')
}while (pass !== password)