 import cartIcon from '../assets/cart.svg'; // Asegúrate de que la ruta sea correcta

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
        </div>
    );
};

export default CartWidget;
