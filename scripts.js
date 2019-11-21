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



let profesor = 'alexys'
console.log(profesor.indexOf('r'))
console.log('Hola amigos'.indexOf('o'))
console.log('Hola amigos'.indexOf('o',2))
console.log('Hola amigos'.indexOf('o','Hola amigos'.indexOf('o')+1))

console.log('Hola amigos'.lastIndexOf('o'))

console.log('https://ed.team/blog'.includes('blog'))

console.log('https://ed.team/blog'.startsWith('https://ed.team'))

