// components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {/* Aquí puedes agregar más contenido, como la lista de productos */}
        </div>
    );
};

export default ItemListContainer;
