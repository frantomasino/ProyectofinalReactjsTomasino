 
## Proyecto Final Tomasino

# eCommerce con ReactJS

Este es un proyecto de ecommerce desarrollado con ReactJS. Permite a los usuarios navegar por una lista de productos, ver detalles de productos individuales, agregar productos al carrito y proceder a la compra.

## Características

- Lista de productos por categoría
- Detalles del producto
- Carrito de compras
- Gestión de stock
- Interfaz de usuario amigable y responsiva

## Tecnologías Utilizadas

- ReactJS
- React Router
- Context API para la gestión del estado global (carrito de compras)
- CSS para el diseño

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/frantomasino/ProyectofinalReactjsTomasino
    cd tu_repositorio
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:

    ```bash
    npm start
    ```

2. Abre [http://localhost:5173/](http://localhost:5173) en tu navegador para ver la aplicación.

## Estructura del Proyecto

ssrc/
├── components/
│   ├── CartView.jsx
│   ├── CartView.css
│   ├── ItemCount.jsx
│   ├── ItemCount.css
│   ├── ItemDetailContainer.jsx
│   ├── ItemDetailContainer.css
│   ├── ItemListContainer.jsx
│   ├── ItemListContainer.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Checkout.jsx
│   ├── Checkout.css
│   ├── CartWidget.jsx
│   ├── CartWidget.css
│   └── Product.jsx
├── contexts/
│   ├── CartContext.jsx
├── app.css
├── app.jsx
├── FirebaseConfig.js

