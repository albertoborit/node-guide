## Observer
El patrón Observer es útil en Node.js (y en otros lenguajes de programación) cuando deseas establecer una relación de dependencia uno a muchos entre objetos, de modo que cuando un objeto cambie de estado, todos sus observadores (observers) sean notificados y actualicen su estado o realicen alguna acción en respuesta al cambio:
- Manejo de eventos y notificaciones
- Observadores de eventos de servidor
- Manejo de sockets y comunicación en tiempo real
- Actualización de datos en tiempo real

```
// notification.js - Implementación del patrón Observer para notificaciones

const EventEmitter = require('events');

class NotificationService extends EventEmitter {
  sendNotification(message) {
    console.log('Enviando notificación:', message);
    this.emit('notification', message);
  }
}

// Creamos una única instancia del servicio de notificaciones (Singleton)
const notificationService = new NotificationService();

module.exports = notificationService;

```

```
// archivo1.js
const notificationService = require('./notification');

// Suscribirse al evento de notificación
notificationService.on('notification', (message) => {
  console.log('Recibida notificación:', message);
});

// ...

// Enviar una notificación
notificationService.sendNotification('¡Nuevo mensaje recibido!');

// ...

// archivo2.js
const notificationService = require('./notification');

// Suscribirse al evento de notificación
notificationService.on('notification', (message) => {
  console.log('Recibida notificación:', message);
});

// ...

// Enviar otra notificación
notificationService.sendNotification('Actualización importante');

// ...

```