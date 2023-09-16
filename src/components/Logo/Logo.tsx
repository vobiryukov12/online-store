import { Link } from 'react-router-dom';
import logo from '../../assets/images/header-logo.png';

export function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Bosa Noga" width={184} height={59} />
    </Link>
  );
}
