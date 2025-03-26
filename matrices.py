datos = []

while True:
    print("\n--- Menú ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    
    opcion = input("Elige una opción: ")
    
    if opcion == "1":
        nombre = input("Ingresa el nombre: ")
        apellido = input("Ingresa el apellido: ")
        dni = input("Ingresa el DNI: ")
        telefonos = input("Ingresa los teléfonos separados por comas: ").split(',')
        hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(',')
        
        datos.append([nombre.strip(), apellido.strip(), dni.strip(), [t.strip() for t in telefonos if t.strip()], [h.strip() for h in hijos if h.strip()]])
    
    elif opcion == "2":
        if not datos:
            print("No hay datos ingresados aún.")
        else:
            print("\nLista de personas ingresadas:")
            for persona in datos:
                print(f"{persona[0]} {persona[1]}, DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")
            print("\nMatriz de datos:", datos)
    
    elif opcion == "3":
        dni_buscar = input("Ingresa el DNI para filtrar: ")
        encontrada = False
        for persona in datos:
            if persona[2] == dni_buscar:
                print(f"\nDatos de {persona[0]} {persona[1]}:")
                print(f"DNI: {persona[2]}, Teléfonos: {len(persona[3])} teléfono(s), Hijos: {len(persona[4])}")
                encontrada = True
                break
        if not encontrada:
            print("No se encontró una persona con ese DNI.")
    
    elif opcion == "4":
        print("Saliendo del programa...")
        break
    else:
        print("Opción no válida, intenta de nuevo.")