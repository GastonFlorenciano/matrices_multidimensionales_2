const prompt = require('prompt-sync')()

let datos = []

while (true) {
  console.log('\n--- Menú ---')
  console.log('1. Ingresar nueva persona')
  console.log('2. Mostrar todos los datos')
  console.log('3. Filtrar por DNI')
  console.log('4. Salir')

  let opcion = prompt('Elige una opción:')

  if (opcion === '1') {
    let nombre = prompt('Ingresa el nombre:').trim()
    let apellido = prompt('Ingresa el apellido:').trim()
    let dni = prompt('Ingresa el DNI:').trim()
    let telefonos = prompt('Ingresa los teléfonos separados por comas:')
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t)
    let hijos = prompt('Ingresa los nombres de los hijos separados por comas:')
      .split(',')
      .map((h) => h.trim())
      .filter((h) => h)

    datos.push([nombre, apellido, dni, telefonos, hijos])
  } else if (opcion === '2') {
    if (datos.length === 0) {
      console.log('No hay datos ingresados aún.')
    } else {
      console.log('\nLista de personas ingresadas:')
      datos.forEach((persona) => {
        console.log(
          `${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`
        )
      })
      console.log('\nMatriz de datos:', JSON.stringify(datos, null, 2))
    }
  } else if (opcion === '3') {
    let dniBuscar = prompt('Ingresa el DNI para filtrar:').trim()
    let encontrada = false

    for (let persona of datos) {
      if (persona[2] === dniBuscar) {
        console.log(`\nDatos de ${persona[0]} ${persona[1]}:`)
        console.log(
          `DNI: ${persona[2]}, Teléfonos: ${persona[3].length} teléfono(s), Hijos: ${persona[4].length}`
        )
        encontrada = true
        break
      }
    }

    if (!encontrada) {
      console.log('No se encontró una persona con ese DNI.')
    }
  } else if (opcion === '4') {
    console.log('Saliendo del programa...')
    break
  } else {
    console.log('Opción no válida, intenta de nuevo.')
  }
}