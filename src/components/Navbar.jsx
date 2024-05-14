import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#">Inicio</a></li>
                    <li className="nav-item"><a href="#">Productos</a></li>
                    <li className="nav-item"><a href="#">Quienes Somos</a></li>
                </ul>
                <div className="cart-widget-container">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
