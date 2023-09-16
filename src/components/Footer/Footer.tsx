import { Contacts } from "../Contacts";
import { Copyright } from "../Copyright";
import { FooterMenu } from "../FooterMenu";
import { FooterWidget } from "../FooterWidget";
import { Payment } from "../Payment";

export function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <FooterWidget>
            <h5>Информация</h5>
            <FooterMenu />
          </FooterWidget>
        </div>

        <div className="col">
          <FooterWidget>
            <h5>Принимаем к оплате:</h5>
            <Payment />
          </FooterWidget>

          <FooterWidget>
            <Copyright />
          </FooterWidget>
        </div>

        <div className="col text-right">
          <FooterWidget>
            <h5>Контакты:</h5>
            <Contacts />
          </FooterWidget>
        </div>
      </div>
    </footer>
  );
}
