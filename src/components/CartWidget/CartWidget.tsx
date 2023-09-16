import { Link } from "react-router-dom";

export function CartWidget() {
  return (
    <Link to="/cart" className="header-controls-pic header-controls-cart">
      <div className="header-controls-cart-full">1</div>
      <div className="header-controls-cart-menu"></div>
    </Link>
  );
}
