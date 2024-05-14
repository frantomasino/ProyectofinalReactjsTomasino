 import cartIcon from '../assets/cart.svg';  

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
        </div>
    );
};

export default CartWidget;
