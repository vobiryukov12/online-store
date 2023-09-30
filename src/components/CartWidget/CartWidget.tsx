import { useContext } from "react";
import { Link } from "react-router-dom";
import { CtxData, StateContext } from "../../context/StateContext";

export function CartWidget() {
  const { state: {count} } = useContext<CtxData>(StateContext);
  
  return (
    <Link to="/cart" className="header-controls-pic header-controls-cart">
      { count > 0 && <div className="header-controls-cart-full">{count}</div> }
      <div className="header-controls-cart-menu"></div>
    </Link>
  );
}
