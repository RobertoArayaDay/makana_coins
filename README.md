# Makana Coins

Makana Coins es un proyecto frontend que simula un sistema de recompensas digitales para los usuarios de Makana. Los usuarios acumulan puntos al participar en rutinas y atenciones, y pueden canjearlos por giftcards directamente desde la app.

Este proyecto está desarrollado en **React** con **Vite**, **Tailwind CSS** y **shadcn/ui**, con un enfoque **mobile-first / responsive**.

---

## Flujo implementado

- La información de Makana Coins y giftcards es personal y privada, por lo que se accede desde el perfil del usuario.
- Flujo al abrir la sección de saldo:
  - Ver saldo actual de Makana Coins.
  - Canjear coins por giftcards de distintas tiendas (solo una giftcard a la vez para simplificar la experiencia).
  - Consultar el historial y detalle de las giftcards recibidas.
  - Confirmar el canje mediante un modal claro y transparente, que permite validar toda la información antes de completar la compra.

---

## Instalación y ejecución

```bash
git clone <repo-url>
cd makana-coins
npm install
npm run dev
```

Acceder a la página principal:

```
http://localhost:5173/makana_coins/#/coins
```

---

## Decisiones técnicas

- Se utilizan **mockups en JSON** para simular datos de usuario, giftcards compradas y catálogo.
- El usuario se maneja con **Context**, simulando Redux.
- Se mantiene el **formato de llamadas a API**, pero actualmente cargan los datos de los mocks.
- Manejo de **loading y error**, con delay simulado para la carga de usuario.
- Se usan **librerías de UI y CSS** como shadcn para componentes integrados y consistentes.

---

## Decisiones de producto / UX

- **Accesso al Canje**
  Integrado en la sección de perfil del usuario, ya que los coins y giftcards son datos personales. Esto permite mantener coherencia y que el usuario asocie su saldo con su información personal.
  - Alternativa: un widget en la página principal que muestre el saldo y lleve al perfil para un acceso rápido

- **Flujo de uso**
  - Ver saldo de Makana Coins.
  - Canjear coins por giftcards (solo una a la vez, para simplificar la experiencia).
  - Consultar historial y detalle de giftcards recibidas.
  - Confirmación del canje mediante modal transparente, mostrando saldo y detalles antes de comprar.

- **Reducción de fricción para usuarios con baja alfabetización digital:**  
  Se diseñó un flujo simple e intuitivo, con elementos visuales y mensajes claros que guían al usuario en cada paso:
  - **Botones importantes en negro** para destacar acciones clave, siempre visibles y accesibles.
  - **Modal de confirmación al canjear un giftcard**, que muestra de forma clara el costo en Makana Coins y los detalles de la giftcard antes de confirmar.
  - **Mensajes breves y directos**, sin tecnicismos, que explican las acciones que el usuario está realizando.
  - **Feedback inmediato mediante toasts** al copiar un código de giftcard.
  - **Íconos y colores consistentes** que ayudan a entender la función de cada elemento.

- **Prevención de canjes erróneos:**  
  Modal de confirmación antes de completar el canje, con todos los detalles y el costo en coins.

- **Escalabilidad (50 tiendas, miles de usuarios):**
  - Paginación o lazy loading en el catálogo de giftcards: las giftcards se van cargando mientras se van necesitando y scrolleando en la vista.
  - Iconos y categorización de tiendas para facilitar la navegación.

- **Notas adicionales del sistema de canje:**
  - Solo se puede comprar una giftcard a la vez.
  - La confirmación se realiza mediante modal, mostrando la cantidad de Makana Coins disponibles.

---

## Estructura del proyecto

- `src/pages/` → páginas principales.
- `src/components/` → componentes reutilizables (Cards, Buttons, Headers, Spinners, Modals).
- `src/context/` → Context para el usuario (`UserProvider`).
- `src/hooks/` → hooks para manejo de datos (`useCatalogGiftCards`, etc.).
- `src/mocks/` → JSON con datos ficticios.
- `src/axios/` → simulación de llamadas a API.

---

## Mejoras futuras

- Implementar **usuario en Redux** para manejo global de estado.
- Evitar **prop-drilling** para giftcards; usar **context/providers** para pasar los datos de forma más fluida.
- Agregar **iconos a cada tienda** en el catálogo para mejor identificación.
- Usar **React Query** para manejo de queries y cache, especialmente al cargar "Mis giftcards", y actualizarlas de forma eficiente al comprar nuevas.

---

## Stack tecnológico

- React 19 + Vite
- Tailwind CSS + shadcn/ui
- React Router v6
- Lucide React (iconos)
- Sonner (toasts)

## Video del flujo

Video del flujo disponible en el siguiente link: https://youtu.be/KY5KLZXxEvc
