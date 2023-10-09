import { CartWidget } from "../CartWidget";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { SearchWidget } from "../SearchWidget";

export function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />

            <div className="collapse navbar-collapse" id="navbarMain">
              <Menu />
            </div>

            <div className="header-controls-pics">
              <SearchWidget />
              
              <CartWidget />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
