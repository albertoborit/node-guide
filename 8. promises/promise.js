```
A diferencia de Promise.all, Promise.allSettled no se rechaza inmediatamente si alguna de las promesas es rechazada. En cambio, espera a que todas las promesas se resuelvan o se rechacen antes de devolver los resultados.
```
//Promise All Settled
const promisesAS = [
    Promise.resolve(42),
    Promise.reject(new Error('Oops!')),
    Promise.resolve('Hello'),
  ];
  
  Promise.allSettled(promises)
    .then((results) => {
      console.log(results);
    });

```
- Resultado

[
    { status: 'fulfilled', value: 42 },
    { status: 'rejected', reason: Error: Oops! },
    { status: 'fulfilled', value: 'Hello' }
]
```

//Promise  All

const promisesA = [
    Promise.resolve(42),
    Promise.reject(new Error('Oops!')),
    Promise.resolve('Hello'),
  ];
  
  Promise.all(promises)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error.message);
    });

//Resultado: Error: Oops! 