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

// let password = 'JRomero'
// let pass
// do{
//     pass = prompt('Ingrese la contraseña')
// }while (pass !== password)





// function saludar(persona,sexo) {
//     let saludo = sexo === 'm'
//                         ?`Bienvenido`
//                         :`Bienvenida`
//     return `${saludo} al mundo de la programación ${persona}`
// }
// console.log(saludar('Jose','m'))
// console.log(saludar('Francisco','m'))
// console.log(saludar('Maria','f'))

// const saludar = (persona = 'visitante',sexo = 'm') => {
//     let saludo = sexo === 'm'
//                           ? `Bienvenido`
//                           : `Bienvenida`
//     return `${saludo} al mundo de la programación ${persona}`
// }
// console.log(saludar('Francisco'))
// console.log(saludar('Maria','f'))
// console.log(saludar())

// const sumar = (a,b) => a + b
// console.log(sumar(2,5))
// console.log(sumar(10,10))

// const sumarTodos = (...numeros) => {
//     let resultado = 0
//     for (let i = 0; i < numeros.length; i++) {
//         resultado += numeros[i]
//     }
//     return resultado
// }
// console.log(sumarTodos(1,2,35,4,5,6,7))




const c = console.log
// const c = console.log()
// const multiplicar = (a,b) => a * b
// console.log(c)
// c(multiplicar(3,4))
// let edad = multiplicar(5,4)
// let edad2 = multiplicar(edad,2)
// let edad3 = multiplicar(multiplicar(5,4),2)
// c(edad)
// c(edad2)
// c(edad3)

// function sumar(x){
//     return function(y){
//         return x + y
//     }
// }
// const sumar = x => y => x + y
// // closures
// c(sumar(10)(20))

// const doSomething = x => y => x * y
// const a = doSomething(2)(2)
// const b = doSomething(3)
// c(doSomething(a)(b(3)))




let a = 'Hola'
// const saludo = persona => {
//     a = a + ' ' + persona
//     return a
// }
// c(saludo(a,'Francisco'))
// c(a)

// const saludar = (saludo,persona) => `${saludo} ${persona}`
// c(saludar(a,'Francisco'))
// c(a)

// const saludar = ((saludo,persona) => `${saludo} ${persona}`)(a,'Jose')
// c(saludar)

// setTimeout(() => {
//     alert('Hola amigos')
// }, 3000)




// {
//     let profesor = 'Jose Romero'
//     {
//         c(profesor)
//     }
// }
// c(profesor)




// function sumar(x){
//     return function(y){
//         return x + y
//     }
// }
// c(sumar(2)(3))

// function aumentar () {
//     let numero = 0
//     return function () {
//         numero++
//         c(numero)
//     }
// }
// aumentar()()
// const incrementar = aumentar()
// incrementar()
// incrementar()
// incrementar()
// incrementar()

// let numero = 0
// function aumentar () {
//     numero++
//     c(numero)
// }
// aumentar()
// aumentar()
// aumentar()
// aumentar()
// aumentar()




// let edad = 5
// let user = {
//     nombre: 'Jose',
//     edad: 27,
//     getEdad() {
//         c(this.edad)
//         c(edad)
//     }
// }
// user.getEdad()




// let array = ['hola', 2, true, undefined, [1,2,3,4], {}, 'final']
// c(array)
// c(array[4])
// c(array[5])
// c(array[0])
// c(array[array.length - 1])

// let arr5 = ['Bienvenido', 'de nuevo', 'Jose', 'Romero']
// let[s1, s2, s3, s4] = arr5
// c(s1)
// c(s2)
// c(s3)
// c(s4)





// let arr = [1,2,3,4]
// arr.push(5)
// c(arr)
// c(arr.pop())
// c(arr)
// c(arr.unshift('Nuevo'))
// c(arr)
// c(arr.shift())
// c(arr)

// let arr = ['Peru','Colombia','Mexico','Bolivia']
// c(arr)
// c(arr.splice(2,0,'Chile','Ecuador'))
// c(arr)
// c(arr.splice(4,1,'Costa Rica'))
// c(arr)
// c(arr.splice(1,1))
// c(arr)

// c(arr.slice(2,4))
// c(arr)





// let text = 'Hola mamá'
// c(text.split(''))
// c(text.split('').reverse())
// c(text.split('').reverse().join(''))

// const reverseText = string => string.split('').reverse().join('')
// c(reverseText('Hola mundo'))
// c(reverseText('JavaScript'))
// c(reverseText('Todo lo que se hace con esfuerzo tarde o temprano funcionara'))

let arr2 = ['K','W','P','R','A','M','G','E']
c(arr2.sort())
c(arr2.sort().reverse())
let numbers = [10,300,45,20,58,750,1000,64,5]
c(numbers)
c(numbers.sort())
c(numbers.sort((a,b) => a - b))