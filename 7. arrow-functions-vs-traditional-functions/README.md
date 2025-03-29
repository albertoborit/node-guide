### **¿Cuál es la diferencia entre una función tradicional y una arrow function?**

✅ **Funciones tradicionales (`function`)**

✅ **Funciones flecha (`=>`)**

1️⃣ Diferencia en la Sintaxis
2️⃣ Diferencia en el Comportamiento de `this` 

**✅ `this` en funciones tradicionales**

En una función normal, `this` depende de **cómo se llama la función**.

```jsx
const usuario = {
  nombre: "Alberto",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

usuario.saludar(); // "Hola, soy Alberto"
```

- Aquí, `this` hace referencia al objeto `usuario`.

**✅** `this` en **arrow functions**
Las funciones flecha **no crean su propio `this`**, sino que **heredan el `this` del contexto en el que fueron definidas**.

```jsx
const usuario = {
  nombre: "Alberto",
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

usuario.saludar(); // "Hola, soy undefined"
```

- Como `this` en la arrow function **se hereda del contexto externo**, apunta a `window` en navegadores o `global` en Node.js.
- **Solución:** Usar una función normal:
    
    ```jsx
    const usuario = {
      nombre: "Alberto",
      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    };
    
    usuario.saludar(); // "Hola, soy Alberto"
    ```
    

3️⃣ Diferencia en `arguments`
**Las funciones tradicionales** **tienen acceso a** `arguments`:

```jsx
function mostrarArgumentos() {
  console.log(arguments);
}

mostrarArgumentos(1, 2, 3); // [1, 2, 3]
```

**Las funciones flecha NO tienen `arguments`:**

```jsx
const mostrarArgumentos = () => {
  console.log(arguments);
};

mostrarArgumentos(1, 2, 3); // ❌ Error: arguments is not defined
```

✅ **Solución en arrow functions:** Usar el **operador rest (`...`)**

```jsx
const mostrarArgumentos = (...args) => {
  console.log(args);
};

mostrarArgumentos(1, 2, 3); // [1, 2, 3]
```

4️⃣ Diferencia en el Uso con `new` (Constructores)
**Las funciones tradicionales pueden usarse como constructores:**

```jsx
function Persona(nombre) {
  this.nombre = nombre;
}

const alberto = new Persona("Alberto");
console.log(alberto.nombre); // "Alberto"
```

**Las arrow functions NO pueden usarse como constructores:**

```jsx
const Persona = (nombre) => {
  this.nombre = nombre;
};

const alberto = new Persona("Alberto"); // ❌ Error: Persona is not a constructor
```

✅ **Conclusión:** Si necesitas crear instancias, usa una **función tradicional** o una **clase**.

| Característica | Función Tradicional | Arrow Function |
| --- | --- | --- |
| **Sintaxis** | Usa `function nombre() {}` | Usa `const nombre = () => {}` |
| **`this`** | Depende de cómo se llama la función | Se hereda del contexto exterior |
| **`arguments`** | Disponible dentro de la función | No disponible, usar `...args` |
| **Uso con `new`** | Se puede usar como constructor | ❌ No se puede usar con `new` |
| **Uso como método de objeto** | `this` apunta al objeto | `this` apunta al contexto externo |